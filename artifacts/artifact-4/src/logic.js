// Explicit state model for the current camp situation.
var campState = {
  groupCondition: "tired",
  concealment: "partial",
  ground: "unstable",
  dangerSigns: "unclear",
  resources: "limited",
  confidence: "low-medium",
  selectedAction: null,
  openedPanel: null
};

// Derives the recommendation and UI messages from the current state.
function evaluateCamp(state) {
  var needsRest =
    state.groupCondition === "tired" || state.groupCondition === "critical";
  var unsafeGround = state.ground === "unstable";
  var unclearDanger = state.dangerSigns === "unclear";
  var partialConcealment = state.concealment === "partial";

  var evaluation = {
    recommendation: "Rest under guard",
    riskLevel: "Medium",
    confidenceLevel: "Low-Medium",
    recommendationCopy:
      "The location offers partial concealment, but the ground is uncertain and signs of danger are unclear.",
    noticeText:
      "The assessment is based on incomplete signs. The Fellowship should remain cautious and keep watch if resting here.",
    riskDetails:
      "Risk is medium because the group needs rest, but the ground is unstable and nearby danger signs are not fully clear.",
    confidenceDetails:
      "Confidence is low-medium because the Fellowship has only partial environmental information in the Midgewater Marshes."
  };

  if (!needsRest) {
    evaluation.recommendation = "Continue the journey";
    evaluation.riskLevel = "Low";
    evaluation.confidenceLevel = "Medium";
    evaluation.recommendationCopy =
      "The Fellowship is still stable enough to continue. Rest is not urgent at this location.";
    evaluation.noticeText =
      "Rest is not required right now. The Fellowship should continue while conditions allow it.";
  } else if (unsafeGround || unclearDanger || partialConcealment) {
    evaluation.recommendation = "Rest under guard";
    evaluation.riskLevel = "Medium";
    evaluation.confidenceLevel = "Low-Medium";
  } else {
    evaluation.recommendation = "Rest here";
    evaluation.riskLevel = "Low";
    evaluation.confidenceLevel = "Medium-High";
    evaluation.recommendationCopy =
      "The location appears stable, concealed, and free from immediate danger signs.";
    evaluation.noticeText =
      "The Fellowship may rest here, but should still remain alert to changes in the environment.";
  }

  return evaluation;
}

// Converts state values into readable interface labels.
function formatFactor(value) {
  if (value === "partial") {
    return "Partly hidden";
  }

  if (value === "unstable") {
    return "Unstable / uncertain";
  }

  if (value === "unclear") {
    return "Unclear tracks nearby";
  }

  if (value === "limited") {
    return "Limited";
  }

  if (value === "tired") {
    return "Tired";
  }

  if (value === "critical") {
    return "Critical";
  }

  if (value === "stable") {
    return "Stable";
  }

  return value;
}

// Updates all visible UI elements based on the current state.
function renderCampEvaluation() {
  var evaluation = evaluateCamp(campState);

  document.querySelector("#recommendation-title").textContent =
    evaluation.recommendation;
  document.querySelector("#risk-summary").textContent =
    "Current risk: " + evaluation.riskLevel;
  document.querySelector("#recommendation-copy").textContent =
    evaluation.recommendationCopy;
  document.querySelector("#overall-risk-label").textContent =
    evaluation.riskLevel;
  document.querySelector("#confidence-label").textContent =
    evaluation.confidenceLevel;
  document.querySelector("#notice-text").textContent = evaluation.noticeText;

  document.querySelector("#factor-concealment").textContent = formatFactor(
    campState.concealment
  );
  document.querySelector("#factor-ground").textContent = formatFactor(
    campState.ground
  );
  document.querySelector("#factor-resources").textContent = formatFactor(
    campState.resources
  );
  document.querySelector("#factor-danger").textContent = formatFactor(
    campState.dangerSigns
  );
  document.querySelector("#factor-condition").textContent = formatFactor(
    campState.groupCondition
  );

  updateOpenedPanel(evaluation);
  updateSelectedAction();
}

// Shows an explanation when the user opens the risk or confidence card.
function updateOpenedPanel(evaluation) {
  var riskCard = document.querySelector("#risk-card");
  var confidenceCard = document.querySelector("#confidence-card");
  var feedback = document.querySelector("#system-feedback");

  riskCard.classList.remove("is-open");
  confidenceCard.classList.remove("is-open");

  if (campState.openedPanel === "risk") {
    riskCard.classList.add("is-open");
    feedback.textContent = evaluation.riskDetails;
  } else if (campState.openedPanel === "confidence") {
    confidenceCard.classList.add("is-open");
    feedback.textContent = evaluation.confidenceDetails;
  } else if (campState.selectedAction === null) {
    feedback.textContent = "No action selected yet.";
  }
}

// Highlights the selected action button.
function updateSelectedAction() {
  var actionButtons = document.querySelectorAll("[data-action]");

  actionButtons.forEach(function (button) {
    if (button.dataset.action === campState.selectedAction) {
      button.classList.add("is-selected");
    } else {
      button.classList.remove("is-selected");
    }
  });
}

// Updates the selected action and explains its consequence.
function handleActionSelection(action) {
  var feedback = document.querySelector("#system-feedback");

  campState.selectedAction = action;
  campState.openedPanel = null;

  if (action === "rest-under-guard") {
    feedback.textContent =
      "Recommended action selected. The Fellowship rests briefly while keeping watch because the site is not fully safe.";
  } else if (action === "rest-here") {
    feedback.textContent =
      "Riskier action selected. Resting without a guard ignores the unclear danger signs and unstable ground.";
  } else if (action === "search-better-camp") {
    feedback.textContent =
      "Cautious alternative selected. The Fellowship continues searching for a safer resting place, but fatigue remains.";
  } else if (action === "continue-journey") {
    feedback.textContent =
      "Journey continuation selected. This avoids the current site, but the Fellowship remains tired.";
  }

  updateSelectedAction();
}

// Opens or closes the explanation cards.
function togglePanel(panelName) {
  if (campState.openedPanel === panelName) {
    campState.openedPanel = null;
  } else {
    campState.openedPanel = panelName;
  }

  renderCampEvaluation();
}

// Resets the local interaction state of this screen.
function resetInterfaceState() {
  campState.selectedAction = null;
  campState.openedPanel = null;
  renderCampEvaluation();
}

// Initializes all event listeners.
function initializeInterface() {
  var riskCard = document.querySelector("#risk-card");
  var confidenceCard = document.querySelector("#confidence-card");
  var actionButtons = document.querySelectorAll("[data-action]");
  var backButton = document.querySelector(".back-button");

  if (riskCard) {
    riskCard.addEventListener("click", function () {
      togglePanel("risk");
    });
  }

  if (confidenceCard) {
    confidenceCard.addEventListener("click", function () {
      togglePanel("confidence");
    });
  }

  actionButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      handleActionSelection(button.dataset.action);
    });
  });

  if (backButton) {
    backButton.addEventListener("click", function () {
      resetInterfaceState();
    });
  }

  renderCampEvaluation();
}

initializeInterface();
