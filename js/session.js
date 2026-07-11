function startSession() {
  endSession();

  session.correctCount = 0;
  session.wrongCount = 0;
  session.total = 0;

  session.streakCount = 0;
  session.bestStreak = 0;

  session.totalResponseTime = 0;

  session.startTime = performance.now();
  session.endTime = null;

  session.history = [];

  updateStats();

  switch (settings.sessionType) {
    case "practice":
      startStopwatch();
      break;

    case "countdown":
      startCountdown();
      break;

    case "question":
      startQuestionChallenge();
      break;
  }

  nextQ();
}

function endSession() {
  stopTimer();
  session.endTime = performance.now();
}

function updateStats() {
  document.getElementById("correct").textContent = session.correctCount;

  document.getElementById("wrong").textContent = session.wrongCount;

  document.getElementById("streak").textContent = session.streakCount;

  document.getElementById("accuracyLabel").textContent =
    Math.round((session.correctCount / Math.max(session.total, 1)) * 100) + "%";
}

function getAverageResponseTime() {
  if (session.correct === 0) return 0;

  return session.totalResponseTime / session.correct;
}
