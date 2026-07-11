function openPracticeSettings() {
  const container = document.createElement("div");

  const settingsArea = document.createElement("div");
  settingsArea.style.marginTop = "20px";

  const sessionType = createChoiceGroup(
    "Session Type",
    [
      ["⏱ Unlimited Practice", "practice"],
      ["⏳ Countdown", "countdown"],
      ["🎯 Question Challenge", "question"],
    ],
    settings.sessionType,
  );

  makeSelectable(sessionType.group, (value) => {
    settings.sessionType = value;

    updatePracticeSettingsArea(value, settingsArea);
  });

  container.appendChild(sessionType.wrapper);

  container.appendChild(settingsArea);

  updatePracticeSettingsArea(settings.sessionType, settingsArea);

  openModal("Practice Settings", container, () => {
    settings.sessionType =
      sessionType.group.querySelector(".active").dataset.value;

    applyPracticeSettings();

    return true;
  });
}

function updatePracticeSettingsArea(type, settingsArea) {
  settingsArea.innerHTML = "";

  switch (type) {
    case "practice":
      renderPracticeSettings(settingsArea);
      break;

    case "countdown":
      renderCountdownSettings(settingsArea);
      break;

    case "question":
      renderQuestionSettings(settingsArea);
      break;
  }
}

function renderPracticeSettings(settingsArea) {
  // Unlimited Practice has no extra settings yet.
}

function renderSelectionSettings(
  settingsArea,
  title,
  options,
  selectedValue,
  onSelect,
) {
  const group = createChoiceGroup(title, options, selectedValue);

  makeSelectable(group.group, (value) => {
    onSelect(Number(value));
  });

  settingsArea.appendChild(group.wrapper);
}

function renderCountdownSettings(settingsArea) {
  renderSelectionSettings(
    settingsArea,
    "Duration",
    [
      ["1 min", 1],
      ["2 min", 2],
      ["5 min", 5],
      ["10 min", 10],
      ["15 min", 15],
    ],
    settings.countdownMinutes,
    (value) => {
      settings.countdownMinutes = value;
    },
  );
}

function renderQuestionSettings(settingsArea) {
  renderSelectionSettings(
    settingsArea,
    "Question Count",
    [
      ["10", 10],
      ["25", 25],
      ["50", 50],
      ["100", 100],
      ["200", 200],
    ],
    settings.questionLimit,
    (value) => {
      settings.questionLimit = value;
    },
  );
}

function updateOptions() {
  const alphabetModes = ["mixed", "l2n", "n2l"];

  if (alphabetModes.includes(modeSelect.value)) {
    optionsContainer.style.display = "none";
    return;
  }

  optionsContainer.style.display = "block";

  difficultySelect.innerHTML = "";
  tableLimitSelect.innerHTML = "";

  let config = moduleOptions[modeSelect.value];

  config.difficultySelect.forEach(([value, text]) => {
    difficultySelect.add(new Option(text, value));
  });

  if (config.tableLimitSelect) {
    tableLimitSelect.style.display = "block";

    config.tableLimitSelect.forEach(([value, text]) => {
      tableLimitSelect.add(new Option(text, value));
    });
  } else {
    tableLimitSelect.style.display = "none";
  }
}

function applyPracticeSettings() {
  startSession();
}

function openTablePopup() {
  const grid = document.createElement("div");
  grid.className = "modal-grid";

  const container = document.createElement("div");

  const toolbar = document.createElement("div");

  toolbar.className = "modal-toolbar";

  const selectAllBtn = document.createElement("button");
  selectAllBtn.textContent = "Select All";

  const clearAllBtn = document.createElement("button");
  clearAllBtn.textContent = "Clear All";

  toolbar.append(selectAllBtn, clearAllBtn);

  container.append(toolbar, grid);

  // If user has never selected custom tables,
  // default to all tables selected.
  const selected = app.selectedTables
    ? [...app.selectedTables]
    : Array.from({ length: 19 }, (_, i) => i + 2);

  for (let i = 2; i <= 20; i++) {
    const btn = document.createElement("div");

    btn.className = "modal-item";

    if (selected.includes(i)) {
      btn.classList.add("active");
    }

    btn.textContent = i;

    btn.dataset.value = i;

    btn.onpointerdown = () => {
      btn.classList.toggle("active");

      modal.clearError();
    };

    grid.appendChild(btn);
  }

  selectAllBtn.onclick = () => {
    grid.querySelectorAll(".modal-item").forEach((btn) => {
      btn.classList.add("active");
    });

    modal.clearError();
  };

  clearAllBtn.onclick = () => {
    grid.querySelectorAll(".modal-item").forEach((btn) => {
      btn.classList.remove("active");
    });
  };

  const modal = openModal("Select Tables", container, () => {
    const selectedButtons = grid.querySelectorAll(".modal-item.active");

    if (selectedButtons.length === 0) {
      modal.showError("Please select at least one table.");

      return false;
    }

    app.selectedTables = [...selectedButtons].map((btn) =>
      Number(btn.dataset.value),
    );

    difficultySelect.options[1].text =
      "Custom (" + app.selectedTables.join(",") + ")";

    nextQ();

    return true;
  });
}
