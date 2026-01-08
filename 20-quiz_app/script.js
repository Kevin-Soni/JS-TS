const questions = [
    {
    question: "which is largest animal in the world?",
    answers: [
        { text: "shark", correct: false},
        { text: "Blue whale", correct: true},
        { text: "Elephant", correct: false},
        { text: "Girafe", correct: false}
    ]
},
{
    question: "which is the smallest country in the world?",
    answers: [
        {text: "vatican city", correct: true},
        {text: "bhutan", correct: false},
        {text: "nepal", correct: false},
        {text: "srilanka", correct: false},
    ]
},
{
    question: "which is the largest desert in the world?",
    answers: [
        {text: "kalahari", correct: false},
        {text: "gobi", correct: false},
        {text: "sahara", correct: false},
        {text: "antarctica", correct: true}
    ]
},
{
    question: "which is the smallest continent in the world?",
    answers: [
        {text: "Asia", correct: false},
        {text: "Australia", correct: true},
        {text: "Arctic", correct: false},
        {text: "Africa", correct: false},
    ]
}
];

const questionElement = document.getElementById("question");
const answerbuttons = document.getElementById("answer-buttons");
const nextbutton = document.getElementById("next-btn");

let index = 0;
let score = 0;

function startquiz () {
    index = 0;
    score = 0;
    nextbutton.innerHTML = "next";
    showQuestions();
}

function showQuestions() {
    resetstate();
    let q = questions[index];
    questionElement.innerHTML = `${index + 1}. ${q.question}`;

    q.answers.forEach(ans => {
        let btn = document.createElement("button");
        btn.innerHTML = ans.text;
        btn.classList.add("btn");

        if (ans.correct) {
            btn.dataset.correct = "true";
        }

        btn.onclick = selectanswer;
        answerbuttons.appendChild(btn);
    });
}
function resetstate() {
    nextbutton.style.display = "none";
    answerbuttons.innerHTML = "";
}

function selectanswer(e) {
    let selected = e.target;
    let correct = selected.dataset.correct === "true";

    if (correct) {
        selected.classList.add("correct");
        score++;
    } else {
        selected.classList.add("incorrect");
    }
    
    Array.from(answerbuttons.children).forEach(btn => {
        if(btn.dataset.correct === "true") {
            btn.classList.add("correct");
        }
        btn.disabled = true;
    });
    nextbutton.style.display = "block";
}

nextbutton.onclick = () => {
    index++;
    if (index < questions.length) {
        showQuestions();
    } else {
        showscore();
    }
};

function showscore() {
    resetstate();
    questionElement.innerHTML = `you scored ${score} out of ${questions.length}`;
    nextbutton.innerHTML = "play again";
    nextbutton.style.display = "block";
    nextbutton.onclick = startquiz;
}
startquiz();