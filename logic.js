/* ============================================================
   The Shire Guide - Knowledge Challenge
   A 5-question gate before a new journey section.

   Flow (matches our system flowchart):
   - The Fellowship answers all 5 questions, one at a time.
   - No feedback is shown during the round.
   - After question 5, the whole round is graded at once:
       full review with each chosen answer and the correct one.
   - All 5 correct  -> section unlocked.
   - Not all correct -> the round can be retried.
   - A "try" is one COMPLETE run of the quiz; up to 3 tries.
   - Previous answers stay selected on a retry, so the Fellowship
     only has to correct what was wrong.
   - After 3 unsuccessful tries -> marked unprepared (warning).
   ============================================================ */

/* ---- Question data -------------------------------------------------------- */
const questions = [
  {
    prompt: "What makes the Midgewater Marshes dangerous at night?",
    hint: "What seems solid in daylight may not hold beneath a careless foot.",
    answers: [
      { label: "Unstable Ground", correct: true },
      { label: "Marsh Wraiths", correct: false },
      { label: "Poisonous Water", correct: false },
      { label: "No Safe Paths", correct: false },
    ],
  },
  {
    prompt: "Why does the Fellowship travel away from the main road?",
    hint: "The open road is watched by eyes that do not rest.",
    answers: [
      { label: "To avoid being seen by the Riders", correct: true },
      { label: "The road is flooded", correct: false },
      { label: "It is a shorter route", correct: false },
      { label: "To find better food", correct: false },
    ],
  },
  {
    prompt: "What should the Fellowship do before resting for the night?",
    hint: "A wise traveller knows the ground before laying down their head.",
    answers: [
      { label: "Check the ground and surroundings", correct: true },
      { label: "Light a large fire", correct: false },
      { label: "Keep marching through the night", correct: false },
      { label: "Split the group up", correct: false },
    ],
  },
  {
    prompt: "Why is Weathertop a useful landmark for the Fellowship?",
    hint: "From a height, much is revealed to those who watch.",
    answers: [
      { label: "It offers a wide view of the land", correct: true },
      { label: "It has a hidden market", correct: false },
      { label: "It is always safe", correct: false },
      { label: "It has fresh supplies", correct: false },
    ],
  },
  {
    prompt: "What is the greatest risk of an open hilltop like Weathertop?",
    hint: "To see far is also to be seen from afar.",
    answers: [
      { label: "Being visible from far away", correct: true },
      { label: "Falling rocks", correct: false },
      { label: "Too much shade", correct: false },
      { label: "Crowded paths", correct: false },
    ],
  },
];

/* ---- Element references --------------------------------------------------- */
const quiz = document.querySelector("[data-quiz]");
const quizForm = document.querySelector("#quiz-form");
const questionCard = document.querySelector("#question-card");
const answerList = document.querySelector("#answer-list");
const questionTitle = document.querySelector("#quiz-title");
const questionProgress = document.querySelector("#question-progress");
const progressCount = document.querySelector("#progress-count");
const progressDots = document.querySelector("#progress-dots");
const feedback = document.querySelector("#quiz-feedback");
const attemptStatus = document.querySelector("#attempt-status");
const warningCard = document.querySelector("#warning-card");
const reviewPanel = document.querySelector("#review-panel");
const reviewList = document.querySelector("#review-list");
const resultAnimation = document.querySelector("#result-animation");
const resultTitle = document.querySelector("#result-title");
const resultText = document.querySelector("#result-text");
const submitButton = document.querySelector("#submit-answer");
const backButton = document.querySelector("#nav-back");

/* ---- State ---------------------------------------------------------------- */
const maxAttempts = Number(quiz.dataset.maxAttempts); // 3 full tries
const totalQuestions = questions.length;

let currentIndex = 0;
let usedAttempts = 0;
let quizIsFinished = false;
// selections[i] = chosen answer index for question i, or null.
// Kept across tries so previous answers stay visible.
let selections = new Array(totalQuestions).fill(null);
let awaitingRetry = false; // true when the review is shown and the button means "Try Again"

/* ---- Setup ---------------------------------------------------------------- */
buildProgressDots();
updateAttemptStatus();
renderQuestion();

quizForm.addEventListener("submit", handleFormSubmit);

if (backButton) {
  backButton.addEventListener("click", goToPreviousQuestion);
}

/* ---- Rendering: question view -------------------------------------------- */
function renderQuestion() {
  reviewPanel.classList.remove("is-visible");
  questionCard.classList.remove("is-hidden");
  answerList.classList.remove("is-hidden");

  const question = questions[currentIndex];
  questionTitle.textContent = question.prompt;

  answerList.innerHTML = "";

  question.answers.forEach((answer, answerIndex) => {
    const optionId = `answer-${currentIndex}-${answerIndex}`;

    const wrapper = document.createElement("div");
    wrapper.className = "answer-option";

    const input = document.createElement("input");
    input.type = "radio";
    input.id = optionId;
    input.name = "quiz-answer";
    input.value = String(answerIndex);
    input.dataset.answer = "";

    // Restore previous selection so it stays visible on retry.
    if (selections[currentIndex] === answerIndex) {
      input.checked = true;
    }

    const label = document.createElement("label");
    label.setAttribute("for", optionId);

    const marker = document.createElement("span");
    marker.className = "answer-marker";
    marker.setAttribute("aria-hidden", "true");

    const text = document.createElement("span");
    text.textContent = answer.label;

    label.append(marker, text);
    wrapper.append(input, label);
    answerList.append(wrapper);
  });

  updateProgressDisplay();
  updateNavButtons();
  updateSubmitLabel();

  // Neutral prompt during the round - no right/wrong yet.
  feedback.textContent = "Answer all five questions. You will see the results at the end.";
  feedback.classList.remove("is-success", "is-error");
}

function updateSubmitLabel() {
  const isLast = currentIndex === totalQuestions - 1;
  submitButton.textContent = isLast ? "Finish & See Results" : "Next Question";
}

function updateNavButtons() {
  if (!backButton) return;
  backButton.disabled = currentIndex === 0;
}

/* ---- Progress ------------------------------------------------------------- */
function buildProgressDots() {
  progressDots.innerHTML = "";
  for (let i = 0; i < totalQuestions; i += 1) {
    progressDots.append(document.createElement("span"));
  }
  updateProgressDots();
}

function updateProgressDisplay() {
  const humanIndex = currentIndex + 1;
  questionProgress.textContent = `Question ${humanIndex} of ${totalQuestions}`;
  progressCount.textContent = `${humanIndex} / ${totalQuestions}`;
  updateProgressDots();
}

function updateProgressDots() {
  const dots = progressDots.querySelectorAll("span");
  dots.forEach((dot, index) => {
    dot.classList.remove("is-complete", "is-current");
    if (index < currentIndex) dot.classList.add("is-complete");
    else if (index === currentIndex) dot.classList.add("is-current");
  });
}

/* ---- Navigation ----------------------------------------------------------- */
function handleFormSubmit(event) {
  event.preventDefault();
  if (quizIsFinished) return;

  // When the review is on screen, the button is a retry control.
  if (awaitingRetry) {
    startRetry();
    return;
  }

  const selected = document.querySelector("[data-answer]:checked");
  if (!selected) {
    feedback.textContent = "Please choose an answer before continuing.";
    feedback.classList.remove("is-success");
    feedback.classList.add("is-error");
    return;
  }

  // Store the selection for this question.
  selections[currentIndex] = Number(selected.value);

  const isLast = currentIndex === totalQuestions - 1;
  if (isLast) {
    gradeRound();
  } else {
    currentIndex += 1;
    renderQuestion();
  }
}

function goToPreviousQuestion() {
  if (currentIndex === 0 || quizIsFinished) return;

  // Remember the current choice before stepping back, if any.
  const selected = document.querySelector("[data-answer]:checked");
  if (selected) {
    selections[currentIndex] = Number(selected.value);
  }

  currentIndex -= 1;
  renderQuestion();
}

/* ---- Grading + review ----------------------------------------------------- */
function gradeRound() {
  usedAttempts += 1;
  updateAttemptStatus();

  const correctCount = countCorrect();
  const allCorrect = correctCount === totalQuestions;

  showReview(correctCount);

  if (allCorrect) {
    finishQuizSuccessfully();
  } else if (usedAttempts >= maxAttempts) {
    failQuiz(correctCount);
  } else {
    offerRetry(correctCount);
  }
}

function countCorrect() {
  let count = 0;
  questions.forEach((question, i) => {
    const chosen = selections[i];
    if (chosen !== null && question.answers[chosen].correct) {
      count += 1;
    }
  });
  return count;
}

function showReview(correctCount) {
  // Hide the question, show the review panel.
  questionCard.classList.add("is-hidden");
  answerList.classList.add("is-hidden");
  reviewPanel.classList.add("is-visible");

  // Mark all dots complete.
  const dots = progressDots.querySelectorAll("span");
  dots.forEach((dot) => {
    dot.classList.remove("is-current");
    dot.classList.add("is-complete");
  });
  questionProgress.textContent = `Score: ${correctCount} of ${totalQuestions} correct`;
  progressCount.textContent = `${correctCount} / ${totalQuestions}`;

  // Build the full review: each question and the chosen answer.
  // For wrong answers, show a cryptic hint instead of the solution,
  // so the Fellowship must still reason it out on the retry.
  reviewList.innerHTML = "";

  questions.forEach((question, i) => {
    const chosen = selections[i];
    const chosenAnswer = chosen !== null ? question.answers[chosen] : null;
    const wasCorrect = chosenAnswer && chosenAnswer.correct;

    const item = document.createElement("div");
    item.className = `review-item ${wasCorrect ? "is-correct" : "is-wrong"}`;

    const q = document.createElement("p");
    q.className = "review-question";
    q.textContent = `${i + 1}. ${question.prompt}`;

    const yours = document.createElement("p");
    yours.className = "review-line";
    yours.textContent = chosenAnswer
      ? `Your answer: ${chosenAnswer.label}`
      : "Your answer: (none)";

    item.append(q, yours);

    // Only show a hint when the chosen answer was wrong.
    if (!wasCorrect) {
      const hint = document.createElement("p");
      hint.className = "review-line review-hint";
      hint.textContent = `Hint: ${question.hint}`;
      item.append(hint);
    }

    reviewList.append(item);
  });
}

/* ---- End states ----------------------------------------------------------- */
function finishQuizSuccessfully() {
  quizIsFinished = true;
  showFeedback(quiz.dataset.successMessage, "success");
  showResultAnimation("correct");
  submitButton.classList.add("is-hidden");
  if (backButton) backButton.disabled = true;
  quiz.classList.add("is-locked");
}

function offerRetry(correctCount) {
  const triesLeft = maxAttempts - usedAttempts;
  showFeedback(
    `${correctCount} of ${totalQuestions} correct. Not all answers are right yet. ` +
      `Tries left: ${triesLeft}.`,
    "error"
  );
  showResultAnimation("wrong");

  // Turn the submit button into a retry control (handled by the flag).
  submitButton.textContent = "Try Again";
  submitButton.classList.remove("is-hidden");
  awaitingRetry = true;
}

function startRetry() {
  // Start a fresh run, keeping previous selections visible.
  awaitingRetry = false;
  currentIndex = 0;
  reviewPanel.classList.remove("is-visible");
  resultAnimation.classList.remove("is-visible", "is-correct", "is-wrong");
  renderQuestion();
}

function failQuiz(correctCount) {
  quizIsFinished = true;
  warningCard.classList.add("is-active");
  showFeedback(
    `${quiz.dataset.failMessage} (Final score: ${correctCount} of ${totalQuestions}.)`,
    "error"
  );
  showResultAnimation("wrong");
  submitButton.classList.add("is-hidden");
  if (backButton) backButton.disabled = true;
  quiz.classList.add("is-locked");
}

/* ---- Shared helpers ------------------------------------------------------- */
function showFeedback(message, type) {
  feedback.textContent = message;
  feedback.classList.remove("is-success", "is-error");
  if (type === "success") feedback.classList.add("is-success");
  else if (type === "error") feedback.classList.add("is-error");
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
  } else if (type === "wrong") {
    resultAnimation.classList.add("is-wrong");
    resultTitle.textContent = resultAnimation.dataset.wrongTitle;
    resultText.textContent = resultAnimation.dataset.wrongText;
  }
}
