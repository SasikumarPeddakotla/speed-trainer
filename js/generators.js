function generateAddition() {
  let [a, b] = getNumbers();

  return createQuestion(`${a} + ${b}`, a + b, "number");
}

function generateSubtraction() {
  let [a, b] = getNumbers();

  if (a < b) [a, b] = [b, a];
  return createQuestion(`${a} - ${b}`, a - b, "number");
}

function generateMultiplication() {
  let [a, b] = getNumbers();

  return {
    question: `${a} × ${b}`,
    answer: a * b,
    type: "number",
  };
  return createQuestion(`${a} × ${b}`, a * b, "number");
}

function generateDivision() {
  let [dividend, divisor] = getDivisionNumbers();

  return createQuestion(
    `${dividend} ÷ ${divisor}`,
    dividend / divisor,
    "number",
  );
}

function generateTables() {
  let table;

  if (difficultySelect.value === "random") {
    table = randomInt(2, 20);
  } else {
    table = app.selectedTables[randomInt(0, app.selectedTables.length - 1)];
  }

  let multiplier = randomInt(2, Number(tableLimitSelect.value));

  let questionText = "";
  if (Math.random() < 0.5) {
    questionText = `${table} × ${multiplier}`;
  } else {
    questionText = `${multiplier} × ${table}`;
  }

  return createQuestion(questionText, table * multiplier, "number");
}

function generateSquares() {
  const limit = Number(difficultySelect.value);

  const number = randomInRange(2, limit);

  return createQuestion(`${number}²`, number * number, "number");
}

function generateCubes() {
  const limit = Number(difficultySelect.value);

  const number = randomInRange(2, limit);

  return createQuestion(`${number}³`, number * number * number, "number");
}

function generateSquareRoots() {
  const limit = Number(difficultySelect.value);

  const number = randomInRange(2, limit);

  return createQuestion(`√${number * number}`, number, "number");
}

function generateCubeRoots() {
  const limit = Number(difficultySelect.value);

  const number = randomInRange(2, limit);

  return createQuestion(`∛${number * number * number}`, number, "number");
}

function generateLetterToPosition() {
  let letter = randomLetter();

  return createQuestion(letter.letter, letter.position, "number");
}

function generateLetterToReversePosition() {
  let letter = randomLetter();

  return createQuestion(letter.letter, letter.reversePosition, "number");
}

function generatePositionToLetter() {
  let letter = randomLetter();

  return createQuestion(letter.position, letter.letter, "letter");
}

function generateReversePositionToLetter() {
  let letter = randomLetter();

  return createQuestion(letter.reversePosition, letter.letter, "letter");
}

function generateMirrorLetter() {
  let letter = randomLetter();

  return createQuestion(letter.letter, letter.mirror, "letter");
}

function generateFractionPercentages() {
  switch (difficultySelect.value) {
    case "f2p":
      return generateFlashcard(fractionData, "fraction", "percentage");

    case "p2f":
      return generateFlashcard(fractionData, "percentage", "fraction");

    case "mixed":
      return Math.random() < 0.5
        ? generateFlashcard(fractionData, "fraction", "percentage")
        : generateFlashcard(fractionData, "percentage", "fraction");
  }
}

function generateFractionDecimals() {
  switch (difficultySelect.value) {
    case "f2d":
      return generateFlashcard(fractionData, "fraction", "decimal");

    case "d2f":
      return generateFlashcard(fractionData, "decimal", "fraction");

    case "mixed":
      return Math.random() < 0.5
        ? generateFlashcard(fractionData, "fraction", "decimal")
        : generateFlashcard(fractionData, "decimal", "fraction");
  }
}

function generateDecimalPercentage() {
  switch (difficultySelect.value) {
    case "d2p":
      return generateFlashcard(fractionData, "decimal", "percentage");

    case "p2d":
      return generateFlashcard(fractionData, "percentage", "decimal");

    case "mixed":
      return Math.random() < 0.5
        ? generateFlashcard(fractionData, "decimal", "percentage")
        : generateFlashcard(fractionData, "percentage", "decimal");
  }
}

function nextQ() {
  resetQuestion();

  prepareQuestion();

  showQuestion();
}

function prepareQuestion() {
  let m = modeSelect.value;

  let questionObject;

  switch (m) {
    case "l2p":
      questionObject = generateLetterToPosition();
      break;

    case "p2l":
      questionObject = generatePositionToLetter();
      break;

    case "l2rp":
      questionObject = generateLetterToReversePosition();
      break;

    case "rp2l":
      questionObject = generateReversePositionToLetter();
      break;

    case "mirror":
      questionObject = generateMirrorLetter();
      break;

    case "add":
      questionObject = generateAddition();
      break;

    case "sub":
      questionObject = generateSubtraction();
      break;

    case "mul":
      questionObject = generateMultiplication();
      break;

    case "div":
      questionObject = generateDivision();
      break;

    case "table":
      questionObject = generateTables();
      break;

    case "square":
      questionObject = generateSquares();
      break;

    case "cube":
      questionObject = generateCubes();
      break;

    case "squareRoot":
      questionObject = generateSquareRoots();
      break;

    case "cubeRoot":
      questionObject = generateCubeRoots();
      break;

    case "fractionPercentage":
      questionObject = generateFractionPercentages();
      break;

    case "fractionDecimal":
      questionObject = generateFractionDecimals();
      break;

    case "decimalPercentage":
      questionObject = generateDecimalPercentage();
      break;
  }

  session.currentQuestion = questionObject;

  if (questionObject.type === "number") {
    setNumberMode();
  } else {
    setLetterMode();
  }
}

function showQuestion() {
  const q = session.currentQuestion;

  questionDisplay.textContent = q.question;

  app.correctAnswer = String(q.answer);

  session.questionStartTime = performance.now();
}

function createQuestion(question, answer, type) {
  return {
    question,
    answer,
    type,
  };
}

function resetQuestion() {
  answerInput.value = "";
  answerInput.className = "";
  feedbackLabel.textContent = "";
}
