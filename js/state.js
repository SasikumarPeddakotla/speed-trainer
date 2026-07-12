const app = {
  correctAnswer: "",
  selectedTables: null,
  customText: "Custom",
  currentKeyboard: null,
};

const settings = {
  sessionType: "practice",
  countdownMinutes: 1,
  questionLimit: 10,
};

const session = {
  correctCount: 0,
  wrongCount: 0,
  streakCount: 0,
  bestStreak: 0,
  total: 0,
  startTime: null,
  endTime: null,
  questionStartTime: null,
  totalResponseTime: 0,
  currentQuestion: null,
  history: [],
  isActive: false,
};

const timer = {
  id: null,
  startedAt: null,
  duration: 0,
  remainingSeconds: 0,
  mode: "practice", // "practice" or "countdown"
};

const digitOptions = [
  ["1x1", "1 Digit & 1 Digit"],
  ["2x1", "2 Digit & 1 Digit"],
  ["2x2", "2 Digit & 2 Digit"],
  ["3x2", "3 Digit & 2 Digit"],
  ["3x3", "3 Digit & 3 Digit"],
];

const moduleOptions = {
  add: {
    difficultySelect: digitOptions,
  },

  sub: {
    difficultySelect: digitOptions,
  },

  mul: {
    difficultySelect: digitOptions,
  },

  div: {
    difficultySelect: digitOptions,
  },

  table: {
    difficultySelect: [
      ["random", "Random 2–20"],
      ["custom", "Custom"],
    ],

    tableLimitSelect: [
      ["10", "Up to ×10"],
      ["20", "Up to ×20"],
      ["30", "Up to ×30"],
    ],
  },
};

const qwertyLetters = "QWERTYUIOPASDFGHJKLZXCVBNM".split("");
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
