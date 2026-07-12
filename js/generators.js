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

function generateLetterToNumber() {
  let i = Math.floor(Math.random() * 26);

  return createQuestion(letters[i], i + 1, "number");
}

function generateNumberToLetter() {
  let n = Math.floor(Math.random() * 26) + 1;

  return createQuestion(n, letters[n - 1], "letter");
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

  if (m === "mixed") {
    m = Math.random() < 0.5 ? "l2n" : "n2l";
  }

  let questionObject;

  switch (m) {
    case "l2n":
      questionObject = generateLetterToNumber();
      break;

    case "n2l":
      questionObject = generateNumberToLetter();
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
