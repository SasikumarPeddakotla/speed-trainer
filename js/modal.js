function openModal(title, bodyElement, onOk, options = {}) {
  const {
    okText = "OK",
    cancelText = "Cancel",
    onOpen = null,
    onCancel = null,
  } = options;

  modalContainer.innerHTML = "";

  const overlay = document.createElement("div");
  overlay.className = "modal-overlay";

  const modal = document.createElement("div");
  modal.className = "modal";

  const header = document.createElement("div");
  header.className = "modal-header";
  header.textContent = title;

  const body = document.createElement("div");
  body.className = "modal-body";
  body.appendChild(bodyElement);

  const error = document.createElement("div");
  error.className = "modal-error";

  const footer = document.createElement("div");
  footer.className = "modal-footer";

  const cancelBtn = document.createElement("button");
  cancelBtn.className = "modal-btn cancel";
  cancelBtn.textContent = cancelText;

  cancelBtn.onclick = () => {
    if (onCancel) {
      onCancel();
    }

    closeModal();
  };

  const okBtn = document.createElement("button");
  okBtn.className = "modal-btn ok";
  okBtn.textContent = okText;

  okBtn.onclick = () => {
    const shouldClose = onOk ? onOk() : true;

    if (shouldClose) {
      if (onCancel) {
        onCancel();
      }

      closeModal();
    }
  };

  footer.append(cancelBtn, okBtn);

  modal.append(header, body, error, footer);

  overlay.appendChild(modal);

  if (onOpen) {
    onOpen();
  }

  modalContainer.appendChild(overlay);

  return {
    showError(message) {
      error.textContent = message;
    },

    clearError() {
      error.textContent = "";
    },
  };
}

function closeModal() {
  modalContainer.innerHTML = "";
}

function createOptionCard(text, value, selectedValue) {
  const card = document.createElement("div");

  card.className = "setting-option";

  if (value === selectedValue) {
    card.classList.add("active");
  }

  card.textContent = text;

  card.dataset.value = value;

  return card;
}

function createChoiceGroup(title, options, selectedValue) {
  const wrapper = document.createElement("div");

  const heading = document.createElement("h3");
  heading.textContent = title;

  heading.style.marginBottom = "12px";

  wrapper.appendChild(heading);

  const group = document.createElement("div");

  options.forEach(([text, value]) => {
    group.appendChild(createOptionCard(text, value, selectedValue));
  });

  wrapper.appendChild(group);

  return { wrapper, group };
}

function makeSelectable(container, onChange) {
  container.onclick = (e) => {
    e.stopPropagation();
    const card = e.target.closest(".setting-option");

    if (!card) return;

    container.querySelectorAll(".setting-option").forEach((c) => {
      c.classList.remove("active");
    });

    card.classList.add("active");

    if (onChange) {
      onChange(card.dataset.value);
    }
  };
}
