const suggestionsElement = document.getElementById('suggestions');
const faq={
    "what is rileybot": "RileyBot is an AI-powered chatbot designed specially for k-12 education. It helps students by guiding them through learning, encouraging and providing age-appropriate responses.",
    "how does rileybot work": "Answer here",
    "can i cheat using rileybot": "No, RileyBot is equipped with smart technology so it will not answer and remind you that you shouldn't do that.",
    "does rileybot give you feedback": "Yes, if you ask RileyBot for some feedback it will give you an age appropriate piece of feedback.",
    "is rileybot accurate": "Most of the time RileyBot is accurate but on the occasion it mite make a mistake.",
    "what subjects does rileybot cover": "RileyBot covers every subject  but it is still developing its maths skills.",
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
    }   
    questionInput.innerHTML = "";
    questionInput.focus(); 
}

function suggestQuestions(input){
    
    Object.keys(faq).forEach(question =>{
        if (question.includes(input)){
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
    });
    if (!suggestionsElement.hasChildNodes()){
        suggestionsElement.innerText = "No similar questions found."
    }
}
