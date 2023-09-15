// Questions that will be asked
const Questions = [{
    q: "What Article ensures the right of education?",
    a: [{ text: "24 A", isCorrect: false },
    { text: "39 A", isCorrect: false },
    { text: "21 A", isCorrect: true },
    { text: "15 A", isCorrect: false }
    ]
 
},
{
    q: "In which of the following areas is child labour found in abundance",
    a: [{ text: "Randi Bazar", isCorrect: false, isSelected: false },
    { text: "Fr.CRCE", isCorrect: false },
    { text: "SSR's Home", isCorrect: false },
    { text: "All of the above", isCorrect: true }
    ]
 
},
{
    q: "Under the child labour act getting children below the age of how many years to work will be considered a cognizable offense",
    a: [{ text: "12", isCorrect: false },
    { text: "0", isCorrect: false },
    { text: "14", isCorrect: true },
    { text: "100", isCorrect: false }
    ]
 
}
 
]
 
let currQuestion = 0
let score = 0
 
function loadQues() {
    const question = document.getElementById("ques")
    const opt = document.getElementById("opt")
 
    question.textContent = Questions[currQuestion].q;
    opt.innerHTML = ""
 
    for (let i = 0; i < Questions[currQuestion].a.length; i++) {
        const choicesdiv = document.createElement("div");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");
 
        choice.type = "radio";
        choice.name = "answer";
        choice.value = i;
 
        choiceLabel.textContent = Questions[currQuestion].a[i].text;
 
        choicesdiv.appendChild(choice);
        choicesdiv.appendChild(choiceLabel);
        opt.appendChild(choicesdiv);
    }
}
 
loadQues();
 
function loadScore() {
    const totalScore = document.getElementById("score")
    totalScore.textContent = `You scored ${score} out of ${Questions.length}`
}
 
 
function nextQuestion() {
    if (currQuestion < Questions.length - 1) {
        currQuestion++;
        loadQues();
    } else {
        document.getElementById("opt").remove()
        document.getElementById("ques").remove()
        document.getElementById("btn").remove()
        loadScore();
    }
}
 
function checkAns() {
    const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);
 
    if (Questions[currQuestion].a[selectedAns].isCorrect) {
        score++;
        console.log("Correct")
        nextQuestion();
    } else {
        nextQuestion();
    }
}