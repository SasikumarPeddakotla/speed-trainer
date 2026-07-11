function startSession() {
  endSession(false);

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
      statusDisplay.style.display = "none";
      break;

    case "countdown":
      statusDisplay.style.display = "";
      startCountdown();
      break;

    case "question":
      statusDisplay.style.display = "";
      startQuestionChallenge();
      break;
  }

  nextQ();
}

function endSession(showSummary = true) {
  stopTimer();
  session.endTime = performance.now();
  if (showSummary) {
    showSessionSummary();
  }
}

function updateStats() {
  document.getElementById("correct").textContent = session.correctCount;

  document.getElementById("wrong").textContent = session.wrongCount;

  document.getElementById("streak").textContent = session.streakCount;

  document.getElementById("accuracyLabel").textContent =
    Math.round((session.correctCount / Math.max(session.total, 1)) * 100) + "%";
}

function getAverageResponseTime() {
  if (session.correctCount === 0) return 0;

  return session.totalResponseTime / session.correctCount;
}
