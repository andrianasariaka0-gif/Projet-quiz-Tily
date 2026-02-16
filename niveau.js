const data = [
  {
    question: "Iza no nampiditra ny SKOTO teto Madagasikara?",
    answers: [
      { text: "Chef Randria", correct: false },
      { text: "Baden Powell", correct: false },
      { text: "Jean Beguebeider", correct: true },
      { text: "Chef burtthon", correct: false },
    ],
  },
  {
    question: "Iza amin'ireto no efa filoham-paritany FANALA",
    answers: [
      { text: "Mefo Miatrika", correct: true },
      { text: "Dredrika Maharitra ", correct: false },
      { text: "Vazika Matotra", correct: true },
      { text: "Tantana Mikolo", correct: false },
    ],
  },
  {
    question: "Taona firy no niforona ny sampana mena",
    answers: [
      { text: "1768", correct: false },
      { text: "1980", correct: false },
      { text: "1946", correct: false },
      { text: "1936", correct: true },
    ],
  },
  {
    question: "Miisa firy ny dinan'ny mpiandalana",
    answers: [
      { text: "10", correct: false },
      { text: "11", correct: false },
      { text: "3", correct: false },
      { text: "5", correct: true },
    ],
  },
  {
    question: "Firy ny isan'ireo nilasy voalohany tao brownsea",
    answers: [
      { text: "12", correct: true },
      { text: "15", correct: false },
      { text: "20", correct: false },
      { text: "28", correct: false },
    ],
  },

  {
    question: "Firy ny isan'ireo filoham-paritany nifandimby",
    answers: [
      { text: "5", correct: true },
      { text: "6 ", correct: false },
      { text: "4", correct: false },
      { text: "3", correct: false },
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
let elementQuestion = document.querySelector(".question");
let elementAnswerbouttons = document.querySelectorAll(
  ".answer-bouttons button"
);
let elementScore = document.querySelector("#score");
let elementTotal =document.querySelector("#total");

let questionIndex ="";
let scoreIndex = "";
let totalIndex ="";
let btnNext = document.querySelector("#next");

function startQuiz() {
  questionIndex = 0;
  scoreIndex = 0;
  totalIndex = scoreIndex;
  displayQuestion(questionIndex);
  displayScore(scoreIndex);
  displayTotal(totalIndex);
}
function displayTotal(){
  elementTotal.innerHTML =`TOTAL SCORE Niveau 2 = ${dtScore[totalIndex].score}`;
} 
function displayScore() {
  elementScore.innerHTML = `SCORE = ${dtScore[scoreIndex].score}`;
}
function displayQuestion() {
  elementQuestion.innerHTML = `${questionIndex + 1}.${
    data[questionIndex].question
  }`;
  elementAnswerbouttons.forEach((button, index) => {
    button.innerHTML = data[questionIndex].answers[index].text;
  });
}
elementAnswerbouttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    let selectedOption = event.target.innerHTML;
    let correctAnswer = "";
    let temp = data[questionIndex].answers;
    temp.forEach((answers) => {
      if (answers.correct) {
        correctAnswer = answers.text;
      }
    });
    setTimeout(() => {
      
    if (selectedOption == correctAnswer) {
      event.target.style.backgroundColor = "green";
      btnNext.style.display = "block";
      scoreIndex++;
      totalIndex++;
      displayTotal(totalIndex);
      displayScore(scoreIndex);
    } else {
      (event.target.style.backgroundColor = "red"),
        (event.target.style.color = "white");
      btnNext.style.display = "block";
    } },2000 );
    let fin = 0
    btnNext.addEventListener( "click", () => {
      questionIndex++;
      fin++;
      if (fin == 3){
        elementTotal.style.display = "grid";
      }
      displayQuestion(questionIndex);
      btnNext.style.display = "none";
      reset();
    });
    function reset() {
      elementAnswerbouttons.forEach((button) => {
        button.style.backgroundColor = " rgb(213, 207, 207)";
        button.style.color = "black";
      });
    }
  });
});
startQuiz();
