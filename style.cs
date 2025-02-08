.logo h1 {
    font-size: 50px; 
    font-weight: bold;
    color: #007bff; 
    text-transform: uppercase;
}
#chatbot {
    position: fixed;
    bottom: 20px;
    right: 20px;
    font-family: Arial, sans-serif;
}

#chatbot-toggle {
    background: #007bff;
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    font-size: 18px;
}

#chatbot-window {
    position: fixed;
    bottom: 80px;
    right: 20px;
    width: 300px;
    height: 400px;
    background: white;
    border: 1px solid #ccc;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
    display: none;
    border-radius: 10px;
    overflow: hidden;
}

#chatbot-header {
    background: #007bff;
    color: white;
    padding: 10px;
    text-align: center;
    font-weight: bold;
}

#chatbot-messages {
    height: 300px;
    padding: 10px;
    overflow-y: auto;
    border-bottom: 1px solid #ccc;
}

#chatbot-input-container {
    display: flex;
    padding: 5px;
}

#chatbot-input {
    flex: 1;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

#chatbot-send {
    background: #007bff;
    color: white;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    border-radius: 5px;
    margin-left: 5px;
}


.hidden {
    display: none;
}
