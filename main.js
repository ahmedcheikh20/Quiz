const startButton = $('#start-btn')

startButton.click(startGame)
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
