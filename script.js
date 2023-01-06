const quizData = [
  {
    question: "Cumhuriyetin kuruluş tarihi nedir?",
    a: "9 Eylül 1922",
    b: "19 Mayıs 1919",
    c: "23 Nisan 1920",
    d: "29 Ekim 1923",
    correct: "d",
  },
  {
    question: "2022 yılında Avrupa'da en yaygın kullanılan programlama dili nedir?",
    a: "Java",
    b: "C#",
    c: "Phyton",
    d: "Javascript",
    correct: "c",
  },
  {
    question: "Amerika kaç eyaletten oluşur?",
    a: "50",
    b: "51",
    c: "54",
    d: "55",
    correct: "a",
  },
  {
    question: "HTML açılımı nedir?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Json Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },  
];

const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;

  answerElements.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

function deselectAnswers() {
  answerElements.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  // check to see the answer
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      // TODO: Show results
      quiz.innerHTML = `<h2>Doğru cevapladığınız soruların oranı ${score}/${quizData.length}.</h2>`;
    }
  }
});
