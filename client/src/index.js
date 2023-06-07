function generateRandomQuestions() {
    var questions = [
        "What is your favorite Animal?",

        "Where in all the world would you like to be transported to?",
        
        "If you could leave earth to travel the universe, but you could never return would you?",
        
        "Who hurt you?",
        
        "What type of weather is your favorite?",
        
        "Who is your favorite drag Queen/King?",

        "What is your part in the universe?",

        "What 1 thing would you change about yourself", 

        "Whats is 1 thing you wouldn't change about yourself?",

        "Waht recent event have you seen that restored your confidence in humanity",

        "Whats your go to funny story?",

        ""

    ];
    
    const randomIndex = Math.floor(Math.random() * questions.length);
      return questions[randomIndex];
    }

    const questionElement = document.getElementById('question');
    const changeQuestionButton = document.querySelector('.button');

    function changeQuestion() {
      questionElement.textContent = generateRandomQuestions();
    }

    changeQuestionButton.addEventListener('click', changeQuestion);
    questionElement.textContent = generateRandomQuestions();