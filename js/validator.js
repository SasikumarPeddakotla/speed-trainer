function validate() {
  if (!session.isActive) return;

  let userAnswer = answerInput.value.toUpperCase();

  // Letter mode
  if (answerInput.dataset.type === "letter") {
    if (userAnswer.length === 1) checkAnswer(userAnswer);
    return;
  }

  // Number mode (works for any length)

  // If user has typed fewer digits than the answer,
  // compare the typed prefix with the answer.
  if (userAnswer.length < app.correctAnswer.length) {
    if (app.correctAnswer.startsWith(userAnswer)) {
      // So far correct. Wait for more digits.
      return;
    }

    fail();
    return;
  }

  // User typed enough digits
  if (userAnswer.length === app.correctAnswer.length) {
    checkAnswer(userAnswer);
    return;
  }

  // Extra digits typed
  fail();
}
// -------------------------
// Correct Answer
// -------------------------

function checkAnswer(userAnswer) {
  session.total++;

  if (userAnswer === app.correctAnswer) {
    const elapsed = performance.now() - session.questionStartTime;
    session.totalResponseTime += elapsed;

    session.correctCount++;

    session.streakCount++;
    session.bestStreak = Math.max(session.bestStreak, session.streakCount);

    session.history.push({
      ...session.currentQuestion,
      userAnswer,
      correct: true,
      responseTime: elapsed,
    });

    answerInput.classList.add("correct");

    updateStats();
    if (settings.sessionType === "question") {
      updateQuestionChallenge();
    }

    setTimeout(nextQ, 150);
  } else {
    session.history.push({
      ...session.currentQuestion,
      userAnswer,
      correct: false,
      responseTime: performance.now() - session.questionStartTime,
    });

    fail();
  }
}

// -------------------------
// Wrong Answer
// -------------------------

function fail() {
  session.wrongCount++;

  session.streakCount = 0;
  session.bestStreak = Math.max(session.bestStreak, session.streakCount);

  updateStats();

  answerInput.classList.add("wrong");

  answerInput.value = "";

  setTimeout(() => {
    answerInput.classList.remove("wrong");
  }, 180);
}
