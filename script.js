const questions = [
    {
        question: "1. Which language is used for web development?",
        answers: [
            { text: "HTML", correct: true },
            { text: "Python", correct: false },
            { text: "Java", correct: false },
            { text: "C++", correct: false }
        ]
    },
    {
        question: "2. What does CSS stand for?",
        answers: [
            { text: "Computer Style Sheet", correct: false },
            { text: "Cascading Style Sheets", correct: true },
            { text: "Creative Style System", correct: false },
            { text: "Colorful Style Sheet", correct: false }
        ]
    },
    {
        question: "3. Which language adds interactivity to websites?",
        answers: [
            { text: "HTML", correct: false },
            { text: "CSS", correct: false },
            { text: "JavaScript", correct: true },
            { text: "SQL", correct: false }
        ]
    },
    {
        question: "4. Which company developed Java?",
        answers: [
            { text: "Microsoft", correct: false },
            { text: "Google", correct: false },
            { text: "Sun Microsystems", correct: true },
            { text: "Apple", correct: false }
        ]
    },
    {
        question: "5. Which symbol is used for comments in JavaScript?",
        answers: [
            { text: "//", correct: true },
            { text: "##", correct: false },
            { text: "<!-- -->", correct: false },
            { text: "**", correct: false }
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const quizElement = document.getElementById("quiz");
const resultElement = document.getElementById("result");
const scoreElement = document.getElementById("score");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    quizElement.classList.remove("hide");
    resultElement.classList.add("hide");
    showQuestion();
}

function showQuestion() {
    resetState();

    let currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.textContent = answer.text;
        button.classList.add("answer-btn");

        button.addEventListener("click", () => selectAnswer(button, answer.correct));

        answerButtons.appendChild(button);
    });
}

function resetState() {
    nextButton.style.display = "none";
    answerButtons.innerHTML = "";
}

function selectAnswer(selectedButton, isCorrect) {
    const buttons = answerButtons.querySelectorAll("button");

    buttons.forEach(button => {
        button.disabled = true;
    });

    if (isCorrect) {
        selectedButton.classList.add("correct");
        score++;
    } else {
        selectedButton.classList.add("incorrect");

        const currentQuestion = questions[currentQuestionIndex];

        buttons.forEach((button, index) => {
            if (currentQuestion.answers[index].correct) {
                button.classList.add("correct");
            }
        });
    }

    nextButton.style.display = "inline-block";
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        show