function startStopwatch() {
  timer.mode = "stopwatch";

  timer.startedAt = performance.now();

  timer.duration = 0;

  startTimer();
}

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

  if (timer.mode === "stopwatch") {
    seconds = elapsed;
  } else {
    seconds = timer.duration - elapsed;

    if (seconds <= 0) {
      seconds = 0;

      endSession();

      return;
    }
  }

  const minutes = Math.floor(seconds / 60);

  seconds %= 60;

  timerDisplay.textContent = `⏱ ${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function startCountdown() {
  timer.mode = "countdown";

  timer.startedAt = performance.now();

  timer.duration = settings.countdownMinutes * 60;

  startTimer();
}

function startQuestionChallenge() {}
