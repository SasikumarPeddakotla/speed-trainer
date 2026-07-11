function buildNumberKeyboard() {
  keyboardContainer.className = "keyboardContainer number";

  keyboardContainer.innerHTML = "";

  const keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "AC", "0", "⌫"];

  keys.forEach(createButton);
}

function buildLetterKeyboard() {
  keyboardContainer.className = "keyboardContainer alpha";

  keyboardContainer.innerHTML = "";

  qwertyLetters.forEach(createButton);

  createButton("⌫");
  createButton("AC");
}

function createButton(text) {
  const btn = document.createElement("button");

  btn.className = "key";

  if (text === "⌫" || text === "AC") btn.classList.add("control");

  btn.textContent = text;

  btn.addEventListener("pointerdown", () => press(text));

  keyboardContainer.appendChild(btn);
}

// -------------------------
// Button Press
// -------------------------

function press(key) {
  if (key === "AC") {
    answerInput.value = "";
    return;
  }

  if (key === "⌫") {
    answerInput.value = answerInput.value.slice(0, -1);

    return;
  }

  answerInput.value += key;

  validate();
}

function setNumberMode() {
  answerInput.dataset.type = "number";
  if (app.currentKeyboard !== "number") {
    buildNumberKeyboard();
    app.currentKeyboard = "number";
  }
}

function setLetterMode() {
  answerInput.dataset.type = "letter";
  if (app.currentKeyboard !== "letter") {
    buildLetterKeyboard();
    app.currentKeyboard = "letter";
  }
}
