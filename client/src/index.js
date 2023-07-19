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

    "What is your go to funny story?",

    "What event made you a stronger person?",

    "Have you ever been in jail/prison?",

    "What are you currenly doubting about yourself?",

    "What are you currenly confident about in yourself?",

    "What is a situation you look back on and you wish you would or wouldn't have done?",

    "Whats an interesting fact that you recently learned?",

    "What do you love most about where you grew up?",

    "What do you like the least about where you grew up?",

    "What do you think is the most valuable resource?",

    "What would you describe as wealth?",

    "What is the last big goal you accomplished",

    "Of all the things you've bought in your life what has been the best purchase?",

    "Of all the things you've bought in your life what has been the worst purchase?",

    "On any given day what do you spend the most time doing?",

    "At what age do you think you became an adult?",

    "What's somthing you should start, but havent?",

    "What is your best shower thought?",

    "What do you think your signature says about you?",

    "Who in your family can't you belive you are related to?",

    "What one person would you like to add to your family",

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