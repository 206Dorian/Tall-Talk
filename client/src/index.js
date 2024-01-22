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

    "What one holiday would you like to get rid of?",

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

    "What do you need right now?",

    "What is your dream and what are you doing to achieve it?",

    "Hows your spirit?",

    "What are you excited about?",

    "What is your go to funny story?",

    "What music have you recently discovered?",

    "In what era would you like to have grown up?",

    "What is the most unusal gift you've received?",

    "What was your mothers/grandmothers signature dish?",

    "Has your personality changed since you were young?",

    "If you were a Doctor waht specialty would you choose?",

    "How do you define integrity and do you have it?",

    "What is the most intersting museum you have visited?",

    "What TV/Radio host would you want to interview you?",

    "What advice would you most appreciate from a happy 80 year old?",

    "How do your siblings see life differently than you?",

    "What would you miss most about your home if you had to move today?",

    "Which unsolved case would you like to know the truth about?",

    "What change would you most like to change for your health?",

    "Who is the best teacher you've had?",

    "If you had to quit your job to follow a dream what would it be?",

    "Would you rather sing, write, paint or sew?",

    "would you rather go to a concert, the theatre, the ballet or a movie?",

    "If you could spend a day with your favorite celebrity, who is it and what would you do ?",

    "Have you ever run into someone you knew when you were far from home?",

    "Who is the most inspirational person alive today?",

    "Would you rather be lucky or wise?",

    "would you rather be smarter or wealthier?",

    "How far back have your ancestors been traced?",

    "What would you have for your last meal?",

    "What do you wish you were better at saying NO to?",

    "Whose life do you find inspiring?",

    "If you could compete in any Olympic sport which would it be?",

    "What are you grateful for?",

    "Who do you love?",

    "What is your price per wear for an article of clothing?",

    "How many chances to do you give people?",

    "What do you wish you didnt care about?",

     "What did you love when you were a kid that you no longer enjoy?",

    "What was something you did as a child that you still do and love ?",

    "What do you wish you spent less time doing?",

    "What's your 'No Good Deed Goes Unpunished Story'?",

    "Which errands do you enjoy and/or loathe the most?",

    "What is your favorite smell?",

    "What is the most underrated profession?",

    "What's the most common thing people ask you or say when they find out what you do for your profession?",

    "What was your first impression of me?",

    "What was your first impression of the person across from you?",

    "What was your first impression of the person to your right?",

    "What was your first impression of the person to your left?",

    "Which fictional character would be the most fun to have as a friend?",

    "What was your first impression of your spouse?",

    "What was your first impression of your best friend?",

    "Which fictional character would you like to have as a friend?",

    "Whats your favorite weird smell?",

    "What do you enjoy that you dont get to do often enough?",

    "What do people often incorrectly assume about you?",

    "What do people often correctly assume about you?",

    "What are you the 'go-to' person for in your family?",

    "What are you the 'go-to' person for in your friends circle?",

    "What is the absolute best thing you ever splurged on?",

    "What is something other people find rude, but doesn't bother you?",

    "What is something you find rude, but doesn't bother other people?",

    "When was the last time you were proud of yourself?",

    "What is something difficult for you that seems easy for everyone else?",

    "What is something difficult for others, but is easy for you?",

    "Who do you compare yourself to as an adult?",

    "What about you is easy to love?",

    "How would you like to spend your days?",

    "Whats one thing you like about being you?",

    "What popular food do you not care for?",

    "What is something more people should know about?",

    "What is something more people should try sexually?",

    "What TV show are you obsessed that with other just dont get?",

    "What TV show are others obsessed with that you just cant get into?",

    "What did you eat as a kid that you cant eat now?",
    
    "If you were a toy what accessories would be included with you?",

    "What movie was a waste of 2 hours?",

    // last questions entered here
    
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