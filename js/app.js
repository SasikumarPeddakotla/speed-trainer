modeSelect.onchange = () => {
  updateOptions();
  nextQ();
};

difficultySelect.onchange = () => {
  if (modeSelect.value === "table") {
    if (difficultySelect.value === "custom") {
      openTablePopup();
      return;
    }

    // User selected Random
    difficultySelect.options[1].text = app.customText;
  }

  nextQ();
};

tableLimitSelect.onchange = nextQ;

settingsBtn.onclick = openPracticeSettings;

updateOptions();

startSession();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js");
  });
}
