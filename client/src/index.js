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

    "When you want to escape from everything, where do you go (mentally or physically)?",

    "Whats the story about the last time you cried?",

    "What recent thing have you  decided you are over and done with?",

    "Where is the last place you've been where you felt completely out of place?",

    "Where is the last place you've been where you felt you completely accepted?",

    "What recent situation was a disater, but you were able to laugh at?",

    "What recent situation was a near disaster, but you were able to prevent it?",

    "How would you spend $100,000 to give the most happiness to the most amout of people possible?",

    "What situation is sure to make you cry?",

    "How many chances do you give someone before you write someone off?",

    "How often do you fine yourself daydreaming?",

    "What character in a movie, book or TV show can you see in your own life?",

    "What place in a movie do you wish really existed?",

    "What book do you wish you could jump into?",

    "What one holiday would yuo like to get rid of?",

    "Whats the most difficult choice you were asked to make?",

    "What is something you would be willing to stay up all night to do?",

    "Whats the next thing you have on your to buy list?",

    "If you had to pick 3 words to describe the year so far what would they be?",

    "What type of exercise do you love the most?",

    "What one thing, besides money, would make your life better?",

    "What is your go to funny story that was a complete comedy of errors?",

    "What is your go to story?",

    "What does it mean to live a good life?",

    "What was your biggest turning point?",

    "What mode of transportation have you never tried?",

    "What is something you cant live without?",

    "Do you have a favorite brand?",

    "If you were to work at a circus what job would you choose?",

    "If each person had a warning label what would yours say?",

    "What is your favorite form of entertaintment?",

    "Who is someone you recently thought about you havent seen or spoken to in years & how long has it been?",

    "What was your first concert?",

    "If you had to describe your current life as a movie what would it be?",

    "What can you talk about for hours?",

    "What episode of Sex and the City do you most relate to?",

    "If its raining outside what activity do you most want to do?",

    "How would a random stranger describe you &  how accurate would it be?",

    "How would a friend or partner describe you?",

    "What 3 things have you recently felt grateful for?",

    "What is the strangest way you met one of your friends?",

    "What were the circumstances of the strangest situation you have met someone?",

    "do you prefer small talk or real talk?",

    "What does nobody want to talk about, but should?",

    "What law have yo broken most in your life?",

    "What law should be taken away?",

    "Who do you miss the most?",

    "What is something that really happened to you, but nobody would believe unless they were there with you?",

    "Are you more like your mom or dad? How does that make you feel?",

    "What is your favorite color of M&M?",

    "What is something you dont think you'll ever be able to do well and are okay with?",

    "What was something you never thought you'd be able to do well, but did?",

    "What are you most proud of right now?",

    "What animal best reflects your personality?",

    "What little things do you do that you think many people don't notice?",

    "Whats the first thing people notice about you?",

    "What would you like to be best known for?",

    "Would you do well in Politics?",

    "Are there words up prefer not to use/hear?",

    "What do you wish you had spent more time doing when you were younger?",

    "What do yuo wish your parents had taught you?",

    "How well do you trust your gut feelings?",

    "Do you consider yourself decisive or indedisive?",

    "Do you prefer to read books on pages, electronically or listen to them?",

    "Whats the most difficult thing about being you?",

    "Whats the most interesting conversation you have eavesdropped on?",

    "What do you find attractive that others might find unusual?",

    "what is your current go to dance song?",

    "What food have you never tried?",

    "What's the most uncomfotable situation you have ever found yourself in?",

    "What do you think is the most usefull skill to know?",

    "How long do you think you could survive all alone?",

    "If you had to ask yourslef 1 question to get the most information out of you what would it be?",

    "If you had to ask 1 question to someone to get the most information out of them what would it be?",

    "What's the story behind your last rant?",

    "Without saying the category what are your top 3?",

    "Have you been to an event you think will be part of history?",

    "Are you a planner or more of a go with the flow kind of traveler?",

    "What's something uncomfortable that you feel everyone should experience at least once in their life?",

    "What motivates you the most",

    "What about you do you get the most comments/compliments on?",

    "Did you ever have a huge rivalry? Was it friendly or no?",

    "What do you wish you had more talent doing?",

    "What do you like to do that is considered touristy?",

    "What or where is the next place you want to visit?",

    // "?",

    // "?",

    // "?",

    // "?",

    // "?",

    // "?",

    // "?",

    // "?",

    // "?",

    // "?",

    // "?",


    // "?",

    // "?",

    // "?",

    // "?",

    // "?",

    // "?",

    // "?",

    // "?",

    // "?",

    // "?",

    // "?",

    // "?",

    // "?",

    // "?",

    // "?",

    // "?",

    // "?",


    // "?",

    // "?",

    // "?",

    // "?",

    // "?",

    // "?",

    // "?",

    // "?",

    // "?",

    // "?",

    // "?",

    // "?",

    // "?",

    // "?",

    // "?",

    // "?",

    // "?",
    

    


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