// Tria la millor font del vídeo del hero per a aquest navegador.
//
// Per a un vídeo base `/videos/nom.mp4` (H.264, compatible amb tot) es proven, per ordre:
//   1. `/videos/nom_av1.mp4`  (AV1: Chrome, Edge, Firefox i Safari amb maquinari compatible)
//   2. `/videos/nom_hevc.mp4` (HEVC: Safari, i Chrome/Edge amb maquinari compatible)
//   3. `/videos/nom.mp4`      (H.264: reserva per a la resta de casos; és el vídeo de sempre)
// Una variant només es tria si el navegador diu que la pot reproduir I que ho farà amb fluïdesa
// (Media Capabilities); així un ordinador antic o poc potent no s'encalla amb un còdec exigent.

type Candidate = { suffix: string; type: string; bitrate: number };

const CANDIDATES: Candidate[] = [
  { suffix: '_av1', type: 'video/mp4; codecs="av01.0.08M.08"', bitrate: 2_200_000 },
  { suffix: '_hevc', type: 'video/mp4; codecs="hvc1.1.6.L120.B0"', bitrate: 2_300_000 },
];

async function canUse(el: HTMLVideoElement, c: Candidate): Promise<boolean> {
  // 1) El navegador ha de dir que sap reproduir aquest còdec.
  if (!el.canPlayType(c.type)) return false;
  const mc = (navigator as any).mediaCapabilities;
  if (!mc || typeof mc.decodingInfo !== 'function') {
    // Sense Media Capabilities només ens refiem d'un «probably» explícit.
    return el.canPlayType(c.type) === 'probably';
  }
  try {
    // 2) I que ho farà amb fluïdesa a 1080p/30 fps.
    const info = await mc.decodingInfo({
      type: 'file',
      video: { contentType: c.type, width: 1920, height: 1080, bitrate: c.bitrate, framerate: 30 },
    });
    return !!(info && info.supported && info.smooth);
  } catch {
    return false;
  }
}

export async function pickVideoSource(el: HTMLVideoElement, baseSrc: string): Promise<string> {
  if (!baseSrc || !/\.mp4$/i.test(baseSrc)) return baseSrc;
  const stem = baseSrc.replace(/\.mp4$/i, '');
  for (const c of CANDIDATES) {
    if (await canUse(el, c)) return `${stem}${c.suffix}.mp4`;
  }
  return baseSrc;
}

// Si la variant triada falla en carregar-se o descodificar-se, es torna al vídeo base (H.264) un sol cop.
export function fallbackOnError(el: HTMLVideoElement, baseSrc: string, onSwitch?: () => void): void {
  el.addEventListener(
    'error',
    () => {
      if (el.getAttribute('src') === baseSrc) return;
      el.src = baseSrc;
      el.load();
      if (onSwitch) onSwitch();
    },
    { once: true }
  );
}
