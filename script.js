// Chatbot Logic with basic keyword matching
function sendMessage() {
    var input = document.getElementById('chatbotInput');
    var message = input.value.trim().toLowerCase();
    if (message === '') return;

    // Display the user's message
    var userMessage = '<div class="chatbot-message user-message">' + input.value + '</div>';
    document.getElementById('chatbotBody').innerHTML += userMessage;

    // Call function to get bot's response
    var botMessage = '<div class="chatbot-message bot-message">' + getBotResponse(message) + '</div>';
    document.getElementById('chatbotBody').innerHTML += botMessage;

    // Scroll to the bottom of the chat
    var chatbotBody = document.getElementById('chatbotBody');
    chatbotBody.scrollTop = chatbotBody.scrollHeight;

    // Clear the input
    input.value = '';
}


// Function to handle bot responses based on input
function getBotResponse(message) {
    // Basic keyword-based response logic
    if (message.includes('Hello') || message.includes('Hi')) {
        return 'Hello nanbargale ! I am ArunChatBot';
    } else if (message.includes('What is your name ?') ||message.includes('Who are you') ||message.includes('What about you?') || message.includes('yaaru nee')) {
        return 'I am Arun Ulagappan';
    } else if (message.includes('parents') ||message.includes('cgpa') || message.includes('age') ||message.includes('brother') ||message.includes('CGPA')) {
        return 'No you cannot access these informations from me... :)';
    }
    if (message.toLowerCase().includes('native') || message.toLowerCase().includes('which district') || message.toLowerCase().includes('district')) {
            return 'My native is Nagapattinam';
        } else if (message.toLowerCase().includes('friend') || message.toLowerCase().includes('friends') || message.toLowerCase().includes('who are your friends?')) {
            return 'Best ones: Naveen, Sibi, Durai, Namachi, Sam ganesh so on...';
        } else if (message.toLowerCase().includes('hero') || message.toLowerCase().includes('heros')) {
            return 'Thalapathy Vijay';
        } else if (message.toLowerCase().includes('studies') || message.toLowerCase().includes('education')) {
            return 'These topics are so weird to me :)';
        } else if (message.toLowerCase().includes('aim') || message.toLowerCase().includes('goal')) {
            return 'In Professional: Placement... In Personal : Survive in this competitive world';
        } else if (message.toLowerCase().includes('heroine')) {
            return 'Samantha :)';
        } else if (message.toLowerCase().includes('movie')) {
            return 'Kaththi..';
        } else if (message.toLowerCase().includes('quality') || message.toLowerCase().includes('qualities')) {
            return 'Nalla paiyan... and  I love to compliment others';    
        } else if (message.toLowerCase().includes('quote')) {
            return 'LIFE IS AN NEVER-ENDING EXAM WHERE EACH ANSWER WE WRITE CREATES UNFORGETTABLE MOMENTS, AND EVERY SMILE WE SHARE BECOMES OUR TRUE CGPA';
        } else if (message.toLowerCase().includes('favourite') || message.toLowerCase().includes('what do you want ?')) {
            return 'Song: HipHop -Aye aye hoo...,Food : HomeFood,  Color : Blue,  Activiy: chit chat';
        } else if (message.toLowerCase().includes('what can you do') || message.toLowerCase().includes('help')) {
            return 'I can answer questions about my owner, ARUN ULAGAPPAN, and provide information about his skills, projects, and more.';
        } else if (message.toLowerCase().includes('projects')) {
            return 'You can check out the projects section on this page: <a href="projects.html">Projects I Did</a>';
        } else if (message.toLowerCase().includes('skills')) {
            return 'You can find ARUN’s skills here: <a href="skills.html">My Skill Set</a>';
        } else if (message.toLowerCase().includes('organizations')) {
            return 'You can find ARUN’s skills here: <a href="organizations.html">My Organizations Set</a>';
        } else if (message.toLowerCase().includes('bye') || message.toLowerCase().includes('thank you') || message.toLowerCase().includes('ok bye')) {
            return 'Goodbye! Carpe Diem !';
        } else {
            return 'I can\'t understand what you are talking about? ';
        }
        
}
dragElement(document.getElementById("chatbot"));

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    var header = document.getElementById(elmnt.id + "Header");
    
    if (header) {
        header.onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}
