const quizData = [
    {
        question: "Q1: Which of these isn't allowed to travel in the right-hand lane of a three-lane motorway?",
        a: "A small delivery van",
        b: "A motercycle",
        c: "A motorcycle and sidecar",
        d: "A vehicle towing a trailer",
        correct: "d",
    },
    {
        question: "Q2: When may you stop on a motorway?",
        a: "When you're tired and need a rest",
        b: "If you have to read a map",
        c: "If your mobile phone rings",
        d: "n an emergency or breakdown",
        correct: "d",
    },
    {
        question: "Q3: What's used to reduce traffic bunching on a motorway?",
        a: "Contraflow systems",
        b: "National speed limits",
        c: "Variable speed limits",
        d: "Lane closures",
        correct: "b",
    },
    {
        question: "Q4: You're using a smart motorway. What happens when it's operating?",
        a: "Speed limits above lanes are advisory",
        b: "You must obey the speed limits shown",
        c: "The speed limit is always 30 mph",
        d: "The national speed limit will apply",
        correct: "b",
    },


];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>

           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})