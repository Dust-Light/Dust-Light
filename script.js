const questions = [
    {
        question: "What is artificial intelligence?",
        answers: [
            { text: "A type of computer virus", correct: false },
            { text: "Machines that can perform tasks that typically require human intelligence", correct: true },
            { text: "A new programming language", correct: false }
        ]
    },
    {
        question: "Which AI defeated a world champion in the game of Go?",
        answers: [
            { text: "Watson", correct: false },
            { text: "AlphaGo", correct: true },
            { text: "Siri", correct: false }
        ]
    },
    {
        question: "What is a potential ethical concern regarding AI in hiring?",
        answers: [
            { text: "Increased efficiency", correct: false },
            { text: "Bias in algorithms", correct: true },
            { text: "Cost reduction", correct: false }
        ]
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-button');
const scoreContainer = document.getElementById('score-container');
const scoreElement = document.getElementById('score');
const restartButton = document.getElementById('restart-button');

function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.style.display = 'none';
    scoreContainer.style.display = 'none';
    questionContainer.style.display = 'block';
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    answerButtons.innerHTML = '';
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer));
        answerButtons.appendChild(button);
    });
}

function selectAnswer(answer) {
    if (answer.correct) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        nextButton.style.display = 'block';
    } else {
        questionContainer.style.display = 'none';
        scoreContainer.style.display = 'block';
        scoreElement.innerText = score;
    }
}

nextButton.addEventListener('click', () => {
    showQuestion(questions[currentQuestionIndex]);
    nextButton.style.display = 'none';
});

restartButton.addEventListener('click', startGame);

startGame(); 