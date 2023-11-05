const quizData = [
    {
        question: 'What is the capital of France?',
        answers: [
            'Paris',
            'Berlin',
            'Madrid',
            'Rome'
        ],
        correctAnswer: 'Paris'
    },
    {
        question: 'Which planet is known as the Red Planet?',
        answers: [
            'Earth',
            'Mars',
            'Venus',
            'Jupiter'
        ],
        correctAnswer: 'Mars'
    },
    {
        question: 'Which programming language is known for its use in web development?',
        answers: ['Java', 'Python', 'C++', 'JavaScript'],
        correctAnswer: 'JavaScript'
    },
    {
        question: 'Who wrote "Romeo and Juliet"?',
        answers: ['Charles Dickens', 'William Shakespeare', 'Jane Austen', 'Mark Twain'],
        correctAnswer: 'William Shakespeare'
    },
  
];

const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const scoreDisplay = document.getElementById('score-display');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    score = 0;
    showQuestion(currentQuestionIndex);
}

function showQuestion(index) {
    const currentQuestion = quizData[index];
    questionElement.innerText = currentQuestion.question;

    clearAnswerButtons();

    currentQuestion.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.innerText = answer;
        button.classList.add('btn');
        button.addEventListener('click', () => checkAnswer(answer));
        answerButtons.appendChild(button);
    });
}

function clearAnswerButtons() {
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function checkAnswer(selectedAnswer) {
    const currentQuestion = quizData[currentQuestionIndex];

    if (selectedAnswer === currentQuestion.correctAnswer) {
        score++;
        console.log('Correct!');
    } else {
        console.log('Wrong!');
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < quizData.length) {
        showQuestion(currentQuestionIndex);
    } else {
        showFinalScore();
    }
}

function showFinalScore() {
    questionElement.innerText = 'Quiz Completed!';
    clearAnswerButtons();
    nextButton.style.display = 'none';
    scoreDisplay.innerText = `Your Final Score: ${score} out of ${quizData.length}`;
    scoreDisplay.style.display = 'block';
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        showQuestion(currentQuestionIndex);
    } else {
        showFinalScore();
    }
});

document.addEventListener('DOMContentLoaded', startQuiz);
