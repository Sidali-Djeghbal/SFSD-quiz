let currentQuestionIndex = 0;
let score = 0;
let selectedChapterQuestions = [];

const introScreen = document.getElementById('intro-screen');
const chapterScreen = document.getElementById('chapter-screen');
const quizScreen = document.getElementById('quiz-screen');
const startButton = document.getElementById('start-button');
const chapterButtons = document.querySelectorAll('.chapter-button');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const nextButton = document.getElementById('next-button');

// Show introduction screen initially
introScreen.classList.remove('hidden');
chapterScreen.classList.add('hidden');
quizScreen.classList.add('hidden');

// Event listener for the "Start" button
startButton.addEventListener('click', () => {
    introScreen.classList.add('hidden');
    chapterScreen.classList.remove('hidden');
});

// Function to shuffle an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Event listeners for chapter buttons
chapterButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const chapterId = event.target.id;
        switch (chapterId) {
            case 'chapter1':
                selectedChapterQuestions = shuffle(questions1);
                break;
            case 'chapter2':
                selectedChapterQuestions = shuffle(questions2);
                break;
            case 'chapter3':
                selectedChapterQuestions = shuffle(questions3);
                break;
            case 'chapter4':
                selectedChapterQuestions = shuffle(questions4);
                break;
        }
        chapterScreen.classList.add('hidden');
        quizScreen.classList.remove('hidden');
        showQuestion(selectedChapterQuestions[currentQuestionIndex]);
    });
});

function showQuestion(question) {
    questionElement.innerText = question.question;
    optionsElement.innerHTML = '';
    question.options.forEach(option => {
        const button = document.createElement('div');
        button.innerText = option;
        button.classList.add('option');
        button.addEventListener('click', () => selectAnswer(option, question.answer));
        optionsElement.appendChild(button);
    });
}

function selectAnswer(selectedOption, correctAnswer) {
    const options = optionsElement.querySelectorAll('.option');
    options.forEach(option => {
        option.classList.add('disabled'); // Disable all options
        if (option.innerText === correctAnswer) {
            option.classList.add('correct'); // Highlight correct answer
        } else if (option.innerText === selectedOption) {
            option.classList.add('incorrect'); // Highlight incorrect answer
        }
    });

    if (selectedOption === correctAnswer) {
        score++;
    }

    nextButton.style.display = 'block';
}

function showNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < selectedChapterQuestions.length) {
        showQuestion(selectedChapterQuestions[currentQuestionIndex]);
        nextButton.style.display = 'none';
    } else {
        alert(`Quiz finished! Your score is ${score}/${selectedChapterQuestions.length}`);
        currentQuestionIndex = 0;
        score = 0;
        quizScreen.classList.add('hidden');
        introScreen.classList.remove('hidden');
    }
}

nextButton.addEventListener('click', showNextQuestion);