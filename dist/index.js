"use strict";
function generateRandomQuestions() {
    const questions = [
        "What is your favorite Animal?",

        "Where in all the world would you like to be transported to?",
        
        "If you could leave earth to travel the universe, but you could never return would you?",
        
        "Who hurt you?",
        
        "what type of weather is your favorite?"
    ];
    const randomIndex = Math.floor(Math.random() * questions.length);
    return questions[randomIndex];
}
const randomQuestion = generateRandomQuestions();
console.log(randomQuestion);
