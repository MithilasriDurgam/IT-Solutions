document.addEventListener("DOMContentLoaded", () => {
    console.log("JavaScript Loaded - Debugging Start");

    const chatbotToggle = document.getElementById("chatbot-toggle");
    const chatbotWindow = document.getElementById("chatbot-window");
    const chatbotInput = document.getElementById("chatbot-input");
    const chatbotSend = document.getElementById("chatbot-send");
    const chatbotMessages = document.getElementById("chatbot-messages");

    chatbotToggle.addEventListener("click", () => {
        chatbotWindow.style.display = 
            getComputedStyle(chatbotWindow).display === "none" ? "block" : "none";
    });

    const chatbotResponses = {
        "hi": "Hello! How can I assist you?",
        "hello": "Hi! How can I help you?",
        "any openings for freshers": "Yes, there are openings for several roles.",
        "can i know the working hours": "Our working hours are Monday to Friday, 9:00 AM to 5:00 PM (local time).",
        "how do i contact dxc customer support team": "You can reach our support team by phone at 08021314, email at support@dxc.com, or through this chat.",
        "what are employee benefits": "Our employee benefits include health insurance, retirement plans, and more. Please refer to our HR portal for full details.",
        "bye": "Thank you! Have a great day."
    };

    function sendMessage() {
        const userMessage = chatbotInput.value.trim();
        console.log("User Message Received:", userMessage); 

        if (userMessage) {
            chatbotMessages.innerHTML += `<div><strong>You:</strong> ${userMessage}</div>`;
            chatbotInput.value = ""; 

            setTimeout(() => {
                let response = "I'm sorry, I don't have that information.";

                const cleanedMessage = userMessage.toLowerCase().replace(/[^a-z0-9\s]/gi, "").trim();
                console.log("Processed User Message:", cleanedMessage);

                if (Object.prototype.hasOwnProperty.call(chatbotResponses, cleanedMessage)) {
                    response = chatbotResponses[cleanedMessage];
                }

                chatbotMessages.innerHTML += `<div><strong>IT Solutions :</strong> ${response}</div>`;
                chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
            }, 500);
        }
    }

    chatbotSend.addEventListener("click", sendMessage);

    chatbotInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            sendMessage();
        }
    });
});
