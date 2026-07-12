function generateFlashcard(
  data,
  questionKey,
  answerKey,
  answerType = "number",
  questionStyle = "large",
) {
  const item = data[randomInRange(0, data.length - 1)];

  let question = item[questionKey];

  if (questionKey === "percentage") {
    question += "%";
  }

  return createQuestion(question, item[answerKey], answerType, questionStyle);
}
