const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

// what we want to do when we click the start button
function startGame() {
    startButton.classList.add('hide') // adds class of hide to start button
    shuffledQuestions = questions.sort(() => Math.random() - .5) //shuffes the questions so they dont appear in the same order
    currentQuestionIndex = 0 // is set to 0 because we want to start on the very first question
    questionContainerElement.classList.remove('hide') // hides the start button and the question with choices appear

    setNextQuestion()
}
//sets the next question, when we click on the next button

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        //conditon to check if the answer is right
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}
//selects the answer
function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}




const questions = [{
        question: 'What is the smallest countries?',
        answers: [{
                text: 'Vatican City',
                correct: true
            },
            {
                text: 'Monaco',
                correct: false
            },
            {
                text: 'Nauru',
                correct: false
            },
            {
                text: 'Tuvalu',
                correct: false
            }
        ]
    },
    {
        question: 'How many sides for a dodecahedron?',
        answers: [{
                text: '400',
                correct: false
            },
            {
                text: '6',
                correct: false
            },
            {
                text: '12',
                correct: true
            },
            {
                text: '1',
                correct: false
            }
        ]
    },
    {
        question: "Which chess piece can't move in a straight line?",
        answers: [{
                text: 'King',
                correct: false
            },
            {
                text: 'Bishop',
                correct: false
            },
            {
                text: 'Rook',
                correct: false
            },
            {
                text: 'Knight',
                correct: true
            }
        ]
    },
    {
        question: 'Fast food company that made chicken flavored nail polish?',
        answers: [{
                text: 'Chick-fil-a',
                correct: false
            },
            {
                text: 'KFC',
                correct: true
            },
            {
                text: 'Popeyes',
                correct: false
            },
            {
                text: 'Bojangles',
                correct: false
            }
        ]
    },
    {
        question: 'Charlie bit what?',
        answers: [{
                text: 'Finger',
                correct: true
            },
            {
                text: 'Neck',
                correct: false
            },
            {
                text: 'Kidney',
                correct: false
            },
            {
                text: 'Dog',
                correct: false
            }
        ]
    },
    {
        question: "Forward I am heavy, backward I am not, what am I?",
        answers: [{
                text: 'Ton',
                correct: true
            },
            {
                text: 'Pound',
                correct: false
            },
            {
                text: 'Ounce',
                correct: false
            },
            {
                text: 'Gram',
                correct: false
            }
        ]
    },
    {
        question: 'What is full of holes but still holds water?',
        answers: [{
                text: 'Brick',
                correct: false
            },
            {
                text: 'Cheese',
                correct: false
            },
            {
                text: 'Sponge',
                correct: true
            },
            {
                text: 'Button',
                correct: false
            }
        ]
    },
    {
        question: 'What Building has the most stories?',
        answers: [{
                text: 'Burj Khalifa',
                correct: false
            },
            {
                text: 'Library',
                correct: true
            },
            {
                text: 'Shanghai Tower',
                correct: false
            },
            {
                text: 'Empire State Building',
                correct: false
            }
        ]
    },
    {
        question: 'What is 2 + 2 * 1240 / 2?',
        answers: [{
                text: '1242',
                correct: true
            },
            {
                text: '1',
                correct: false
            },
            {
                text: '650',
                correct: false
            },
            {
                text: '140',
                correct: false
            }
        ]
    },
    {
        question: 'What is something you hit with a hammer?',
        answers: [{
                text: 'People',
                correct: false
            },
            {
                text: 'Aliens',
                correct: false
            },
            {
                text: 'Pets',
                correct: false
            },
            {
                text: 'Nail',
                correct: true
            }
        ]
    }
]