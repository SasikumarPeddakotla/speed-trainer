function randomNumber(digits) {
  const min = digits === 1 ? 2 : Math.pow(10, digits - 1);
  const max = Math.pow(10, digits) - 1;

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getNumbers() {
  let d = difficultySelect.value;

  let aDigits, bDigits;

  switch (d) {
    case "1x1":
      aDigits = 1;
      bDigits = 1;
      break;

    case "2x1":
      aDigits = 2;
      bDigits = 1;
      break;

    case "2x2":
      aDigits = 2;
      bDigits = 2;
      break;

    case "3x2":
      aDigits = 3;
      bDigits = 2;
      break;

    case "3x3":
      aDigits = 3;
      bDigits = 3;
      break;
  }

  let a = randomNumber(aDigits);
  let b = randomNumber(bDigits);

  // Randomly swap the numbers
  if (Math.random() < 0.5) {
    [a, b] = [b, a];
  }

  return [a, b];
}

function getDivisionNumbers() {
  let d = difficultySelect.value;

  let dividendDigits, divisorDigits;

  switch (d) {
    case "1x1":
      dividendDigits = 1;
      divisorDigits = 1;
      break;

    case "2x1":
      dividendDigits = 2;
      divisorDigits = 1;
      break;

    case "2x2":
      dividendDigits = 2;
      divisorDigits = 2;
      break;

    case "3x2":
      dividendDigits = 3;
      divisorDigits = 2;
      break;

    case "3x3":
      dividendDigits = 3;
      divisorDigits = 3;
      break;
  }

  const minDivisor = divisorDigits === 1 ? 2 : Math.pow(10, divisorDigits - 1);
  const maxDivisor = Math.pow(10, divisorDigits) - 1;

  const minDividend =
    dividendDigits === 1 ? 2 : Math.pow(10, dividendDigits - 1);
  const maxDividend = Math.pow(10, dividendDigits) - 1;

  while (true) {
    let divisor = randomInt(minDivisor, maxDivisor);

    let maxQuotient = Math.floor(maxDividend / divisor);
    let minQuotient = Math.ceil(minDividend / divisor);

    if (minQuotient > maxQuotient) continue;

    let quotient = randomInt(minQuotient, maxQuotient);

    let dividend = divisor * quotient;

    return [dividend, divisor];
  }
}
