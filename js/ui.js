import {
  exercises,
  exerciseProgress,
  getProgressSummary,
  completeCurrentSet,
  resetDailyProgress,
  swapWorkoutExercise,
  resetWorkoutToDefault,
  getAvailableAlternatives
} from './workout.js';
import { playBeep, playFinalBeep, playWarningBeep, playCelebrationSound } from './audio.js';

const state = {
  currentExercise: null,
  activeFilter: 'todos',
  guidedWorkout: false,
  guidedIndex: 0,
  modalTimer: 60,
  modalPreset: 60,
  modalTimerInterval: null,
  modalTimerRunning: false,
  timerInterval: null,
  totalSeconds: 60
};

export function setState(next) {
  Object.assign(state, next);
}

export function getState() {
  return state;
}

export const exerciseGIFs = {
  flexao: 'assets/exercicios/flexao.gif',
  pike: 'assets/exercicios/pike.gif',
  remada: 'assets/exercicios/remada.gif',
  superman: 'assets/exercicios/superman.gif',
  agachamento: 'assets/exercicios/agachamento.gif',
  afundo: 'assets/exercicios/afundo.gif',
  elevacaoPelvica: 'assets/exercicios/elevacaoPelvica.gif',
  prancha: 'assets/exercicios/prancha.gif',
  remador: 'assets/exercicios/remador.gif',
  elevacaoPernas: 'assets/exercicios/elevacaoPernas.gif',
  polichinelo: 'assets/exercicios/polichinelo.gif',
  panturrilha: 'assets/exercicios/panturrilha.gif',
  flexaoJoelho: 'assets/exercicios/flexaoJoelho.gif',
  flexaoDiamante: 'assets/exercicios/flexaoDiamante.gif',
  dips: 'assets/exercicios/dips.gif',
  agachamentoSumo: 'assets/exercicios/agachamentoSumo.gif'
};


export function getExerciseMediaHTML(svgKey, title) {
  const src = exerciseGIFs[svgKey] || `assets/exercicios/${svgKey}.gif`;
  return `<img class="exercise-card-gif" src="${src}" alt="${title}" loading="lazy" />`;
}

export function renderExercises(data = exercises) {
  const container = document.getElementById('exerciseContainer');
  if (!container) return;

  container.innerHTML = '';

  data.forEach((item) => {
    const prog = exerciseProgress[item.id];
    const completedCount = prog ? prog.completed.filter(Boolean).length : 0;
    const isAllDone = completedCount === item.totalSets;

    const card = document.createElement('div');
    card.className = 'exercise-card';
    card.dataset.exerciseId = item.id;
    card.tabIndex = 0;
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `Abrir detalhes do exercício ${item.title}`);

    card.addEventListener('click', () => openModal(item));
    card.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openModal(item);
      }
    });

    const levelClass = {
      beginner: 'card-tag-beginner',
      intermediate: 'card-tag-intermediate',
      advanced: 'card-tag-advanced'
    }[item.level] || 'card-tag-beginner';

    const iconMap = { push: '⬆️', pull: '⬇️', isometric: '⏸️', leg: '🦵' };

    card.innerHTML = `
      <div class="img-container">
        <button type="button" class="btn-swap-exercise" data-swap-id="${item.id}" title="Trocar este exercício por outro">
          <span>🔄</span> Trocar
        </button>
        <span class="card-badge">${item.categoryLabel}</span>
        <span class="card-progress-pill" style="${isAllDone ? 'color:#10b981; border-color:#10b981;' : ''}">
          ${isAllDone ? '✓ Concluído' : `${completedCount}/${item.totalSets} séries`}
        </span>
        ${getExerciseMediaHTML(item.svgKey, item.title)}
      </div>
      <div class="exercise-body">
        <div class="card-tags-row">
          <span class="card-tag ${levelClass}">${item.levelLabel}</span>
          <span class="card-tag card-tag-type">${iconMap[item.type] || ''} ${item.typeLabel}</span>
          <span class="card-tag card-tag-equip">🎽 ${item.equipment}</span>
        </div>
        <div class="exercise-title">${item.title}</div>
        <div class="exercise-meta">${item.sets}</div>
        <div class="exercise-desc">${item.desc}</div>
        <div class="card-footer-action">
          <span>${isAllDone ? 'Ver detalhes' : 'Iniciar exercício'}</span>
          <span>→</span>
        </div>
      </div>
    `;

    const swapBtn = card.querySelector('.btn-swap-exercise');
    if (swapBtn) {
      swapBtn.addEventListener('click', (ev) => {
        ev.stopPropagation();
        openSwapModal(item);
      });
    }

    container.appendChild(card);

    // If there's a saved image for this exercise, apply it to the card
    try {
      const saved = localStorage.getItem(`card_image_${item.id}`);
      if (saved) {
        const imgContainer = card.querySelector('.img-container');
        if (imgContainer) {
          const badgeHTML = imgContainer.querySelector('.card-badge')?.outerHTML || '';
          const pillHTML = imgContainer.querySelector('.card-progress-pill')?.outerHTML || '';
          imgContainer.innerHTML = `${badgeHTML}${pillHTML}<img class="svg-icon" src="${saved}" alt="Imagem do exercício" />`;
        }
      }
    } catch (e) {
      // ignore localStorage errors
    }
  });
}

export function renderProgressBar() {
  const { percent, complete, total } = getProgressSummary();
  const bar = document.getElementById('dailyProgressBarFill');
  const subtitle = document.getElementById('dailyProgressSubtitle');

  if (bar) bar.style.width = `${percent}%`;
  if (subtitle) {
    subtitle.innerHTML = percent === 100
      ? `🎉 <strong>100% do treino concluído!</strong> Parabéns por completar todos os ${total} exercícios.`
      : `<strong>${percent}%</strong> do treino de hoje concluído (${complete} de ${total} exercícios)`;
    subtitle.style.color = percent === 100 ? '#10b981' : 'var(--text-muted)';
  }

  const pillProgress = document.getElementById('pillProgressSummary');
  if (pillProgress) {
    pillProgress.textContent = `📊 ${percent}%`;
  }
}

export function renderSetsTracker() {
  if (!state.currentExercise) return;

  const prog = exerciseProgress[state.currentExercise.id];
  const total = state.currentExercise.totalSets;
  const completedCount = prog.completed.filter(Boolean).length;
  const isAllDone = completedCount === total;

  const progressFill = document.getElementById('modalSetsProgressFill');
  if (progressFill) progressFill.style.width = `${Math.round((completedCount / total) * 100)}%`;

  const statusEl = document.getElementById('modalSetsStatus');
  if (statusEl) {
    statusEl.innerText = isAllDone
      ? `🎉 Todas as ${total} séries concluídas!`
      : `Série ${prog.activeSet + 1} de ${total} (${completedCount} concluída${completedCount === 1 ? '' : 's'})`;
    statusEl.style.color = isAllDone ? '#10b981' : 'var(--accent)';
  }

  const grid = document.getElementById('modalSetsGrid');
  if (!grid) return;

  grid.innerHTML = '';

  for (let i = 0; i < total; i++) {
    const isCompleted = prog.completed[i];
    const isActive = !isAllDone && prog.activeSet === i;

    const pill = document.createElement('button');
    pill.type = 'button';
    pill.className = `set-pill-btn ${isCompleted ? 'completed' : ''} ${isActive ? 'active' : ''}`;
    pill.textContent = `Série ${i + 1}`;
    pill.addEventListener('click', () => selectSet(i));
    grid.appendChild(pill);
  }

  const completeBtn = document.getElementById('modalCompleteSetBtn');
  const textEl = document.getElementById('modalCompleteSetBtnText');
  const iconEl = document.getElementById('modalCompleteSetBtnIcon');

  if (completeBtn && textEl && iconEl) {
    if (isAllDone) {
      completeBtn.className = 'btn btn-complete-set all-done';
      iconEl.textContent = '↺';
      textEl.textContent = 'Reiniciar Séries deste Exercício';
    } else {
      completeBtn.className = 'btn btn-complete-set';
      iconEl.textContent = '✓';
      textEl.textContent = `Concluir Série ${prog.activeSet + 1} & Iniciar Descanso`;
    }
  }
}

export function selectSet(index) {
  if (!state.currentExercise) return;
  exerciseProgress[state.currentExercise.id].activeSet = index;
  renderSetsTracker();
}

export function openModal(exercise) {
  state.currentExercise = exercise;
  state.guidedIndex = exercises.findIndex((item) => item.id === exercise.id);

  const modal = document.getElementById('exerciseModal');
  if (modal) modal.classList.add('active');
  document.body.style.overflow = 'hidden';

  document.getElementById('modalTitle').textContent = exercise.title;
  document.getElementById('modalMeta').textContent = exercise.sets;
  document.getElementById('modalDesc').textContent = exercise.desc;

  const svgContainer = document.getElementById('modalSvgContainer');
  if (svgContainer) {
    const gifSrc = exerciseGIFs[exercise.svgKey] || `assets/exercicios/${exercise.svgKey}.gif`;
    svgContainer.innerHTML = `
      <img class="modal-exercise-gif" src="${gifSrc}" alt="${exercise.title}" />
    `;
  }

  const guidedBar = document.getElementById('modalGuidedBar');
  if (guidedBar) {
    guidedBar.classList.toggle('visible', state.guidedWorkout);
    document.getElementById('modalGuidedStepText').textContent = `Modo Guiado • Exercício ${state.guidedIndex + 1} de ${exercises.length}`;
  }

  renderSteps(exercise);
  renderBiomechPanel(exercise);
  switchModalTab('exec');
  resetModalTimer();
  renderSetsTracker();
}

export function closeModal() {
  const modal = document.getElementById('exerciseModal');
  if (modal) modal.classList.remove('active');
  document.body.style.overflow = '';
  pauseModalTimer();
}

export function renderSteps(exercise) {
  const container = document.getElementById('modalStepsList');
  if (!container) return;

  container.innerHTML = exercise.steps.map((step, index) => `
    <div class="step-item">
      <div class="step-number">${index + 1}</div>
      <div>
        <div class="step-title">${['🎯', '💪', '🌬️'][index] || '•'} ${step.title}</div>
        <div class="step-desc">${step.desc}</div>
      </div>
    </div>
  `).join('');
}

export function renderBiomechPanel(exercise) {
  const panel = document.getElementById('biomechPanel');
  if (!panel) return;

  const agonists = (exercise.agonists || []).map((item) => `<span class="muscle-badge-agonist">🔴 ${item}</span>`).join('');
  const synergists = (exercise.synergists || []).map((item) => `<span class="muscle-badge-synergist">🔵 ${item}</span>`).join('');
  const mistakes = (exercise.mistakes || []).map((item) => `
    <li class="mistake-item"><span class="mistake-icon">✕</span><span>${item}</span></li>
  `).join('');

  panel.innerHTML = `
    <div class="biomech-card">
      <div class="biomech-card-title">💪 Músculos Envolvidos</div>
      <div class="muscle-badges-container">${agonists || '—'}</div>
      <div style="margin-top: 12px;" class="muscle-badges-container">${synergists || '—'}</div>
    </div>
    <div class="biomech-card">
      <div class="biomech-card-title">⏱ Cadência</div>
      <div class="tempo-highlight-box"><span>🥁</span><span>${exercise.tempo || '2s · 2s · 2s'}</span></div>
      ${exercise.tempoDetail ? `<p style="margin-top:10px;color:var(--text-muted);line-height:1.5;">${exercise.tempoDetail}</p>` : ''}
    </div>
    <div class="biomech-card">
      <div class="biomech-card-title">🧍 Posição Inicial & Contração</div>
      <p class="biomech-text"><strong>Posição inicial:</strong> ${exercise.startPosition}</p>
      <p class="biomech-text" style="margin-top:12px;"><strong>Contração:</strong> ${exercise.contraction}</p>
    </div>
    <div class="biomech-card">
      <div class="biomech-card-title">⚠️ Erros Comuns</div>
      <ul class="mistakes-list">${mistakes || '<li class="mistake-item"><span class="mistake-icon">✕</span><span>—</span></li>'}</ul>
    </div>
  `;
}

export function switchModalTab(tab) {
  const exec = document.getElementById('tabPanelExec');
  const bio = document.getElementById('tabPanelBio');
  const btnExec = document.getElementById('tabBtnExec');
  const btnBio = document.getElementById('tabBtnBio');

  if (!exec || !bio || !btnExec || !btnBio) return;

  if (tab === 'exec') {
    exec.style.display = '';
    bio.style.display = 'none';
    btnExec.classList.add('active');
    btnBio.classList.remove('active');
  } else {
    exec.style.display = 'none';
    bio.style.display = '';
    btnExec.classList.remove('active');
    btnBio.classList.add('active');
  }
}

export function setSvgPhase(phase) {
  const svg = document.querySelector('#modalSvgContainer svg');
  if (!svg) return;

  svg.classList.remove('svg-phase-start', 'svg-phase-end');
  const btns = document.querySelectorAll('.svg-phase-btn');
  btns.forEach((button) => button.classList.toggle('active', button.dataset.phase === phase));

  if (phase === 'start') svg.classList.add('svg-phase-start');
  if (phase === 'end') svg.classList.add('svg-phase-end');
}

export function startGuidedWorkout() {
  state.guidedWorkout = true;
  const targetIndex = exercises.findIndex((exercise) => {
    const progress = exerciseProgress[exercise.id];
    return !progress || progress.completed.some((value) => !value);
  });

  const safeIndex = targetIndex >= 0 ? targetIndex : 0;
  openModal(exercises[safeIndex]);
}

export function exitGuidedWorkout() {
  state.guidedWorkout = false;
  const bar = document.getElementById('modalGuidedBar');
  if (bar) bar.classList.remove('visible');
  const banner = document.getElementById('guidedTransitionBanner');
  if (banner) banner.style.display = 'none';
}

export function skipToNextGuidedExercise() {
  if (!state.guidedWorkout) return;
  if (state.guidedIndex + 1 < exercises.length) {
    openModal(exercises[state.guidedIndex + 1]);
  } else {
    showWorkoutCompletedCelebration();
  }
}

export function showWorkoutCompletedCelebration() {
  const banner = document.getElementById('guidedTransitionBanner');
  if (banner) {
    banner.innerHTML = '🏆 <strong>Parabéns!</strong> Você concluiu todos os exercícios do treino guiado!';
    banner.style.display = 'block';
  }

  const title = document.getElementById('modalTitle');
  if (title) title.textContent = 'Treino Finalizado com Sucesso! 🏆';

  const desc = document.getElementById('modalDesc');
  if (desc) desc.textContent = 'Você completou todas as séries e descansos do seu treino de hoje. Excelente dedicação!';

  playCelebrationSound();
}

export function updateGeneralTimerDisplay() {
  const display = document.getElementById('timerDisplay');
  const minutes = Math.floor(state.totalSeconds / 60);
  const seconds = state.totalSeconds % 60;
  const timeStr = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  if (display) display.textContent = timeStr;

  const pillTimer = document.getElementById('pillTimerSummary');
  if (pillTimer) {
    pillTimer.textContent = `⏱️ ${timeStr}`;
    pillTimer.classList.toggle('running', Boolean(state.timerInterval));
  }
}

export function setTimer(seconds) {
  clearInterval(state.timerInterval);
  state.timerInterval = null;
  state.totalSeconds = seconds;
  updateGeneralTimerDisplay();
}

export function startTimer() {
  if (state.timerInterval) return;

  state.timerInterval = setInterval(() => {
    if (state.totalSeconds > 0) {
      state.totalSeconds -= 1;
      updateGeneralTimerDisplay();
    } else {
      clearInterval(state.timerInterval);
      state.timerInterval = null;
      playBeep();
    }
  }, 1000);
}

export function resetTimer() {
  clearInterval(state.timerInterval);
  state.timerInterval = null;
  state.totalSeconds = 60;
  updateGeneralTimerDisplay();
}

export function updateModalTimerDisplay() {
  const displayEl = document.getElementById('modalTimerDisplay');
  const ring = document.getElementById('modalProgressRing');
  if (!displayEl) return;

  const minutes = Math.floor(state.modalTimer / 60);
  const seconds = state.modalTimer % 60;
  displayEl.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  if (ring) {
    const fraction = state.modalPreset > 0 ? (state.modalTimer / state.modalPreset) : 0;
    const circumference = 427.26;
    ring.style.strokeDashoffset = String(circumference * (1 - fraction));
    ring.classList.toggle('warning', state.modalTimer <= 3 && state.modalTimer > 0 && state.modalTimerRunning);
    displayEl.classList.toggle('warning', state.modalTimer <= 3 && state.modalTimer > 0 && state.modalTimerRunning);
  }
}

export function setModalTimerPreset(seconds) {
  state.modalPreset = seconds;
  state.modalTimer = seconds;
  document.querySelectorAll('.modal-preset-group .btn').forEach((button) => {
    const value = Number(button.dataset.preset || 0);
    button.classList.toggle('active', value === seconds);
  });
  resetModalTimer();
}

export function resetModalTimer() {
  clearInterval(state.modalTimerInterval);
  state.modalTimerInterval = null;
  state.modalTimerRunning = false;
  state.modalTimer = state.modalPreset;
  updateModalTimerDisplay();

  const button = document.getElementById('modalTimerToggleBtn');
  if (button) {
    button.textContent = 'Iniciar Descanso';
    button.classList.remove('btn-pause');
  }
}

export function pauseModalTimer() {
  clearInterval(state.modalTimerInterval);
  state.modalTimerInterval = null;
  state.modalTimerRunning = false;

  const button = document.getElementById('modalTimerToggleBtn');
  if (button) {
    button.textContent = state.modalTimer <= 0 ? 'Iniciar Novamente' : 'Continuar';
    button.classList.remove('btn-pause');
  }
}

export function startModalTimer() {
  if (state.modalTimer <= 0) {
    state.modalTimer = state.modalPreset;
  }

  state.modalTimerRunning = true;
  const button = document.getElementById('modalTimerToggleBtn');
  if (button) {
    button.textContent = 'Pausar';
    button.classList.add('btn-pause');
  }

  updateModalTimerDisplay();
  clearInterval(state.modalTimerInterval);

  state.modalTimerInterval = setInterval(() => {
    if (state.modalTimer > 0) {
      state.modalTimer -= 1;
      updateModalTimerDisplay();

      if ([3, 2, 1].includes(state.modalTimer)) {
        playWarningBeep();
      }

      if (state.modalTimer === 0) {
        pauseModalTimer();
        playFinalBeep();
        handleTimerCompletion();
      }
    }
  }, 1000);
}

export function toggleModalTimer() {
  if (state.modalTimerRunning) {
    pauseModalTimer();
  } else {
    startModalTimer();
  }
}

export function handleTimerCompletion() {
  if (!state.guidedWorkout || !state.currentExercise) return;

  const total = exercises.length;
  const currentProgress = exerciseProgress[state.currentExercise.id];
  const isAllDone = currentProgress && currentProgress.completed.every(Boolean);

  if (isAllDone) {
    const banner = document.getElementById('guidedTransitionBanner');
    const nextEx = exercises[state.guidedIndex + 1];

    if (banner) {
      banner.innerText = nextEx ? `⏱ Descanso concluído! Abrindo ${nextEx.title}...` : '⏱ Descanso concluído! Treino finalizado.';
      banner.style.display = 'block';
    }

    if (nextEx) {
      setTimeout(() => openModal(nextEx), 1800);
    } else {
      showWorkoutCompletedCelebration();
    }
  }
}

export function completeSetFromButton() {
  const result = completeCurrentSet(state.currentExercise);
  renderSetsTracker();

  if (!result.restarted) {
    state.modalTimer = state.modalPreset;
    updateModalTimerDisplay();
    startModalTimer();
  }

  if (result.allDone) {
    playCelebrationSound();
    if (state.guidedWorkout) {
      const banner = document.getElementById('guidedTransitionBanner');
      if (banner) {
        banner.innerText = '🔥 Última série finalizada! Aproveite o descanso final.';
        banner.style.display = 'block';
      }
    }
  }
}

export function attachEventHandlers() {
  document.getElementById('exerciseModal').addEventListener('click', (event) => {
    if (event.target.id === 'exerciseModal') closeModal();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      const modal = document.getElementById('exerciseModal');
      if (modal && modal.classList.contains('active')) closeModal();
    }
  });

  document.querySelectorAll('.tab-btn').forEach((button) => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach((item) => item.classList.remove('active'));
      button.classList.add('active');
      const category = button.dataset.category || 'todos';
      const filtered = category === 'todos' ? exercises : exercises.filter((item) => item.category === category);
      renderExercises(filtered);
    });
  });

  const startBtn = document.getElementById('startGuidedWorkoutBtn');
  if (startBtn) startBtn.addEventListener('click', startGuidedWorkout);

  const resetDailyBtn = document.getElementById('resetDailyProgressBtn');
  if (resetDailyBtn) {
    resetDailyBtn.addEventListener('click', () => {
      if (confirm('Deseja realmente resetar o progresso do treino de hoje?')) {
        resetDailyProgress();
        renderExercises(exercises);
        renderProgressBar();
        playBeep();
      }
    });
  }

  const timerStartBtn = document.getElementById('timerStartBtn');
  if (timerStartBtn) timerStartBtn.addEventListener('click', startTimer);

  const timerResetBtn = document.getElementById('timerResetBtn');
  if (timerResetBtn) timerResetBtn.addEventListener('click', resetTimer);

  document.querySelectorAll('[data-timer]').forEach((button) => {
    button.addEventListener('click', () => {
      setTimer(Number(button.dataset.timer));
    });
  });

  document.getElementById('modalTimerToggleBtn').addEventListener('click', toggleModalTimer);
  document.getElementById('modalCompleteSetBtn').addEventListener('click', completeSetFromButton);
  document.getElementById('closeModalBtn').addEventListener('click', closeModal);
  document.getElementById('skipGuidedExerciseBtn').addEventListener('click', skipToNextGuidedExercise);
  document.getElementById('exitGuidedWorkoutBtn').addEventListener('click', () => {
    exitGuidedWorkout();
    closeModal();
  });

  document.querySelectorAll('.modal-preset-group .btn').forEach((button) => {
    button.addEventListener('click', () => setModalTimerPreset(Number(button.dataset.preset)));
  });

  const resetModalTimerBtn = document.getElementById('resetModalTimerBtn');
  if (resetModalTimerBtn) {
    resetModalTimerBtn.addEventListener('click', resetModalTimer);
  }

  const execTabBtn = document.getElementById('tabBtnExec');
  const bioTabBtn = document.getElementById('tabBtnBio');

  if (execTabBtn) {
    execTabBtn.addEventListener('click', () => switchModalTab('exec'));
  }

  if (bioTabBtn) {
    bioTabBtn.addEventListener('click', () => switchModalTab('bio'));
  }

  // Modal de Substituição de Exercícios
  const swapModal = document.getElementById('exerciseSwapModal');
  if (swapModal) {
    swapModal.addEventListener('click', (ev) => {
      if (ev.target.id === 'exerciseSwapModal') closeSwapModal();
    });
  }

  const closeSwapBtn = document.getElementById('closeSwapModalBtn');
  if (closeSwapBtn) closeSwapBtn.addEventListener('click', closeSwapModal);

  const cancelSwapBtn = document.getElementById('cancelSwapModalBtn');
  if (cancelSwapBtn) cancelSwapBtn.addEventListener('click', closeSwapModal);

  const resetWorkoutBtn = document.getElementById('btnResetWorkout');
  if (resetWorkoutBtn) {
    resetWorkoutBtn.addEventListener('click', () => {
      if (confirm('Deseja restaurar a rotina de treino original com todos os exercícios padrão?')) {
        resetWorkoutToDefault();
        renderExercises();
        renderProgressBar();
        playCelebrationSound();
      }
    });
  }

  // Inicializa o Painel Retrátil Inteligente com Gestos e Pílula Tátil
  initDashboardGestures();
}

export function toggleDashboard(forceState) {
  const dashboard = document.getElementById('collapsibleDashboard');
  const pill = document.getElementById('dashboardTogglePill');
  if (!dashboard) return;

  const isCollapsed = forceState !== undefined ? forceState : !dashboard.classList.contains('collapsed');
  dashboard.classList.toggle('collapsed', isCollapsed);

  if (pill) {
    pill.setAttribute('aria-expanded', String(!isCollapsed));
  }

  try {
    localStorage.setItem('calistenia_dashboard_collapsed', String(isCollapsed));
  } catch (e) {
    // ignore storage errors
  }

  playBeep(440, 0.03);
}

export function initDashboardGestures() {
  const dashboard = document.getElementById('collapsibleDashboard');
  const pill = document.getElementById('dashboardTogglePill');
  if (!dashboard || !pill) return;

  // Carrega estado salvo (por padrão 'true' para manter tela limpa e focada)
  try {
    const saved = localStorage.getItem('calistenia_dashboard_collapsed');
    const shouldBeCollapsed = saved !== null ? saved === 'true' : true;
    dashboard.classList.toggle('collapsed', shouldBeCollapsed);
    pill.setAttribute('aria-expanded', String(!shouldBeCollapsed));
  } catch (e) {
    dashboard.classList.add('collapsed');
  }

  // Clique na pílula para expandir ou recolher
  pill.addEventListener('click', (e) => {
    e.preventDefault();
    toggleDashboard();
  });

  // Acessibilidade por teclado (Enter ou Barra de Espaço)
  pill.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleDashboard();
    }
  });

  // Gestos de toque (Swipe Down para abrir, Swipe Up para recolher)
  let touchStartY = 0;
  let touchStartX = 0;
  let isTrackingTouch = false;

  dashboard.addEventListener('touchstart', (e) => {
    if (e.touches.length === 1) {
      touchStartY = e.touches[0].clientY;
      touchStartX = e.touches[0].clientX;
      isTrackingTouch = true;
    }
  }, { passive: true });

  dashboard.addEventListener('touchend', (e) => {
    if (!isTrackingTouch || e.changedTouches.length === 0) return;
    isTrackingTouch = false;

    const endY = e.changedTouches[0].clientY;
    const endX = e.changedTouches[0].clientX;
    const diffY = endY - touchStartY;
    const diffX = endX - touchStartX;

    // Detecta arrasto vertical intencional (mínimo 35px)
    if (Math.abs(diffY) > 35 && Math.abs(diffY) > Math.abs(diffX)) {
      const isCollapsed = dashboard.classList.contains('collapsed');
      if (diffY > 0 && isCollapsed) {
        // Deslizou para baixo (Swipe Down) -> Abre painel
        toggleDashboard(false);
      } else if (diffY < 0 && !isCollapsed) {
        // Deslizou para cima (Swipe Up) -> Recolhe painel
        toggleDashboard(true);
      }
    }
  }, { passive: true });
}

export function openSwapModal(exercise) {
  const modal = document.getElementById('exerciseSwapModal');
  if (!modal) return;

  const subtitle = document.getElementById('swapModalSubtitle');
  if (subtitle) {
    subtitle.innerHTML = `Substituindo <strong>${exercise.title}</strong> (${exercise.categoryLabel})`;
  }

  const grid = document.getElementById('swapOptionsGrid');
  if (grid) {
    grid.innerHTML = '';
    const alternatives = getAvailableAlternatives(exercise);

    if (alternatives.length === 0) {
      grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 30px 10px;">Todos os exercícios disponíveis do catálogo já estão no seu treino!</div>`;
    } else {
      alternatives.forEach((alt) => {
        const optionCard = document.createElement('div');
        optionCard.className = 'swap-option-card';
        const gifSrc = exerciseGIFs[alt.svgKey] || `assets/exercicios/${alt.svgKey}.gif`;
        const levelBadgeClass = alt.level === 'beginner' ? 'card-tag-beginner' : alt.level === 'advanced' ? 'card-tag-advanced' : 'card-tag-intermediate';

        optionCard.innerHTML = `
          <div class="swap-card-thumb-wrap">
            <span class="swap-card-badge ${levelBadgeClass}">${alt.levelLabel}</span>
            <img src="${gifSrc}" alt="${alt.title}" loading="lazy" />
          </div>
          <div class="swap-card-info">
            <div class="swap-card-title">${alt.title}</div>
            <div class="swap-card-meta">${alt.sets} • ${alt.equipment}</div>
            <div class="swap-card-desc">${alt.desc}</div>
            <button type="button" class="btn-select-swap">
              <span>✓</span> Substituir por Este
            </button>
          </div>
        `;

        optionCard.querySelector('.btn-select-swap').addEventListener('click', () => {
          swapWorkoutExercise(exercise.id, alt.id);
          closeSwapModal();
          renderExercises();
          renderProgressBar();
          playBeep();
        });

        grid.appendChild(optionCard);
      });
    }
  }

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

export function closeSwapModal() {
  const modal = document.getElementById('exerciseSwapModal');
  if (modal) {
    modal.classList.remove('active');
  }
  document.body.style.overflow = '';
}

