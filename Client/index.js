setTimeout(
    typingAnimation,
    500, 
    document.querySelector(".description"),
    "Dynamic chat rooms for your daily quick chat with friends",
    0
    );

function typingAnimation(field, text) {
    let i = 0;
    let interval;

    function type() {
        
        if(field.textContent === text) {
            clearInterval(interval);
            return;
        }

        field.textContent += text[i++];
    } 
    interval = setInterval(type, 70);


}