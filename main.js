const startButton = $('#start-btn')
const choice1 = $('#1')
const choice2 = $('#2')
const choice3 = $('#3')
const choice4 = $('#4')

startButton.click(startGame)
choice1.click(A1)
/*
choice2.click(A2)
choice3.click(A3)
choice4.click(A4)
*/
var array = [
    {
        question: 'What is the baby of a moth known as?',
        choices: ['baby', 'infant', 'kit', 'larva'],
        correctAnswer: 3
    },
    {
        question: 'What is the adult of a kid called?',
        choices: ['calf', 'doe', 'goat', 'chick'],
        correctAnswer: 2
    },
    {
        question: 'What is the young of buffalo called?',
        choices: ['calf', 'baby', 'pup', 'cow'],
        correctAnswer: 0
    },
    {
        question: 'What is a baby alligator called?',
        choices: ['baby', 'gator', 'hatchling', 'calf'],
        correctAnswer: 1
    },
    {
        question: 'What is a baby goose called?',
        choices: ['gooser', 'gosling', 'gup', 'pup'],
        correctAnswer: 1
    }
]

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
     
}

function A1(){
      $("#2").removeClass("btn");
      $("#3").removeClass("btn");
      $("#4").removeClass("btn");
      $("#2").addClass("hide");
      $("#3").addClass("hide");
      $("#4").addClass("hide");
}
