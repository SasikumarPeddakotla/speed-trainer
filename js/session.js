function prepareSession() {
  endSession(false);

  disablePracticeInput();

  session.correctCount = 0;
  session.wrongCount = 0;

  session.streakCount = 0;
  session.bestStreak = 0;

  session.totalResponseTime = 0;

  session.startTime = null;
  session.endTime = null;

  session.history = [];

  updateStats();

  answerInput.value = "";

  stopTimer();

  switch (settings.sessionType) {
    case "practice":
      statusDisplay.style.display = "none";
      restartBtn.style.display = "none";
      break;

    case "countdown":
      statusDisplay.style.display = "";
      statusDisplay.textContent = `⏱ ${String(settings.countdownMinutes).padStart(2, "0")}:00`;
      restartBtn.style.display = "block";
      break;

    case "question":
      statusDisplay.style.display = "";
      statusDisplay.textContent = `✅ 0/${settings.questionLimit}`;
      restartBtn.style.display = "block";
      break;
  }

  showReadyScreen();
}

function endSession(showSummary = true) {
  stopTimer();
  session.endTime = performance.now();

  session.isActive = false;

  disablePracticeInput();

  showReadyScreen();

  if (showSummary) {
    showSessionSummary();
  }
}

function updateStats() {
  document.getElementById("correct").textContent = session.correctCount;

  document.getElementById("wrong").textContent = session.wrongCount;

  document.getElementById("streak").textContent = session.streakCount;

  document.getElementById("accuracyLabel").textContent =
    Math.round(
      (session.correctCount /
        Math.max(session.correctCount + session.wrongCount, 1)) *
        100,
    ) + "%";
}

function getAverageResponseTime() {
  if (session.correctCount === 0) return 0;

  return session.totalResponseTime / session.correctCount;
}

async function startSession() {
  session.isActive = true;

  prepareQuestion();

  enablePracticeInput();

  showQuestionArea();

  if (settings.sessionType !== "practice") {
    await startCountdownAnimation();
  }

  switch (settings.sessionType) {
    case "countdown":
      startCountdown();
      break;

    case "question":
      startQuestionChallenge();
      break;
  }

  session.startTime = performance.now();

  showQuestion();
}

function showReadyScreen() {
  readyPanel.style.display = "block";
  questionArea.style.display = "none";
  restartBtn.style.display = "none";
}

function showQuestionArea() {
  readyPanel.style.display = "none";
  questionArea.style.display = "block";
  restartBtn.style.display =
    settings.sessionType === "practice" ? "none" : "block";
}

function enablePracticeInput() {
  answerInput.disabled = false;

  keyboardContainer.classList.remove("disabled");

  answerInput.focus();
}

function disablePracticeInput() {
  answerInput.disabled = true;

  keyboardContainer.classList.add("disabled");
}

function openRestartConfirmation() {
  const body = document.createElement("div");

  body.textContent = "Your current progress will be lost.";

  openModal(
    "⚠ Restart Session",
    body,
    () => {
      prepareSession();
      return true;
    },
    {
      okText: "Restart",
      cancelText: "Continue",
      onOpen: pauseTimer,
      onCancel: resumeTimer,
    },
  );
}

async function startCountdownAnimation() {
  questionDisplay.style.fontSize = "50px";
  for (const value of ["3", "2", "1"]) {
    questionDisplay.textContent = `Starts in ${value}...`;

    await new Promise((resolve) => setTimeout(resolve, 1000));
  }

  questionDisplay.textContent = "GO!";

  await new Promise((resolve) => setTimeout(resolve, 500));
  questionDisplay.style.fontSize = "70px";
}

function pauseTimer() {
  const elapsed = Math.floor((performance.now() - timer.startedAt) / 1000);

  timer.remainingSeconds = timer.duration - elapsed;

  stopTimer();
}

function resumeTimer() {
  timer.startedAt = performance.now();

  timer.duration = timer.remainingSeconds;

  startTimer();
}
