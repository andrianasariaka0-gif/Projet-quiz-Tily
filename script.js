const data = [
  {
    question: " Iza no namorona ny Skotisma ?",
    answers: [
      { text: "Robert Stephenson Smith Powell", correct: false },
      { text: "Robert Smith Stephenson Baden Powell ", correct: true },
      { text: "Donald Trump", correct: false },
      { text: "Emanuel Macron", correct: false },
    ],
  },

  {
    question:
      "Aiza ao amin'ny baiboly no ahitana ny teny filamatry ny faha 90taona sampana mena?",
    answers: [
      { text: "Matio 5 :16 ", correct: true },
      { text: "Matio 3 :16 ", correct: false },
      { text: "Marka  12:16 ", correct: false },
      { text: "Jaona 3 :16 ", correct: false },
    ],
  },

  {
    question: "Miisa firy ny ambaratonga Sampana Mena?",
    answers: [
      { text: 2, correct: false },
      { text: 13, correct: false },
      { text: 3, correct: true },
      { text: 5, correct: false },
    ],
  },

  {
    question: "  code fitaratra: o eio ao 'ak ri ba ita p tlm za yoa io tr    ",
    answers: [
      { text: "Misaotra an'ise", correct: true },
      { text: "Ao ny tohin'izao", correct: false },
      { text: "Tanana avia an'ise", correct: false },
      { text: "Arahaba ho an'ise", correct: false },
    ],
  },
  {
    question: "Ovina ny sampana mena tily no niforona ?",
    answers: [
      { text: 1957, correct: false },
      { text: 1846, correct: false },
      { text: 1736, correct: false },
      { text: 1936, correct: true },
    ],
  },
];
const dtScore = [
  {
    score: "0",
  },
  {
    score: "1",
  },
  {
    score: "2",
  },
  {
    score: "3",
  },
  {
    score: "4",
  },
  {
    score: "5",
  },
];

// declaration constante
let elementQuestion = document.querySelector("#question");
let elementAnswerbouttons = document.querySelectorAll(
  ".answer-bouttons button"
);
let elementScore = document.querySelector("#score");
let elementTotal =document.querySelector("#total");

let questionIndex = "";
let btnNext = document.querySelector(".next");
let btnNiveau = document.querySelector(".niveau");
let scoreIndex = "";
let totalIndex = "";
// function start
function startQuiz() {
  questionIndex = 0;
  scoreIndex = 0;
  totalIndex = scoreIndex;
  displayQuestion(questionIndex);
  displayScore(scoreIndex);
  displayTotal (totalIndex);
}
function displayTotal(){
  elementTotal.innerHTML = `TOTAL SCORE Niveau 1 = ${dtScore[totalIndex].score}`
}
function displayScore() {
  elementScore.innerHTML = `SCORE  = ${dtScore[scoreIndex].score}`;
}
// function displayQuestion
function displayQuestion() {
  // question
  elementQuestion.innerHTML = `${questionIndex + 1}.${
    data[questionIndex].question
  }`;
  // boutton maka question sy answers
  elementAnswerbouttons.forEach((button, index) => {
    button.innerHTML = data[questionIndex].answers[index].text;
  });
}
// ra marina ny click de ;..
elementAnswerbouttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    // event.target.innerHTML rehefa text html
    let selectedOption = event.target.innerHTML;
    let correctAnswer = "";
    // temp ilay function miverifier oe marina sa diso
    let temp = data[questionIndex].answers;
    temp.forEach((answers) => {
      if (answers.correct) {
        // tsy maintsy " = "
        correctAnswer = answers.text;
      }
    });
    // mety fona na "== " na "==="
    // let vie = 1;
     setTimeout(()=> {

    if (selectedOption == correctAnswer) {
      event.target.style.backgroundColor = "green";
      btnNext.style.display = "block";
      scoreIndex++;
      totalIndex++;
      displayScore(scoreIndex);
      displayTotal(totalIndex)
    } else {
      event.target.style.backgroundColor = "red";
      event.target.style.color = "white";
      btnNext.style.display = "block";
      // vie--;
      // if (vie == 0) {
      //   button.style.backgroundColor = "red";
      //   button.style.color = "transparent";
      //   alert("Pas de vie recommencez");
      // }
    } },2000)
    //  console.log(`selectedoption=${selectedOption} and correctanswer =${correctAnswer}`);
    let niv = 0;
    btnNext.addEventListener("click", () => {
      questionIndex++;
      displayQuestion(questionIndex);
      btnNext.style.display = "none";
      niv++;
      if (niv == 3) {
        btnNiveau.style.display = " block";
        elementTotal.style.display ="grid"
        displayTotal(totalIndex);
      }
      reset();
    });
    // mamerina am laoniny
    function reset() {
      elementAnswerbouttons.forEach((button) => {
        button.style.backgroundColor = "rgb(208, 201, 201)";
        button.style.color = "black";
      });
    }
  });

});

startQuiz();
