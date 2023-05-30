function generateRandomQuestions() {
    var questions = [
        "What is your favorite Animal?",

        "Where in all the world would you like to be transported to?",
        
        "If you could leave earth to travel the universe, but you could never return would you?",
        
        "Who hurt you?",
        

        "what type of weather is your favorite?",
        
        "Who is your fav drag queen?"
    ];
    
    // Add dynamically added questions to the array
    var dynamicallyAddedQuestions = getDynamicallyAddedQuestions();
    questions = questions.concat(dynamicallyAddedQuestions);
    
    var randomIndex = Math.floor(Math.random() * questions.length);
    return questions[randomIndex];
}

function getDynamicallyAddedQuestions() {
    // Retrieve dynamically added questions from your app's storage or any other source
    // For this example, we'll use a placeholder array
    var dynamicallyAddedQuestions = [
        "What is your favorite color?",
        "What is your favorite movie?",
        // Add more dynamically added questions as needed
    ];
    
    return dynamicallyAddedQuestions;
}

var randomQuestion = generateRandomQuestions();
console.log(randomQuestion);
