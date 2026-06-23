const quiz = document.querySelector("[data-quiz]");
const quizForm = document.querySelector("#quiz-form");
const answerInputs = document.querySelectorAll("[data-answer]");
const feedback = document.querySelector("#quiz-feedback");
const attemptStatus = document.querySelector("#attempt-status");
const hintCard = document.querySelector("#hint-card");
const hintText = document.querySelector("#hint-text");
const warningCard = document.querySelector("#warning-card");
const resultAnimation = document.querySelector("#result-animation");
const resultTitle = document.querySelector("#result-title");
const resultText = document.querySelector("#result-text");
const storedStateText = document.querySelector("#stored-state");
const knowledgeStateCard = document.querySelector("#knowledge-state-card");

const STORAGE_KEY = "tfc-knowledge-challenge-road-to-weathertop";

let usedAttempts = 0;
let quizIsFinished = false;

const maxAttempts = Number(quiz.dataset.maxAttempts);

updateAttemptStatus();
renderStoredKnowledgeState(readKnowledgeState());

quizForm.addEventListener("submit", handleSubmitAnswer);

answerInputs.forEach((input) => {
  input.addEventListener("change", () => {
    clearAnswerStates();
  });
});

function handleSubmitAnswer(event) {
  event.preventDefault();

  if (quizIsFinished) {
    return;
  }

  const selectedAnswer = document.querySelector("[data-answer]:checked");

  if (!selectedAnswer) {
    showFeedback("Please choose an answer before submitting.", "error");
    return;
  }

  const isCorrect = selectedAnswer.dataset.correct === "true";

  if (isCorrect) {
    handleCorrectAnswer(selectedAnswer);
    return;
  }

  handleWrongAnswer(selectedAnswer);
}

function handleCorrectAnswer(selectedAnswer) {
  quizIsFinished = true;

  const answerWrapper = selectedAnswer.closest(".answer-option");
  answerWrapper.classList.add("is-correct");

  const message = selectedAnswer.dataset.feedback || quiz.dataset.successMessage;

  showFeedback(message, "success");
  showResultAnimation("correct");
  saveKnowledgeState("prepared", selectedAnswer);
  lockQuiz();
}

function handleWrongAnswer(selectedAnswer) {
  usedAttempts += 1;
  updateAttemptStatus();

  const answerWrapper = selectedAnswer.closest(".answer-option");
  answerWrapper.classList.add("is-wrong");

  const message = selectedAnswer.dataset.feedback || "That answer is not correct.";

  showFeedback(message, "error");
  showHint();
  showResultAnimation("wrong");

  if (usedAttempts >= maxAttempts) {
    quizIsFinished = true;
    warningCard.classList.add("is-active");
    showFeedback(quiz.dataset.failMessage, "error");
    saveKnowledgeState("unprepared", selectedAnswer);
    lockQuiz();
  }
}

function saveKnowledgeState(status, selectedAnswer) {
  const knowledgeState = {
    section: "The Road to Weathertop",
    challenge: "Midgewater Marshes knowledge check",
    capability: "Make uncertain knowledge transparent",
    status: status,
    attemptsUsed: usedAttempts,
    maxAttempts: maxAttempts,
    selectedAnswer: selectedAnswer.value,
    weakArea: status === "unprepared" ? "environmental danger signs" : null,
    confidenceImpact: status === "prepared" ? "stable" : "lowered",
    savedAt: new Date().toISOString()
  };

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(knowledgeState));
    renderStoredKnowledgeState(knowledgeState);
  } catch (error) {
    showFeedback(
      "The result could not be stored on this device, but the current answer was still evaluated.",
      "error"
    );
  }
}

function readKnowledgeState() {
  try {
    const storedState = localStorage.getItem(STORAGE_KEY);

    if (!storedState) {
      return null;
    }

    return JSON.parse(storedState);
  } catch (error) {
    return null;
  }
}

function renderStoredKnowledgeState(knowledgeState) {
  if (!storedStateText || !knowledgeStateCard) {
    return;
  }

  knowledgeStateCard.classList.remove("is-prepared", "is-unprepared");

  if (!knowledgeState) {
    storedStateText.textContent = "Not recorded yet";
    return;
  }

  if (knowledgeState.status === "prepared") {
    storedStateText.textContent = "Prepared · confidence stable";
    knowledgeStateCard.classList.add("is-prepared");
    return;
  }

  if (knowledgeState.status === "unprepared") {
    storedStateText.textContent = "Unprepared · confidence lowered";
    knowledgeStateCard.classList.add("is-unprepared");
  }
}

function showFeedback(message, type) {
  feedback.textContent = message;

  feedback.classList.remove("is-success", "is-error");

  if (type === "success") {
    feedback.classList.add("is-success");
  }

  if (type === "error") {
    feedback.classList.add("is-error");
  }
}

function showHint() {
  hintCard.classList.add("is-visible");
  hintText.textContent = hintCard.dataset.hint;
}

function updateAttemptStatus() {
  attemptStatus.textContent = `${usedAttempts} of ${maxAttempts} used`;
}

function showResultAnimation(type) {
  resultAnimation.classList.remove("is-correct", "is-wrong");
  resultAnimation.classList.add("is-visible");

  if (type === "correct") {
    resultAnimation.classList.add("is-correct");
    resultTitle.textContent = resultAnimation.dataset.correctTitle;
    resultText.textContent = resultAnimation.dataset.correctText;
  }

  if (type === "wrong") {
    resultAnimation.classList.add("is-wrong");
    resultTitle.textContent = resultAnimation.dataset.wrongTitle;
    resultText.textContent = resultAnimation.dataset.wrongText;
  }
}

function clearAnswerStates() {
  const answerWrappers = document.querySelectorAll(".answer-option");

  answerWrappers.forEach((answerWrapper) => {
    answerWrapper.classList.remove("is-correct", "is-wrong");
  });
}

function lockQuiz() {
  quiz.classList.add("is-locked");

  answerInputs.forEach((input) => {
    input.disabled = true;
  });

  const submitButton = quizForm.querySelector(".submit-answer");
  submitButton.disabled = true;
  submitButton.setAttribute("aria-disabled", "true");
}
