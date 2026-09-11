export const exerciseCatalog = [
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
  },
  {
    id: 10,
    title: 'Polichinelo (Aquecimento)',
    category: 'superiores',
    categoryLabel: 'Aquecimento / Cardio',
    totalSets: 3,
    sets: '3 séries x 30-50 rep',
    desc: 'Eleva a frequência cardíaca, aquece as articulações e prepara todo o corpo para o treino.',
    svgKey: 'polichinelo',
    level: 'beginner',
    levelLabel: 'Iniciante',
    type: 'push',
    typeLabel: 'Cardio',
    equipment: 'Peso Corporal',
    agonists: ['Cardiovascular', 'Panturrilhas'],
    synergists: ['Deltoides', 'Quadríceps', 'Core'],
    tempo: 'Ritmo contínuo e constante',
    startPosition: 'Fique em pé com as pernas unidas e os braços ao lado do corpo.',
    contraction: 'Salte abrindo pernas e batendo as mãos acima da cabeça; retorne suavemente.',
    mistakes: ['Aterrissar com os calcanhares pesados', 'Braços frouxos', 'Prender a respiração'],
    steps: [
      { title: 'Ajuste', desc: 'Mantenha a postura ereta, abdômen firme e ponta dos pés ativa.' },
      { title: 'Execução', desc: 'Salte abrindo pernas e elevando os braços, retornando no mesmo ritmo contínuo.' },
      { title: 'Respiração', desc: 'Inspire pelo nariz e expire pela boca com cadência constante.' }
    ]
  },
  {
    id: 11,
    title: 'Elevação de Panturrilha em Pé',
    category: 'inferiores',
    categoryLabel: 'Membros Inferiores',
    totalSets: 4,
    sets: '4 séries x 15-25 rep',
    desc: 'Fortalece os gastrocnêmios e sóleo. Máxima amplitude na subida e controle na descida.',
    svgKey: 'panturrilha',
    level: 'beginner',
    levelLabel: 'Iniciante',
    type: 'leg',
    typeLabel: 'Perna',
    equipment: 'Peso Corporal / Degrau',
    agonists: ['Gastrocnêmio', 'Sóleo'],
    synergists: ['Tibial Posterior', 'Flexores dos Dedos'],
    tempo: '2s subir · 2s pausa no topo · 2s descer',
    startPosition: 'Pés na largura dos quadris, apoie as mãos levemente em uma parede para equilíbrio.',
    contraction: 'Empurre a ponta dos pés elevando os calcanhares ao ponto máximo e aperte a panturrilha.',
    mistakes: ['Dobrar os joelhos', 'Descer rápido sem controle', 'Inclinar o tronco para frente'],
    steps: [
      { title: 'Ajuste', desc: 'Corpo reto, olhar para frente e mãos apoiadas para estabilidade.' },
      { title: 'Execução', desc: 'Suba o máximo que puder em 2s, segure no topo por 2s e desça em 2s.' },
      { title: 'Respiração', desc: 'Expire ao subir na ponta dos pés e inspire ao descer.' }
    ]
  },
  {
    id: 12,
    title: 'Flexão com Joelhos Apoiados',
    category: 'superiores',
    categoryLabel: 'Membros Superiores',
    totalSets: 3,
    sets: '3 séries x 8-15 rep',
    desc: 'Excelente variação para construir força de peitoral e tríceps com menor sobrecarga.',
    svgKey: 'flexaoJoelho',
    level: 'beginner',
    levelLabel: 'Iniciante',
    type: 'push',
    typeLabel: 'Empurrar',
    equipment: 'Colchonete',
    agonists: ['Peitoral Maior', 'Tríceps Braquial'],
    synergists: ['Deltoide Anterior', 'Core'],
    tempo: '2s descer · 0s pausa · 2s subir',
    startPosition: 'De quatro apoios, afaste os joelhos para trás até formar uma linha reta dos ombros aos joelhos.',
    contraction: 'Flexione os cotovelos a 45° descendo o peito próximo ao chão e empurre com força.',
    mistakes: ['Quadril empinado para trás', 'Cotovelos a 90° abertos', 'Pescoço solto'],
    steps: [
      { title: 'Ajuste', desc: 'Apoie os joelhos em um colchonete e alinhe as mãos abaixo dos ombros.' },
      { title: 'Execução', desc: 'Desça o peito em direção ao chão em 2s e empurre de volta.' },
      { title: 'Respiração', desc: 'Inspire ao descer e expire com força ao empurrar.' }
    ]
  },
  {
    id: 13,
    title: 'Flexão Diamante',
    category: 'superiores',
    categoryLabel: 'Membros Superiores',
    totalSets: 3,
    sets: '3 séries x 6-12 rep',
    desc: 'Foco intenso no tríceps braquial e parte medial do peitoral com mãos unidas.',
    svgKey: 'flexaoDiamante',
    level: 'advanced',
    levelLabel: 'Avançado',
    type: 'push',
    typeLabel: 'Empurrar',
    equipment: 'Peso Corporal',
    agonists: ['Tríceps Braquial', 'Peitoral Maior'],
    synergists: ['Deltoide Anterior', 'Core'],
    tempo: '3s descer · 1s pausa · 2s subir',
    startPosition: 'Posição de prancha alta com polegares e indicadores tocando-se formando um diamante.',
    contraction: 'Desça o peito até tocar o centro das mãos e estenda completamente os braços no topo.',
    mistakes: ['Abrir os cotovelos para os lados', 'Deixar o quadril cair', 'Não completar a extensão'],
    steps: [
      { title: 'Ajuste', desc: 'Junte os dedos indicadores e polegares sob o centro do peito.' },
      { title: 'Execução', desc: 'Desça controladamente mantendo os cotovelos rentes às costelas.' },
      { title: 'Respiração', desc: 'Inspire na descida e expire espremendo o tríceps na subida.' }
    ]
  },
  {
    id: 14,
    title: 'Mergulho na Cadeira (Dips)',
    category: 'superiores',
    categoryLabel: 'Membros Superiores',
    totalSets: 3,
    sets: '3 séries x 8-15 rep',
    desc: 'Foco no tríceps, peito inferior e deltoides utilizando uma cadeira firme ou sofá.',
    svgKey: 'dips',
    level: 'intermediate',
    levelLabel: 'Intermediário',
    type: 'push',
    typeLabel: 'Empurrar',
    equipment: 'Cadeira / Banco',
    agonists: ['Tríceps Braquial', 'Deltoide Anterior'],
    synergists: ['Peitoral Menor', 'Romboides'],
    tempo: '2s descer · 1s pausa · 2s subir',
    startPosition: 'Apoie as palmas das mãos na beirada da cadeira, costas eretas próximas ao banco.',
    contraction: 'Flexione os cotovelos até 90° e empurre para cima até a extensão completa dos braços.',
    mistakes: ['Afastar as costas da cadeira', 'Descer além de 90° sobrecarregando o ombro', 'Encolher os ombros'],
    steps: [
      { title: 'Ajuste', desc: 'Apoie as mãos firmes na beirada com os pés à frente apoiados no chão.' },
      { title: 'Execução', desc: 'Desça rente ao banco flexionando os cotovelos até 90° e empurre de volta.' },
      { title: 'Respiração', desc: 'Inspire na descida e expire ao empurrar de volta ao topo.' }
    ]
  },
  {
    id: 15,
    title: 'Agachamento Sumô',
    category: 'inferiores',
    categoryLabel: 'Membros Inferiores',
    totalSets: 4,
    sets: '4 séries x 12-20 rep',
    desc: 'Base ampla com ponta dos pés a 45°. Foco nos adutores internos da coxa e glúteos.',
    svgKey: 'agachamentoSumo',
    level: 'beginner',
    levelLabel: 'Iniciante',
    type: 'leg',
    typeLabel: 'Perna',
    equipment: 'Peso Corporal',
    agonists: ['Adutores da Coxa', 'Glúteo Máximo', 'Quadríceps'],
    synergists: ['Posteriores de Coxa', 'Core'],
    tempo: '3s descer · 1s pausa · 2s subir',
    startPosition: 'Pés bem mais afastados que a largura dos ombros, pontas apontadas para fora a 45°.',
    contraction: 'Agache empurrando os joelhos na direção dos dedos dos pés e aperte os glúteos ao subir.',
    mistakes: ['Joelhos entrando para dentro', 'Tronco caindo para frente', 'Levantar os calcanhares'],
    steps: [
      { title: 'Ajuste', desc: 'Afaste os pés além dos ombros e aponte os dedos para fora a 45°.' },
      { title: 'Execução', desc: 'Desça o quadril verticalmente mantendo os joelhos abertos e suba espremendo os glúteos.' },
      { title: 'Respiração', desc: 'Inspire descendo e expire com força ao retornar ao topo.' }
    ]
  }
];

export const exercises = [];

export const DEFAULT_WORKOUT_IDS = [10, 0, 1, 2, 3, 4, 11, 5, 6, 7, 8, 9];
export const WORKOUT_SELECTION_KEY = 'calistenia_treino_selecao';

export function getActiveWorkoutIds() {
  try {
    const raw = localStorage.getItem(WORKOUT_SELECTION_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch (e) {
    // fallback
  }
  return [...DEFAULT_WORKOUT_IDS];
}

export function saveActiveWorkoutIds(ids) {
  try {
    localStorage.setItem(WORKOUT_SELECTION_KEY, JSON.stringify(ids));
  } catch (e) {
    console.error('Erro ao salvar seleção de treino:', e);
  }
}

export function refreshActiveExercises() {
  const ids = getActiveWorkoutIds();
  const active = ids.map(id => exerciseCatalog.find(ex => ex.id === id)).filter(Boolean);
  exercises.length = 0;
  exercises.push(...active);
  return exercises;
}

export function swapWorkoutExercise(currentExerciseId, newExerciseId) {
  const ids = getActiveWorkoutIds();
  const idx = ids.indexOf(currentExerciseId);
  if (idx !== -1) {
    ids[idx] = newExerciseId;
  } else {
    ids.push(newExerciseId);
  }
  saveActiveWorkoutIds(ids);
  refreshActiveExercises();

  // Garante que o progresso do novo exercício exista
  const newEx = exerciseCatalog.find(e => e.id === newExerciseId);
  if (newEx && !exerciseProgress[newExerciseId]) {
    exerciseProgress[newExerciseId] = {
      completed: new Array(newEx.totalSets).fill(false),
      activeSet: 0
    };
    saveDailyProgress();
  }
}

export function resetWorkoutToDefault() {
  saveActiveWorkoutIds(DEFAULT_WORKOUT_IDS);
  refreshActiveExercises();
  initCleanProgress();
  saveDailyProgress();
}

export function getAvailableAlternatives(currentExercise) {
  const activeIds = new Set(exercises.map(e => e.id));
  return exerciseCatalog.filter(e => e.id !== currentExercise?.id && !activeIds.has(e.id));
}

// Inicializa a lista ativa de exercícios
refreshActiveExercises();

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
