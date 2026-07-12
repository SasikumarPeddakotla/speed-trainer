modeSelect.onchange = () => {
  updateOptions();
  prepareSession();
};

difficultySelect.onchange = () => {
  if (modeSelect.value === "table") {
    if (difficultySelect.value === "custom") {
      openTablePopup();
      return;
    }

    difficultySelect.options[1].text = app.customText;
  }

  prepareSession();
};

tableLimitSelect.onchange = () => {
  prepareSession();
};

settingsBtn.onclick = openPracticeSettings;
restartBtn.onclick = () => {
  openRestartConfirmation();
};

startBtn.onclick = () => {
  startSession();
};

let backspaceTimer = null;
let backspaceInterval = null;

backspaceBtn.addEventListener("pointerdown", () => {
  // Delete one immediately
  answerInput.value = answerInput.value.slice(0, -1);

  answerInput.dispatchEvent(new Event("input"));

  // After 500ms, start deleting continuously
  backspaceTimer = setTimeout(() => {
    backspaceInterval = setInterval(() => {
      answerInput.value = answerInput.value.slice(0, -1);
    }, 60);
  }, 500);
});

function stopBackspace() {
  clearTimeout(backspaceTimer);
  clearInterval(backspaceInterval);
}

backspaceBtn.addEventListener("pointerup", stopBackspace);
backspaceBtn.addEventListener("pointerleave", stopBackspace);
backspaceBtn.addEventListener("pointercancel", stopBackspace);

answerInput.addEventListener("input", validate);

updateOptions();

prepareSession();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js");
  });
}
