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

        "What is 1 thing you wouldn't change about yourself?",

        "What recent event have you seen that restored your confidence in humanity",

        "Whats your go to funny story?",

        "What event made ou a stronger person?",

        "Have you ever been in jail/prison?",

        "What are you currenly doubting about yourself?",

        "What are you currenly confident about in yourself?",

        "Whats a situation when you look back you wish youd have done?",

        "Whats an interesting fact that you recently learned?",

        "What do you love most about where you grew up?",

        "What do you like the least about where you grew up?",

        "What do you think is the most valuable resource?",

        "What would you describe as wealth?",

        "What is the last big goal you accomplished",

        "Of all the things you've bought in your life what has been the best purchase?",

        "Of all the things you've bought in your life what has been the worst purchase?",

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