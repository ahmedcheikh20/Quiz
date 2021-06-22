const startButton = $('#start-btn')
const choice1 = $('#1')
const choice2 = $('#2')
const choice3 = $('#3')
const choice4 = $('#4')
const next = $('#Next')
const result = $('#result')
const resett = $('#reset')
var correct
var score = 0
var answer = 0

startButton.click(startGame)
choice1.click(A1)
choice2.click(A2)
choice3.click(A3)
choice4.click(A4)
next.click(nextQuiz)
result.click(resulta)
resett.click(reset)




function startGame(){
	$("#start-btn").addClass("hide")
	$("div").removeClass("hide")
	setNextQuestion(array)
 }


function setNextQuestion(array){
	var questionindex = Math.floor(Math.random() * array.length)
     $('#question').text(array[questionindex]['question'])
     $('#1').text(array[questionindex]['choices'][0])
     $('#2').text(array[questionindex]['choices'][1])
     $('#3').text(array[questionindex]['choices'][2])
     $('#4').text(array[questionindex]['choices'][3])
     correct = array[questionindex]['correctAnswer']
     array.splice(array[questionindex],1)  
     console.log('#reset') 
}

function A1(){
      $("#2").removeClass("btn");
      $("#3").removeClass("btn");
      $("#4").removeClass("btn");
      $("#2").addClass("hide");
      $("#3").addClass("hide");
      $("#4").addClass("hide");
      answer ++
      if(correct === 0){
        score++
      }
}
function A2(){
      $("#1").removeClass("btn");
      $("#3").removeClass("btn");
      $("#4").removeClass("btn");
      $("#1").addClass("hide");
      $("#3").addClass("hide");
      $("#4").addClass("hide");
      answer ++
      if(correct === 1){
        score++
      }
}
function A3(){
      $("#2").removeClass("btn");
      $("#1").removeClass("btn");
      $("#4").removeClass("btn");
      $("#2").addClass("hide");
      $("#1").addClass("hide");
      $("#4").addClass("hide");
      answer ++
      if(correct === 2){
        score++
      }
}
function A4(){
      $("#2").removeClass("btn");
      $("#3").removeClass("btn");
      $("#1").removeClass("btn");
      $("#2").addClass("hide");
      $("#3").addClass("hide");
      $("#1").addClass("hide");
      answer ++
      if(correct === 3){
        score++
      }
}

function nextQuiz(){

	setNextQuestion(array)
	$("#1").removeClass("hide");
	$("#2").removeClass("hide");
    $("#3").removeClass("hide");
    $("#4").removeClass("hide")
    $("#1").addClass("btn");
    $("#2").addClass("btn");
    $("#3").addClass("btn");
    $("#4").addClass("btn");
    if(answer === 9){
    	 $("#result").removeClass("hide")
    }
}


function resulta(){
    $("#reset").removeClass("hide")
    $('#question-container').addClass('hide')
    $('#question-container').addClass('hide')
    $('#result').addClass('hide')
}


function reset(){
	var array = mainarray
	score = 0
	answer = 0
	$('#question-container').removeClass("hide")
	setNextQuestion(array)
}




var array = [
    {
        question: 'Which type of JavaScript language?',
        choices: ['object-Oriented', 'object-based', 'assembly-language', 'high-leves'],
        correctAnswer: 1
    },
    {
        question: 'Which one of the following also known as Conditional Expression',
        choices: ['alternative to if-else', 'switch statement', 'if-then-else statement', 'chick'],
        correctAnswer: 3
    },
    {
        question: ' In JavaScript, what is a block of statement',
        choices: ['Conditional block', 'block that combines a number of statements into a single compound statement', 'both conditional block and a single statement', 'block that contains a single statement'],
        correctAnswer: 1
    },
    {
        question: 'When interpreter encounters an empty statements, what it will do',
        choices: ['Shows a warning', 'Prompts to complete the statement', 'Throws an error', 'Ignores the statements'],
        correctAnswer: 3
    },
    {
        question: 'The "function" and " var" are known as:',
        choices: ['Keywords', 'Data types', 'Declaration statements', 'Prototypes'],
        correctAnswer: 2
    },
    {
        question: 'Which of the following variables takes precedence over the others if the names are the same',
        choices: ['Global variable', 'The local element', 'The two of the above', 'None of the above'],
        correctAnswer: 1
    },
    {
        question: 'Which one of the following is the correct way for calling the JavaScript code?',
        choices: ['Preprocessor', 'Triggering Event', 'RMI', 'Function/Method'],
        correctAnswer: 3
    },
    {
        question: 'Which of the following type of a variable is volatile?',
        choices: ['Mutable variable', 'Dynamic variable', 'Volatile variable', 'Immutable variable'],
        correctAnswer: 0
    },
    {
        question: 'Which of the following option is used as hexadecimal literal beginning?',
        choices: ['00', '0x', '0X', 'Both 0x and 0X'],
        correctAnswer: 3
    },
    {
        question: 'When there is an indefinite or an infinite value during an arithmetic computation in a program, then JavaScript print',
        choices: ['Prints an exception error', 'Prints an overflow error', 'Displays "Infinity"', 'Prints the value as such'],
        correctAnswer: 2
    },
    {
        question: 'In the JavaScript, which one of the following is not considered as an error:',
        choices: ['Syntax error', 'Missing of semicolons', 'Division by zero', 'Missing of Bracket'],
        correctAnswer: 2
    },
    {
        question: 'Which of the following givenfunctions of the Number Object formats a number with a different number of digits to the right of the decimal?',
        choices: ['toExponential()', 'toFixed()', 'toPrecision()', 'toLocaleString()'],
        correctAnswer: 1
    },
    {
        question: 'Which of the following number object function returns the value of the number?',
        choices: ['toString()', 'valueOf()', 'toLocaleString()', 'toPrecision()'],
        correctAnswer: 1
    },
    {
        question: 'Which of the following function of the String object returns the character in the string starting at the specified position via the specified number of characters',
        choices: ['slice()', 'split()', 'substr()', 'search()'],
        correctAnswer: 2
    },
    {
        question: 'In JavaScript the x===y statement implies that:',
        choices: ['Both x and y are equal in value, type and reference address as well.', 'Both are x and y are equal in value only.', 'Both are equal in the value and data type.', 'Both are not same at all.'],
        correctAnswer: 2
    },
    {
        question: ' Choose the correct snippet from the following to check if the variable "a" is not equal the "NULL":',
        choices: ['if(a!==null)', 'if (a!)', 'if(a!null)', 'if(a!=null)'],
        correctAnswer: 0
    },
    {
        question: 'Suppose we have a text "human" that we want to convert into string without using the "new" operator. Which is the correct way from the following to do so:',
        choices: ['toString()', 'String(human)', 'String newvariable="human"', 'Both human.toString() and String(human)'],
        correctAnswer: 3
    },
]

const mainarray =  [
    {
        question: 'Which type of JavaScript language?',
        choices: ['object-Oriented', 'object-based', 'assembly-language', 'high-leves'],
        correctAnswer: 1
    },
    {
        question: 'Which one of the following also known as Conditional Expression',
        choices: ['alternative to if-else', 'switch statement', 'if-then-else statement', 'chick'],
        correctAnswer: 3
    },
    {
        question: ' In JavaScript, what is a block of statement',
        choices: ['Conditional block', 'block that combines a number of statements into a single compound statement', 'both conditional block and a single statement', 'block that contains a single statement'],
        correctAnswer: 1
    },
    {
        question: 'When interpreter encounters an empty statements, what it will do',
        choices: ['Shows a warning', 'Prompts to complete the statement', 'Throws an error', 'Ignores the statements'],
        correctAnswer: 3
    },
    {
        question: 'The "function" and " var" are known as:',
        choices: ['Keywords', 'Data types', 'Declaration statements', 'Prototypes'],
        correctAnswer: 2
    },
    {
        question: 'Which of the following variables takes precedence over the others if the names are the same',
        choices: ['Global variable', 'The local element', 'The two of the above', 'None of the above'],
        correctAnswer: 1
    },
    {
        question: 'Which one of the following is the correct way for calling the JavaScript code?',
        choices: ['Preprocessor', 'Triggering Event', 'RMI', 'Function/Method'],
        correctAnswer: 3
    },
    {
        question: 'Which of the following type of a variable is volatile?',
        choices: ['Mutable variable', 'Dynamic variable', 'Volatile variable', 'Immutable variable'],
        correctAnswer: 0
    },
    {
        question: 'Which of the following option is used as hexadecimal literal beginning?',
        choices: ['00', '0x', '0X', 'Both 0x and 0X'],
        correctAnswer: 3
    },
    {
        question: 'When there is an indefinite or an infinite value during an arithmetic computation in a program, then JavaScript print',
        choices: ['Prints an exception error', 'Prints an overflow error', 'Displays "Infinity"', 'Prints the value as such'],
        correctAnswer: 2
    },
    {
        question: 'In the JavaScript, which one of the following is not considered as an error:',
        choices: ['Syntax error', 'Missing of semicolons', 'Division by zero', 'Missing of Bracket'],
        correctAnswer: 2
    },
    {
        question: 'Which of the following givenfunctions of the Number Object formats a number with a different number of digits to the right of the decimal?',
        choices: ['toExponential()', 'toFixed()', 'toPrecision()', 'toLocaleString()'],
        correctAnswer: 1
    },
    {
        question: 'Which of the following number object function returns the value of the number?',
        choices: ['toString()', 'valueOf()', 'toLocaleString()', 'toPrecision()'],
        correctAnswer: 1
    },
    {
        question: 'Which of the following function of the String object returns the character in the string starting at the specified position via the specified number of characters',
        choices: ['slice()', 'split()', 'substr()', 'search()'],
        correctAnswer: 2
    },
    {
        question: 'In JavaScript the x===y statement implies that:',
        choices: ['Both x and y are equal in value, type and reference address as well.', 'Both are x and y are equal in value only.', 'Both are equal in the value and data type.', 'Both are not same at all.'],
        correctAnswer: 2
    },
    {
        question: ' Choose the correct snippet from the following to check if the variable "a" is not equal the "NULL":',
        choices: ['if(a!==null)', 'if (a!)', 'if(a!null)', 'if(a!=null)'],
        correctAnswer: 0
    },
    {
        question: 'Suppose we have a text "human" that we want to convert into string without using the "new" operator. Which is the correct way from the following to do so:',
        choices: ['toString()', 'String(human)', 'String newvariable="human"', 'Both human.toString() and String(human)'],
        correctAnswer: 3
    },
]