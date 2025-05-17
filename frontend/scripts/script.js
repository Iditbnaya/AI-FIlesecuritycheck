const serverURL = "http://127.0.0.1:5000";

// Security-focused built-in questions
const securityQuestions = [
    "Does this document contain malware or spyware?",
    "Does this document contain any hidden or obfuscated code?",
    "Does this document contain any sensitive information or secrets?",
    "Was this document converted from another file type?",
    "Does this document contain any embedded scripts or macros?",
    "Are there any unusual patterns that suggest phishing attempts?"
];

// Upload file function
function uploadFile() {
    const fileInput = document.getElementById("fileInput");
    const file = fileInput.files[0];

    if (!file) {
        alert("Please upload a file first!");
        return;
    }

    const formData = new FormData();
    formData.append("file", file);

    fetch(`${serverURL}/upload`, { method: "POST", body: formData })
        .then(response => response.json())
        .then(data => {
            document.getElementById("uploadMessage").innerText = data.message;
        })
        .catch(error => console.error("Error:", error));
}

// Ask question function
function askQuestion() {
    const question = document.getElementById("questionInput").value;

    if (!question) {
        alert("Please enter a security question!");
        return;
    }

    sendQuestionToAI(question);
}

// Function to ask a random security-related question
function askRandomQuestion() {
    const randomQuestion = securityQuestions[Math.floor(Math.random() * securityQuestions.length)];
    sendQuestionToAI(randomQuestion);
}

// Function to ask a predefined security question
function askPresetQuestion(question) {
    sendQuestionToAI(question);
}

// Function to send security-related question to AI
function sendQuestionToAI(question) {
    fetch(`${serverURL}/ask`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("response").innerText = data.answer;
    })
    .catch(error => console.error("Error:", error));
}