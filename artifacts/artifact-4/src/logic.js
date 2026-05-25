// Artifact 4: Logic & State – Camp Suitability Check

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
      "Medium risk: the Fellowship needs rest, but the ground is unstable and nearby danger signs are not fully clear.",
    confidenceDetails:
      "Low-medium confidence: the Fellowship has only partial environmental information in the Midgewater Marshes.",
    factorDetails: {
      concealment:
        "Partial concealment supports a short rest, but it is not enough for resting without a guard.",
      ground:
        "Unstable marsh soil can slow the group down, make resting unsafe, and leave visible traces.",
      resources:
        "Limited resources mean this place does not strongly improve the value of stopping here.",
      dangerSigns:
        "Unclear tracks nearby cannot be interpreted with confidence, so the group should assume possible risk.",
      groupCondition:
        "The Fellowship is tired. Rest is relevant, but the group is not forced to stop at any cost."
    }
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

function formatFactor(value) {
  if (value === "partial") return "Partly hidden";
  if (value === "unstable") return "Unstable / uncertain";
  if (value === "unclear") return "Unclear tracks nearby";
  if (value === "limited") return "Limited";
  if (value === "tired") return "Tired";
  if (value === "critical") return "Critical";
  if (value === "stable") return "Stable";

  return value;
}

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

function clearInlineInformation() {
  var openElements = document.querySelectorAll(".is-open");
  var inlineInfos = document.querySelectorAll(".inline-info");

  openElements.forEach(function (element) {
    element.classList.remove("is-open");
  });

  inlineInfos.forEach(function (info) {
    info.textContent = "";
  });
}

function updateOpenedPanel(evaluation) {
  clearInlineInformation();

  if (campState.openedPanel === "risk") {
    var riskCard = document.querySelector("#risk-card");
    var riskInfo = document.querySelector("#risk-info");

    riskCard.classList.add("is-open");
    riskInfo.textContent = evaluation.riskDetails;
  } else if (campState.openedPanel === "confidence") {
    var confidenceCard = document.querySelector("#confidence-card");
    var confidenceInfo = document.querySelector("#confidence-info");

    confidenceCard.classList.add("is-open");
    confidenceInfo.textContent = evaluation.confidenceDetails;
  } else if (evaluation.factorDetails[campState.openedPanel]) {
    var openedFactor = document.querySelector(
      '[data-factor="' + campState.openedPanel + '"]'
    );
    var factorInfo = openedFactor.querySelector(".factor-info");

    openedFactor.classList.add("is-open");
    factorInfo.textContent = evaluation.factorDetails[campState.openedPanel];
  }
}

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

function handleActionSelection(action) {
  var feedback = document.querySelector("#action-feedback");

  campState.selectedAction = action;
  campState.openedPanel = null;

  clearInlineInformation();

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

function togglePanel(panelName) {
  if (campState.openedPanel === panelName) {
    campState.openedPanel = null;
  } else {
    campState.openedPanel = panelName;
  }

  campState.selectedAction = null;
  document.querySelector("#action-feedback").textContent =
    "No action selected yet.";

  renderCampEvaluation();
}

function resetInterfaceState() {
  campState.selectedAction = null;
  campState.openedPanel = null;

  document.querySelector("#action-feedback").textContent =
    "No action selected yet.";

  renderCampEvaluation();
}

function initializeInterface() {
  var riskCard = document.querySelector("#risk-card");
  var confidenceCard = document.querySelector("#confidence-card");
  var factorButtons = document.querySelectorAll("[data-factor]");
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

  factorButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      togglePanel(button.dataset.factor);
    });
  });

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
