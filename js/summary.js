function createSummaryRow(label, value) {
  const row = document.createElement("div");

  row.className = "summary-row";

  const left = document.createElement("span");
  left.textContent = label;

  const right = document.createElement("strong");
  right.textContent = value;

  row.append(left, right);

  return row;
}

function showSessionSummary() {
  const container = document.createElement("div");

  container.append(
    createSummaryRow("✔ Correct", session.correctCount),
    createSummaryRow("✖ Wrong", session.wrongCount),
    createSummaryRow(
      "🎯 Accuracy",
      Math.round(
        (session.correctCount /
          Math.max(session.correctCount + session.wrongCount, 1)) *
          100,
      ) + "%",
    ),
    createSummaryRow("🔥 Best Streak", session.bestStreak),
    createSummaryRow(
      "⚡ Avg Response",
      (getAverageResponseTime() / 1000).toFixed(2) + " s",
    ),
    createSummaryRow("⏱ Time", formatSessionDuration()),
  );

  openModal("🎉 Session Complete", container, () => {
    prepareSession();
    return true;
  });
}

function formatSessionDuration() {
  const totalSeconds = Math.floor((session.endTime - session.startTime) / 1000);

  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return (
    String(minutes).padStart(2, "0") + ":" + String(seconds).padStart(2, "0")
  );
}
