function sendMessage(){
    const question = document.getElementById("question").value.toLowerCase();
    const responseElement = document.getElementById('response');
    
    const faq={
        "what is rileybot": "RileyBot is an AI-powered chatbot designed specially for k-12 education. It helps students by guiding them through learning, encouraging and providing age-appropriate responses.",
        "how does rileybot work": "Answer here",
        "can I cheat using rileybot?": "No, RileyBot is equipped with smart technology so it will not answer and remind you that you shouldn't do that.",
        "does rileybot give you feedback?": "Yes, if you ask RileyBot for some feedback it will give you an age appropriate piece of feedback.",
        "is rileybot accurate?": "Answer here",
        "what subjects does rileybot cover?": "Answer here",
    }
    console.log(question);
    
    const response = faq[question] || "Sorry, I don't have information on that. Please ask another question."
    responseElement.innerText = response;
}