import { exercises, loadDailyProgress, exerciseProgress } from './workout.js';
import {
  renderExercises,
  renderProgressBar,
  updateGeneralTimerDisplay,
  attachEventHandlers,
  openModal,
  startGuidedWorkout,
  setState,
  getState,
  renderSetsTracker
} from './ui.js';

loadDailyProgress();
renderExercises(exercises);
renderProgressBar();
updateGeneralTimerDisplay();
attachEventHandlers();

// Debug helper: global error/report overlay to capture runtime errors in the browser
(function attachGlobalErrorOverlay() {
  function createOverlay() {
    const el = document.createElement('div');
    el.id = 'global-error-overlay';
    el.style.position = 'fixed';
    el.style.left = '12px';
    el.style.right = '12px';
    el.style.bottom = '12px';
    el.style.zIndex = '99999';
    el.style.maxHeight = '40vh';
    el.style.overflow = 'auto';
    el.style.background = 'rgba(15,23,42,0.95)';
    el.style.color = '#ffdede';
    el.style.border = '1px solid rgba(255,0,0,0.18)';
    el.style.padding = '12px';
    el.style.fontFamily = 'monospace';
    el.style.fontSize = '12px';
    el.style.borderRadius = '8px';
    el.style.boxShadow = '0 10px 30px rgba(0,0,0,0.6)';
    el.style.display = 'none';
    el.addEventListener('click', () => { el.style.display = 'none'; });
    document.body.appendChild(el);
    return el;
  }

  const overlay = createOverlay();

  function show(msg) {
    overlay.style.display = 'block';
    const time = new Date().toLocaleTimeString();
    const entry = document.createElement('div');
    entry.style.marginBottom = '8px';
    entry.innerText = `[${time}] ${msg}`;
    overlay.appendChild(entry);
    console.error(msg);
  }

  window.addEventListener('error', (ev) => {
    try {
      const msg = ev && ev.error && ev.error.stack ? ev.error.stack : (ev.message || String(ev));
      show(msg);
    } catch (e) {
      console.error('Error overlay failed', e);
    }
  });

  window.addEventListener('unhandledrejection', (ev) => {
    try {
      const reason = ev && ev.reason ? (ev.reason.stack || ev.reason) : 'Unhandled rejection';
      show(`UnhandledRejection: ${reason}`);
    } catch (e) {
      console.error('Error overlay failed', e);
    }
  });
})();

window.__calisteniaState = getState();
window.openModal = openModal;
window.startGuidedWorkout = startGuidedWorkout;
window.renderSetsTracker = renderSetsTracker;
window.exerciseProgress = exerciseProgress;
window.exercises = exercises;
