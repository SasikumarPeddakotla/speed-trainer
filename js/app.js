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

updateOptions();

prepareSession();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js");
  });
}
