const suggestionsElement = document.getElementById('suggestions');
const faq={
    "what is rileybot?": "RileyBot is an AI-powered chatbot designed specially for k-12 education. It helps students by guiding them through learning, encouraging and providing age-appropriate responses.",
    "how does rileybot work?": "RileyBot is an AI so people will have to teach it to be and answer like a human.",
    "can i cheat using rileybot?": "No, RileyBot is equipped with smart technology so it will not answer and remind you that you shouldn't do that.",
    "does rileybot give you feedback?": "Yes, if you ask RileyBot for some feedback it will give you an age appropriate piece of feedback.",
    "is rileybot accurate?": "Most of the time RileyBot is accurate but on the occasion it mite make a mistake.",
    "what subjects does rileybot cover?": "RileyBot covers every subject  but it is still developing its maths skills.",
    "can rileybot read my work?":"Yes, RileyBot can read handwritten and typed text",
    "can rileybot help me with maths?":"Yes, RileyBot can help you with maths using the draw function or just typing in a question.",
    "how can rileybot help me?":"RileyBot can help you. Go to the how RileyBot can help you page to learn more.",
    "can rileybot speak to me?":"Yes, RileyBot can speak to you using the voice recognition function.",
    "does rileybot have a voice function?":"Yes, RileyBot does have a voice function.",
    "how do i use rileybot?":"If you want to know how to use RileyBot, you can watch the tutorials.",
    "can rileybot help me be more creative?":"Yes, RileyBot can help you be more creative.",
    "where can i download rileybot?":"RileyBot is available on the App Store and Google Play",
    "what age is rileybot suitable for?":"RileyBot is suitable for Year 3 students and upwards",
    "is rileybot safe for children to use?":"Yes, RileyBot has multiple layers of protection ensuring a secure learning environment", 
    "why is rileybot not working?":"This is a common problem, try to sign out and sign in or restart your device",
    "does rileybot work around the world?":"RileyBot does work all around the world.",
    "does rileybot need wifi?":"RileyBot needs wifi or an internet connection to work.",
    "does rileybot cost anything to access?":"Your school will have to buy a subsciption per student to use it that you can find at Sphinx AI Education."
    

}
function sendMessage(){
    const questionInput = document.getElementById("question");
    const question = questionInput.value.toLowerCase();
    const responseElement = document.getElementById('response');
    suggestionsElement.style.display = "block";
    
    console.log(question);
        // cehcking if the question aseked by the user is present in the list of questions or not
    if (faq[question]){
       // if the question is present display the answer
        responseElement.innerText = faq[question];
    } else {
        // if quetsion is not present display a message and suggestions
        const response = "Sorry, I don't have information on that. Did you mean:"
        responseElement.innerText = response;
        const suggestionDiv = document.getElementsByClassName('suggestion');
        suggestionsElement.innerHTML = ""; 
        suggestQuestions(question);       
    }   
    questionInput.innerHTML = "";
    questionInput.focus(); 
}

function matchStrings(inputString, threshold = 0.5){
    // console.log(inputString  );
    
    const inputWOrds = new Set(inputString.toLowerCase().split(" "));
    const matchingStrings = []

    Object.keys(faq).forEach((question) => {
        
       // console.log("Question: ", question);
        
        const questionWords = new Set(question.toLowerCase().split(" "));
        const commonWords = [...questionWords].filter(word => inputWOrds.has(word));

        const matchPercentage = commonWords.length/questionWords.size;
        // console.log(matchPercentage,commonWords.length, questionWords.size );
        if(matchPercentage>=threshold){
            matchingStrings.push(question);
        }
    })
    console.log(matchingStrings);
    
    return matchingStrings;
}

function suggestQuestions(input){
    matchingQuestion = matchStrings(input, threshold = 0.5);
    matchingQuestion.forEach(question =>{
       
            const suggestionDiv = document.createElement('div');
            suggestionDiv.innerText = question;
            suggestionDiv.className = 'suggestion';
            suggestionDiv.onclick = () =>{
                document.getElementById('question').value = question;
                sendMessage();
                suggestionsElement.style.display = "none";
            };
            suggestionsElement.appendChild(suggestionDiv);
        }
    );
    if (!suggestionsElement.hasChildNodes()){
        suggestionsElement.innerText = "No similar questions found."
    }
}
