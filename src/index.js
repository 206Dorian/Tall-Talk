function generateRandomQuestions() {
    var questions = [
        "What is your favorite Animal?",
        "Where in all the world would you like to be transported to?",
        "If you could leave earth to travel the universe, but you could never return would you?",
        "Who hurt you?"
    ];
    var randomIndex = Math.floor(Math.random() * questions.length);
    return questions[randomIndex];
}
var randomQuestion = generateRandomQuestions();
console.log(randomQuestion);