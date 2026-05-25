// logic.js
// This file makes the Camp Suitability Check result page interactive.

// -----------------------------
// 1. STATE
// -----------------------------
// State means: the current information the page remembers.

const campState = {
  recommendation: "rest-under-guard",
  overallRiskLevel: "Medium",
  overallRiskValue: 60,
  confidenceLevel: "Low-Medium",
  confidenceValue: 45,
  selectedAction: null,
  openedPanel: null
};

// -----------------------------
// 2. FIND HTML ELEMENTS
// -----------------------------
// JavaScript searches for existing elements in the HTML.

const backButton = document.querySelector(".back-button");

const summaryCards = document.querySelectorAll(".summary-strip > div");
const overallRiskCard = summaryCards[0];
const confidenceCard = summaryCards[1];

const actionButtons = document.querySelectorAll(".action");
const actionsSection = document.querySelector(".actions");

// -----------------------------
// 3. CREATE FEEDBACK TEXT AREAS
// -----------------------------
// These are small text areas that JavaScript adds to the existing page.

const systemFeedback = document.createElement("p");
systemFeedback.className = "system-feedback";
systemFeedback.textContent = "The camp suitability result is ready.";

if (actionsSection) {
  actionsSection.appendChild(systemFeedback);
}

const overallRiskDetails = document.createElement("p");
overallRiskDetails.className = "metric-detail";
overallRiskDetails.textContent = "";

const confidenceDetails = document.createElement("p");
confidenceDetails.className = "metric-detail";
confidenceDetails.textContent = "";

if (overallRiskCard) {
  overallRiskCard.appendChild(overallRiskDetails);
}

if (confidenceCard) {
  confidenceCard.appendChild(confidenceDetails);
}

// -----------------------------
// 4. CREATE ANIMATED BARS
// -----------------------------
// These bars start empty. When the user clicks, they fill up.

function createMetricBar() {
  const bar = document.createElement("div");
  bar.className = "metric-bar";

  const fill = document.createElement("span");
  fill.className = "metric-bar-fill";

  bar.appendChild(fill);

  return {
    bar: bar,
    fill: fill
  };
}

const overallRiskBar = createMetricBar();
const confidenceBar = createMetricBar();

if (overallRiskCard) {
  overallRiskCard.appendChild(overallRiskBar.bar);
}

if (confidenceCard) {
  confidenceCard.appendChild(confidenceBar.bar);
}
const metricHint = document.createElement("p");
metricHint.className = "metric-hint";
metricHint.textContent =
  "Tap Overall Risk or Confidence to inspect the reasoning.";

const summaryStrip = document.querySelector(".summary-strip");

if (summaryStrip) {
  summaryStrip.insertAdjacentElement("afterend", metricHint);
}
// -----------------------------
// 5. BACK BUTTON
// -----------------------------

function handleBackButton(event) {
  event.preventDefault();

  campState.selectedAction = "previous-step";

  systemFeedback.textContent =
    "Previous step: returning to the camp conditions input.";
}

if (backButton) {
  backButton.addEventListener("click", handleBackButton);
}

// -----------------------------
// 6. OVERALL RISK CLICK
// -----------------------------

function showOverallRisk() {
  campState.openedPanel = "overall-risk";

  overallRiskCard.classList.add("is-active");
  confidenceCard.classList.remove("is-active");

  overallRiskBar.fill.style.width = campState.overallRiskValue + "%";

  overallRiskDetails.textContent =
    "Overall risk is medium because the location offers partial concealment, but the ground is uncertain and signs of danger are unclear.";

  confidenceDetails.textContent = "";
  confidenceBar.fill.style.width = "0%";

  systemFeedback.textContent =
    "Overall Risk inspected: Medium risk affects the recommendation.";
}

if (overallRiskCard) {
  overallRiskCard.addEventListener("click", showOverallRisk);
}

// -----------------------------
// 7. CONFIDENCE CLICK
// -----------------------------

function showConfidence() {
  campState.openedPanel = "confidence";

  confidenceCard.classList.add("is-active");
  overallRiskCard.classList.remove("is-active");

  confidenceBar.fill.style.width = campState.confidenceValue + "%";

  confidenceDetails.textContent =
    "Confidence is low-medium because some information is incomplete. The recommendation should be used as guidance, not certainty.";

  overallRiskDetails.textContent = "";
  overallRiskBar.fill.style.width = "0%";

  systemFeedback.textContent =
    "Confidence inspected: the system is useful, but not completely certain.";
}

if (confidenceCard) {
  confidenceCard.addEventListener("click", showConfidence);
}

// -----------------------------
// 8. ACTION BUTTONS
// -----------------------------

function handleActionChoice(button) {
  const actionText = button.textContent.trim();

  actionButtons.forEach(function (otherButton) {
    otherButton.classList.remove("is-selected");
  });

  button.classList.add("is-selected");

  if (actionText === "Rest under guard") {
    campState.selectedAction = "rest-under-guard";

    systemFeedback.textContent =
      "Recommendation accepted: Resting under guard matches the Camp Suitability Check result.";
  }

  if (actionText === "Rest here") {
    campState.selectedAction = "rest-here";

    systemFeedback.textContent =
      "Caution: Resting here without a guard ignores part of the current risk assessment.";
  }

  if (actionText === "Search for a better camp") {
    campState.selectedAction = "search-better-camp";

    systemFeedback.textContent =
      "Redirecting you to the start of the Camp Suitability Check.";
  }

  if (actionText === "Continue the journey") {
    campState.selectedAction = "continue-journey";

    systemFeedback.textContent =
      "Redirecting you to the Home Screen.";
  }
}

actionButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    handleActionChoice(button);
  });
});
