function getAudioContext() {
  const AudioCtor = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtor) return null;
  if (!window.__calisteniaAudioCtx) {
    window.__calisteniaAudioCtx = new AudioCtor();
  }
  return window.__calisteniaAudioCtx;
}

async function ensureAudioReady() {
  const ctx = getAudioContext();
  if (!ctx) return;
  if (ctx.state === 'suspended') {
    await ctx.resume();
  }
}

function beep({ frequency = 880, duration = 0.2, volume = 0.08, wave = 'sine' } = {}) {
  const ctx = getAudioContext();
  if (!ctx) return;

  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = wave;
  osc.frequency.setValueAtTime(frequency, ctx.currentTime);

  gain.gain.setValueAtTime(0, ctx.currentTime);
  gain.gain.linearRampToValueAtTime(volume, ctx.currentTime + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start();
  osc.stop(ctx.currentTime + duration);
}

export async function playBeep() {
  await ensureAudioReady();
  beep({ frequency: 880, duration: 0.5, volume: 0.12 });
}

export async function playWarningBeep() {
  await ensureAudioReady();
  beep({ frequency: 659.25, duration: 0.22, volume: 0.12 });
}

export async function playFinalBeep() {
  await ensureAudioReady();
  [880, 1174.66].forEach((freq, index) => {
    setTimeout(() => beep({ frequency: freq, duration: 0.25, volume: 0.14 }), index * 130);
  });
}

export async function playCelebrationSound() {
  await ensureAudioReady();
  const notes = [523.25, 659.25, 783.99, 1046.5];
  notes.forEach((freq, index) => {
    setTimeout(() => beep({ frequency: freq, duration: 0.3, volume: 0.12, wave: 'triangle' }), index * 110);
  });
}
