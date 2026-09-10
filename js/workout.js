export const exercises = [
  {
    id: 0,
    title: 'Flexão de Braços',
    category: 'superiores',
    categoryLabel: 'Membros Superiores',
    totalSets: 4,
    sets: '4 séries x 8-15 rep',
    desc: 'Trabalha peito, tríceps e ombros. Mantenha o corpo reto e cotovelos a 45°.',
    svgKey: 'flexao',
    level: 'beginner',
    levelLabel: 'Iniciante',
    type: 'push',
    typeLabel: 'Empurrar',
    equipment: 'Peso Corporal',
    agonists: ['Peitoral Maior', 'Tríceps Braquial'],
    synergists: ['Deltoide Anterior', 'Serrátil Anterior'],
    tempo: '2s descer · 0s pausa · 2s subir',
    tempoDetail: 'Fase excêntrica controlada de 2s, sem pausa no fundo, explosivo na fase concêntrica.',
    startPosition: 'Apoie mãos levemente além da largura dos ombros, dedos apontados para frente.',
    contraction: 'No topo, esprema o peitoral e mantenha os cotovelos a ~45° do tronco.',
    mistakes: ['Cotovelos abertos demais', 'Quadril caído ou elevado', 'Pescoço projetado para frente'],
    steps: [
      { title: 'Ajuste', desc: 'Posicione as mãos um pouco além da largura dos ombros e mantenha o corpo em linha reta.' },
      { title: 'Execução', desc: 'Desça em 2s e empurre o chão para voltar em 2s.' },
      { title: 'Respiração', desc: 'Inspire na descida e expire ao subir.' }
    ]
  },
  {
    id: 1,
    title: 'Flexão Pike',
    category: 'superiores',
    categoryLabel: 'Membros Superiores',
    totalSets: 3,
    sets: '3 séries x 6-12 rep',
    desc: 'Foco nos ombros e tríceps. Quadril elevado em V invertido.',
    svgKey: 'pike',
    level: 'intermediate',
    levelLabel: 'Intermediário',
    type: 'push',
    typeLabel: 'Empurrar',
    equipment: 'Peso Corporal',
    agonists: ['Deltoide', 'Tríceps Braquial'],
    synergists: ['Trapézio Superior', 'Peitoral Superior'],
    tempo: '3s descer · 1s pausa · 2s subir',
    startPosition: 'De quatro apoios, eleve o quadril para criar um “V” invertido.',
    contraction: 'Empurre o chão e eleve a escápula no topo do movimento.',
    mistakes: ['Quadril baixo demais', 'Cotovelos muito abertos', 'Pescoço tenso'],
    steps: [
      { title: 'Ajuste', desc: 'Eleve o quadril e mantenha os braços alinhados com os ombros.' },
      { title: 'Execução', desc: 'Desça a cabeça entre as mãos em 3s e suba em 2s.' },
      { title: 'Respiração', desc: 'Inspire antes da descida e expire durante o empurrão.' }
    ]
  },
  {
    id: 2,
    title: 'Remada na Porta / Toalha',
    category: 'superiores',
    categoryLabel: 'Membros Superiores',
    totalSets: 4,
    sets: '4 séries x 10-15 rep',
    desc: 'Trabalha costas e bíceps com apoio em porta ou toalha.',
    svgKey: 'remada',
    level: 'beginner',
    levelLabel: 'Iniciante',
    type: 'pull',
    typeLabel: 'Puxar',
    equipment: 'Batente de Porta / Toalha',
    agonists: ['Grande Dorsal', 'Romboides'],
    synergists: ['Bíceps', 'Deltoide Posterior'],
    tempo: '2s puxar · 1s contração · 3s alongar',
    startPosition: 'Segure o apoio com braços estendidos e incline o corpo para trás.',
    contraction: 'Puxe o peito em direção ao apoio e retraia as escápulas.',
    mistakes: ['Baloiço do quadril', 'Cotovelos abertos', 'Pescoço projetado'],
    steps: [
      { title: 'Ajuste', desc: 'Mantenha o corpo reto e os braços estendidos.' },
      { title: 'Execução', desc: 'Puxe em 2s e retorne devagar em 3s.' },
      { title: 'Respiração', desc: 'Expire ao puxar e inspire ao alongar.' }
    ]
  },
  {
    id: 3,
    title: 'Superman (Extensão Lombar)',
    category: 'superiores',
    categoryLabel: 'Membros Superiores',
    totalSets: 3,
    sets: '3 séries x 12-15 rep',
    desc: 'Fortalece lombar e glúteos. Deitado de barriga para baixo.',
    svgKey: 'superman',
    level: 'beginner',
    levelLabel: 'Iniciante',
    type: 'isometric',
    typeLabel: 'Isometria',
    equipment: 'Colchonete',
    agonists: ['Eretores da Espinha', 'Glúteo Máximo'],
    synergists: ['Trapézio', 'Deltoide Posterior'],
    tempo: '2s subir · 2s sustentar · 2s descer',
    startPosition: 'Deite de bruços com braços e pernas estendidos.',
    contraction: 'Levante braços, peito e pernas e contraia lombar e glúteos.',
    mistakes: ['Pescoço hiperestendido', 'Usar impulso', 'Elevar somente uma parte'],
    steps: [
      { title: 'Ajuste', desc: 'Mantenha o abdomen ativo e a lombar em alinhamento.' },
      { title: 'Execução', desc: 'Eleve em 2s e sustente por 2s antes de descer.' },
      { title: 'Respiração', desc: 'Expire quando elevar e inspire ao retornar.' }
    ]
  },
  {
    id: 4,
    title: 'Agachamento Livre',
    category: 'inferiores',
    categoryLabel: 'Membros Inferiores',
    totalSets: 4,
    sets: '4 séries x 15-20 rep',
    desc: 'Quadríceps e glúteos com boa estabilidade da coluna.',
    svgKey: 'agachamento',
    level: 'beginner',
    levelLabel: 'Iniciante',
    type: 'leg',
    typeLabel: 'Perna',
    equipment: 'Peso Corporal',
    agonists: ['Quadríceps', 'Glúteo Máximo'],
    synergists: ['Isquiotibiais', 'Sóleo'],
    tempo: '3s descer · 1s pausa · 2s subir',
    startPosition: 'Pés na largura dos ombros, dedos levemente abertos.',
    contraction: 'Suba estendendo joelhos e empurrando os quadris para frente.',
    mistakes: ['Joelhos colapsando para dentro', 'Calcanhar levantando', 'Lombar arredondada'],
    steps: [
      { title: 'Ajuste', desc: 'Segure o tronco erguido e faça o core trabalhar.' },
      { title: 'Execução', desc: 'Desça em 3s e suba em 2s sem perder alinhamento.' },
      { title: 'Respiração', desc: 'Inspire na descida e expire na subida.' }
    ]
  },
  {
    id: 5,
    title: 'Afundo Alternado',
    category: 'inferiores',
    categoryLabel: 'Membros Inferiores',
    totalSets: 3,
    sets: '3 séries x 10-12 rep',
    desc: 'Pernas e glúteos com foco em estabilidade e controle.',
    svgKey: 'afundo',
    level: 'intermediate',
    levelLabel: 'Intermediário',
    type: 'leg',
    typeLabel: 'Perna',
    equipment: 'Peso Corporal',
    agonists: ['Quadríceps', 'Glúteo Máximo'],
    synergists: ['Isquiotibiais', 'Core'],
    tempo: '2s descer · 1s pausa · 2s subir',
    startPosition: 'Dê um passo à frente e mantenha a coluna ereta.',
    contraction: 'Volte à posição inicial empurrando pela perna dianteira.',
    mistakes: ['Joelho dianteiro ultrapassando o pé', 'Tronco inclinando', 'Joelho traseiro batendo forte'],
    steps: [
      { title: 'Ajuste', desc: 'Dê um passo longo para frente e mantenha o tronco estável.' },
      { title: 'Execução', desc: 'Desça com controle e retorne em 2s.' },
      { title: 'Respiração', desc: 'Inspire na descida e expire ao empurrar para cima.' }
    ]
  },
  {
    id: 6,
    title: 'Elevação Pélvica',
    category: 'inferiores',
    categoryLabel: 'Membros Inferiores',
    totalSets: 4,
    sets: '4 séries x 15-20 rep',
    desc: 'Glúteos e posterior com foco em potência e controlo.',
    svgKey: 'elevacaoPelvica',
    level: 'beginner',
    levelLabel: 'Iniciante',
    type: 'leg',
    typeLabel: 'Perna',
    equipment: 'Colchonete',
    agonists: ['Glúteo Máximo', 'Isquiotibiais'],
    synergists: ['Glúteo Médio', 'Core'],
    tempo: '2s subir · 2s contração · 2s descer',
    startPosition: 'Deite de costas com joelhos dobrados e pés apoiados.',
    contraction: 'Eleve o quadril e contraia os glúteos no topo.',
    mistakes: ['Lombar arqueando', 'Joelhos colapsando', 'Calcanhares muito afastados'],
    steps: [
      { title: 'Ajuste', desc: 'Dobre os joelhos e mantenha a lombar neutra.' },
      { title: 'Execução', desc: 'Pressione os calcanhares e suba o quadril sem perder a linha.' },
      { title: 'Respiração', desc: 'Expire ao elevar e inspire na volta.' }
    ]
  },
  {
    id: 7,
    title: 'Prancha Abdominal',
    category: 'core',
    categoryLabel: 'Core / Abdômen',
    totalSets: 3,
    sets: '3 séries x 30-60 seg',
    desc: 'Estabilização total do core. O corpo fica alinhado.',
    svgKey: 'prancha',
    level: 'beginner',
    levelLabel: 'Iniciante',
    type: 'isometric',
    typeLabel: 'Isometria',
    equipment: 'Colchonete',
    agonists: ['Reto Abdominal', 'Transverso do Abdômen'],
    synergists: ['Eretores da Espinha', 'Glúteo Máximo'],
    tempo: 'Sustentação estática',
    startPosition: 'Apoie antebraços no chão com o corpo reto.',
    contraction: 'Contraia o abdômen e mantenha quadril neutro.',
    mistakes: ['Quadril elevado', 'Quadril caído', 'Prender a respiração'],
    steps: [
      { title: 'Ajuste', desc: 'Posicione os cotovelos sob os ombros e o corpo em linha reta.' },
      { title: 'Execução', desc: 'Ative o abdômen e mantenha a posição estática.' },
      { title: 'Respiração', desc: 'Respire de forma diafragmática, sem prender o ar.' }
    ]
  },
  {
    id: 8,
    title: 'Abdominal Remador',
    category: 'core',
    categoryLabel: 'Core / Abdômen',
    totalSets: 3,
    sets: '3 séries x 12-15 rep',
    desc: 'Reto abdominal e flexores do quadril em ação.',
    svgKey: 'remador',
    level: 'intermediate',
    levelLabel: 'Intermediário',
    type: 'isometric',
    typeLabel: 'Isometria',
    equipment: 'Colchonete',
    agonists: ['Reto Abdominal', 'Flexores do Quadril'],
    synergists: ['Oblíquos', 'Transverso'],
    tempo: '2s contrair · 1s pausa · 3s estender',
    startPosition: 'Deite de costas com braços estendidos acima da cabeça.',
    contraction: 'Eleve o tronco e aproxime joelhos ao peito.',
    mistakes: ['Puxar o pescoço', 'Impulso para subir', 'Lombar saindo do chão'],
    steps: [
      { title: 'Ajuste', desc: 'Mantenha a lombar levemente apoiada e o queixo em leve flexão.' },
      { title: 'Execução', desc: 'Levante o tronco e traga os joelhos ao peito com controle.' },
      { title: 'Respiração', desc: 'Expire ao contraer e inspire ao estender.' }
    ]
  },
  {
    id: 9,
    title: 'Elevação de Pernas',
    category: 'core',
    categoryLabel: 'Core / Abdômen',
    totalSets: 3,
    sets: '3 séries x 10-15 rep',
    desc: 'Abdômen inferior com controle excêntrico.',
    svgKey: 'elevacaoPernas',
    level: 'intermediate',
    levelLabel: 'Intermediário',
    type: 'isometric',
    typeLabel: 'Isometria',
    equipment: 'Colchonete',
    agonists: ['Reto Abdominal Inferior', 'Iliopsoas'],
    synergists: ['Oblíquos', 'Sartório'],
    tempo: '2s subir · 1s pausa · 4s descer',
    startPosition: 'Deite de costas com pernas estendidas e juntas.',
    contraction: 'Eleve até 90° e contraia o abdômen inferior.',
    mistakes: ['Lombar levantando do chão', 'Pernas dobradas', 'Descida rápida'],
    steps: [
      { title: 'Ajuste', desc: 'Pressione a lombar no colchonete e mantenha o pescoço relaxado.' },
      { title: 'Execução', desc: 'Eleve as pernas até 90° e desça devagar em 4s.' },
      { title: 'Respiração', desc: 'Expire ao elevar e inspire ao descer com controle.' }
    ]
  }
];

export const STORAGE_KEY = 'calistenia_treino_diario';

export const exerciseProgress = {};

export function getTodayDateString() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

export function initCleanProgress() {
  exercises.forEach((ex) => {
    exerciseProgress[ex.id] = {
      completed: new Array(ex.totalSets).fill(false),
      activeSet: 0
    };
  });
}

export function loadDailyProgress() {
  initCleanProgress();

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      saveDailyProgress();
      return;
    }

    const data = JSON.parse(raw);
    const today = getTodayDateString();

    if (data?.date === today && data.progress) {
      exercises.forEach((ex) => {
        if (data.progress[ex.id]) {
          exerciseProgress[ex.id] = data.progress[ex.id];
        }
      });
    } else {
      saveDailyProgress();
    }
  } catch (error) {
    console.error('Erro ao carregar progresso:', error);
  }
}

export function saveDailyProgress() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      date: getTodayDateString(),
      progress: exerciseProgress
    }));
  } catch (error) {
    console.error('Erro ao salvar progresso:', error);
  }
}

export function getProgressSummary() {
  const total = exercises.length;
  const complete = exercises.filter((ex) => {
    const prog = exerciseProgress[ex.id];
    return prog && prog.completed.every(Boolean);
  }).length;

  return { total, complete, percent: Math.round((complete / total) * 100) };
}

export function resetDailyProgress() {
  initCleanProgress();
  saveDailyProgress();
}

export function completeCurrentSet(currentExercise) {
  if (!currentExercise) return;

  const prog = exerciseProgress[currentExercise.id];
  const total = currentExercise.totalSets;
  const completedCount = prog.completed.filter(Boolean).length;

  if (completedCount === total) {
    prog.completed = new Array(total).fill(false);
    prog.activeSet = 0;
    saveDailyProgress();
    return { restarted: true };
  }

  const currentIdx = prog.activeSet;
  prog.completed[currentIdx] = true;

  let nextIdx = -1;
  for (let i = 0; i < total; i++) {
    if (!prog.completed[i]) {
      nextIdx = i;
      break;
    }
  }

  prog.activeSet = nextIdx >= 0 ? nextIdx : 0;
  saveDailyProgress();

  return { restarted: false, allDone: prog.completed.every(Boolean) };
}
