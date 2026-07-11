function startTimer() {
  stopTimer();

  timer.id = setInterval(updateTimer, 200);

  updateTimer();
}

function stopTimer() {
  clearInterval(timer.id);

  timer.id = null;
}

function updateTimer() {
  const elapsed = Math.floor((performance.now() - timer.startedAt) / 1000);

  let seconds;

  seconds = timer.duration - elapsed;

  if (seconds < 0) {
    endSession();
    return;
  }

  const minutes = Math.floor(seconds / 60);

  const remainingSeconds = seconds % 60;

  statusDisplay.textContent = `⏱ ${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;

  if (seconds === 0) {
    endSession();
  }
}

function startCountdown() {
  timer.mode = "countdown";

  timer.startedAt = performance.now();

  timer.duration = settings.countdownMinutes * 60;

  startTimer();
}

function startQuestionChallenge() {
  statusDisplay.textContent = `✅ ${session.correctCount}/${settings.questionLimit}`;
}

function updateQuestionChallenge() {
  statusDisplay.textContent = `✅ ${session.correctCount}/${settings.questionLimit}`;

  if (session.correctCount >= settings.questionLimit) {
    endSession();
  }
}
