// disable context menu
document.addEventListener("contextmenu", (event) => {
  event.preventDefault();
});

const questions = [
  {
    question: "What is the purpose of the CSS property  z-index  ?",
    /*1*/ answers: [
      { text: "Sets the transparency of an element", correct: false },
      {
        text: " Defines the stacking order of positioned elements",
        correct: true,
      },
      { text: "Adjusts the width of an element", correct: false },
      { text: "None of the above", correct: false },
    ],
  },
  {
    question: "What does the CSS property position: absolute; do?",
    /*2*/ answers: [
      {
        text: " Positions the element relative to its normal position",
        correct: false,
      },
      { text: "Makes the element fixed in the viewport", correct: false },
      { text: "Removes the element from the document flow", correct: true },
      { text: "None of the above", correct: false },
    ],
  },
  {
    question:
      "How do you select all elements with the class 'example' using JavaScript?",
    /*3*/ answers: [
      { text: "document.querySelector('.example');", correct: false },
      { text: "document.select('.example');", correct: false },
      { text: "document.getElementsByClass('example');", correct: false },
      { text: "document.querySelectorAll('.example');", correct: true },
    ],
  },
  {
    question: "What is the purpose of the JavaScript 'forEach()' function?",
    /*4*/ answers: [
      { text: "Iterates over the elements of an array", correct: true },
      { text: "Adds elements to an array", correct: false },
      { text: "Removes elements from an array", correct: false },
      { text: "Sorts the elements of an array", correct: false },
    ],
  },
  {
    question: `Which HTML tag is used to create an unordered list?`,
    /*5*/ answers: [
      {
        text: `ul`,
        correct: true,
      },
      {
        text: `ol`,
        correct: false,
      },
      {
        text: `li`,
        correct: false,
      },
      {
        text: `list`,
        correct: false,
      },
    ],
  },
  {
    question: "How do you add a class to an element using JavaScript?",
    /*6*/ answers: [
      { text: "element.class = 'newClass';", correct: false },
      { text: "element.add('newClass');", correct: false },
      { text: "element.addClass('newClass');", correct: false },
      { text: "element.classList.add('newClass');", correct: true },
    ],
  },
  {
    question: "How can you include an external CSS file in an HTML document?",
    /*7*/ answers: [
      {
        text: `&lt; link rel="stylesheet" href="styles.css" &gt;`,
        correct: true,
      },
      {
        text: `&lt; style src="styles.css" &gt; &lt; /style &gt;`,
        correct: false,
      },
      { text: `&lt; css href="styles.css" &gt;`, correct: false },
      { text: `&lt; include src="styles.css" &gt;`, correct: false },
    ],
  },
  {
    question: "How do you target the first child element of a parent in CSS?",
    /*8*/ answers: [
      { text: ":first", correct: false },
      { text: ":first-child", correct: true },
      { text: "first-child()", correct: false },
      { text: "nth-child()", correct: false },
    ],
  },
  {
    question: "How can you prevent a form from submitting in JavaScript?",
    /*9*/ answers: [
      { text: "event.preventSubmit();", correct: false },
      { text: "event.stopPropagation();", correct: false },
      { text: "event.preventDefault();", correct: true },
      { text: "form.cancelSubmit();", correct: false },
    ],
  },
  {
    question:
      "What is the purpose of the CSS property box-sizing: border-box;?",
    /*10*/ answers: [
      {
        text: "Includes padding and border in the element's total width and height",
        correct: true,
      },
      { text: "Adds margin to the element", correct: false },
      { text: "Ignores padding and border in calculations", correct: false },
      { text: " None of the above", correct: false },
    ],
  },
  {
    question:
      "Which CSS property is used to control the space between the content and border of an element?",
    /*11*/ answers: [
      {
        text: "margin",
        correct: false,
      },
      { text: "padding", correct: true },
      { text: "border-spacing", correct: false },
      { text: " spacing", correct: false },
    ],
  },
  {
    question:
      "What is the purpose of the JavaScript function addEventListener?",
    /*12*/ answers: [
      {
        text: "To create a new HTML element",
        correct: false,
      },
      { text: "To attach an event handler to an HTML element", correct: true },
      { text: "To modify the CSS style of an element", correct: false },
      { text: "To define a variable in JavaScript", correct: false },
    ],
  },
  {
    question:
      "Which of the following is NOT a valid way to declare a variable in JavaScript?",
    /*13*/ answers: [
      {
        text: "var myVar = 10;",
        correct: false,
      },
      { text: " let myVar = 10;", correct: false },
      { text: "const myVar = 10;", correct: false },
      { text: "myVar = 10;", correct: true },
    ],
  },
  {
    question:
      "What is the purpose of the &lt; meta &gt; tag in HTML?",
    /*14*/ answers: [
      {
        text: "To define a new paragraph in the text",
        correct: false,
      },
      { text: " To create a hyperlink", correct: false },
      { text: "To provide metadata about the HTML document", correct: true},
      { text: "To embed multimedia content", correct: false },
    ],
  },
  {
    question:
      "Which of the following is a valid way to include an external JavaScript file in an HTML document?",
    /*15*/ answers: [
      {
        text: ' &lt; script src="script.js" &gt; &lt; /script &gt;',
        correct: true
      },
      { text: '&lt; js include="script.js" &gt; &lt; /js &gt;', correct: false },
      { text: '&lt; javascript href="script.js" &gt; &lt; /javascript &gt;', correct: false},
      { text: '&lt; link rel="script" href="script.js" &gt;', correct: false },
    ],
  },
  {
    question:
      `What will be the output of this code?
      <pre>
      <code>
      let fruits = ['orange', 'mango', 'pawpaw', 'banana']
      console.log(fruits[1]);
      </code>
      </pre>
      
      
      `,
    /*16*/ answers: [
      {
        text: ' orange',
        correct: false
      },
      { text: 'mango', correct: true },
      { text: 'pawpaw', correct: false},
      { text: 'banana', correct: false },
    ],
  },
  {
    question:
      "Which ECMAScript 6 (ES6) feature allows for declaring variables that are block-scoped and cannot be reassigned?",
    /*17*/ answers: [
      {
        text: ' let',
        correct: false
      },
      { text: 'const', correct: true },
      { text: 'var', correct: false},
      { text: 'static', correct: false },
    ],
  },
  {
    question:
      "Which HTML attribute is used to provide alternative text for an image?",
    /*18*/ answers: [
      {
        text: ' alt',
        correct: true
      },
      { text: 'title', correct: false },
      { text: 'description', correct: false},
      { text: 'img-alt', correct: false },
    ],
  },
  {
    question:
      "What is the purpose of the CSS opacity property?",
    /*19*/ answers: [
      {
        text: 'To control the transparency of an element',
        correct: true
      },
      { text: 'To set the font size of an element', correct: false },
      { text: 'To define the color of an element', correct: false},
      { text: 'To specify the space between lines of text', correct: false },
    ],
  },
  {
    question:
      "Which HTML5 element is used to define the structure of a table?",
    /*20*/ answers: [
      {
        text: '&lt; table &gt;',
        correct: true
      },
      { text: '&lt; grid &gt;', correct: false },
      { text: '&lt; tabular &gt;', correct: false},
      { text: '&lt; data &gt;', correct: false },
    ],
  },

];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");
const login = document.getElementById("login");
const studID = document.getElementById("examID");
const app = document.querySelector(".app");
const loader = document.getElementById("loader");
const login_div = document.getElementById("login-div");
const msg = document.getElementById("msg");
const std_name = document.getElementById("std-name");
const timer = document.getElementById("count");
const logout = document.getElementById('logout-btn')

const students = {
  std001: "Stephen Usen",
  std002: "Joseph Ekpang",
  std003: "Obi Hyacinth Ekunke",
  std004: "Ofaobasi Patrick",
  std005: "Joseph Suberu Adeiza",
  std006: "Obodo Divine Collins",
  std007: "Peter Arikpo Peter",
  std008: "Edidiong Ibanga",
  std009: "John O. Bassey",
  std010: "Imadu Lawrence",
  std011: "Isaac Stephen",
  std012: "Godwin Zion",
  std013: "Tivadar Rijami Ekpo",
  std014: "Ugochukwu Clement",
  std015: "Olisa Mazeli",
  std016: "Inah Richard",
  std017: "Patrick Yvonne",
  std018: "Ikwa Evalsam",
  std019: "Cobham Ene",
  std020: "Courage Agwo",
  std021: "John Inok",
  admin: "Admin"
};

//Login Authentication
const verifyStudent = () => {
  login.addEventListener("click", () => {
    if (students.hasOwnProperty(studID.value)) {
      loader.style.display = "block";
      login_div.style.display = "none";

      setTimeout(() => {
        loader.style.display = 'none';
        startQuiz();
      }, 5000);
    } else if (studID.value == "") {
      msg.style.display = "block";
      msg.innerHTML = "Please enter your ID";
    } else {
      msg.style.display = "block";
      msg.innerHTML = "Your record is not found";
    }
  });
};

window.addEventListener("DOMContentLoaded", () => {
  app.style.display = "none";
  verifyStudent();
});

// variables for score and index
let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  time_count(600);
  app.style.display = "block";
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  std_name.innerHTML =
    `<img src="./user.svg" alt="">` + " " + students[studID.value];
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  //   nextButton.style.display = "none";
  logout.style.display = "none";

  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);

  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.style.backgroundColor = 'black';
    selectedBtn.style.color = 'white';

    // selectedBtn.classList.add("correct");
    // document.body.style.backgroundColor = "green";
    score++;
  } else {
    selectedBtn.style.backgroundColor = 'black';
    selectedBtn.style.color = 'white';
    // selectedBtn.classList.add("incorrect");
    // document.body.style.backgroundColor = "red";
  }

  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      // button.classList.add("correct");
    }
    button.disabled = true;
  });

  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showscore();
  }
}

function showscore() {
  resetState();
  questionElement.innerHTML = `You have Scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Restart";
  logout.style.display = "block";
  logout.addEventListener('click', () => {
    window.location = 'quiz main.html';
  })
}

nextButton.addEventListener("click", function () {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

//Time Counter
let time_count = (count) => {
  // let count = 15;
  let interval = setInterval(() => {
    timer.innerHTML = "Timer: " + " " + Math.floor(count/60) + " " + " mins left";
    count--;
    if (count === 0) {
      clearInterval(interval);
      timer.innerHTML = "Time is up!";
    }
  }, 1000);
};
