let twentySecondsBtnElement = document.getElementById("twentySecondsBtn");
let thirtySecondsBtnElement = document.getElementById("thirtySecondsBtn");
let fortySecondsBtnElement = document.getElementById("fortySecondsBtn");
let oneMinuteBtnElement = document.getElementById("oneMinuteBtn");
let timerTextElement = document.getElementById("timerText");
let counter = null;
let timerId;

function clearPreviousTimers() {
    clearInterval(timerId);
}
twentySecondsBtnElement.addEventListener("click", function() {
    clearPreviousTimers();
    counter = 20;
    timerTextElement.textContent = counter + " seconds left";
    timerId = setInterval(function() {

        timerTextElement.textContent = counter + " seconds left";
        if (counter <= 0) {
            timerTextElement.textContent = "Your moment is complete";
            clearInterval(timerId);
        }
        counter = counter - 1;
    }, 1000);
});

thirtySecondsBtnElement.addEventListener("click", function() {
    clearPreviousTimers();
    counter = 30;
    timerTextElement.textContent = counter + " seconds left";
    timerId = setInterval(function() {
        timerTextElement.textContent = counter + " seconds left";
        if (counter <= 0) {

            timerTextElement.textContent = "Your moment is complete";
            clearInterval(timerId);
        }
        counter = counter - 1;
    }, 1000);
});
fortySecondsBtnElement.addEventListener("click", function() {
    clearPreviousTimers();
    counter = 40;
    timerTextElement.textContent = counter + " seconds left";
    timerId = setInterval(function() {
        timerTextElement.textContent = counter + " seconds left";
        if (counter <= 0) {
            timerTextElement.textContent = "Your moment is complete";
            clearInterval(timerId);
        }
        counter = counter - 1;
    }, 1000);
});
oneMinuteBtnElement.addEventListener("click", function() {
    clearPreviousTimers();
    counter = 60;
    timerTextElement.textContent = counter + " seconds left";
    timerId = setInterval(function() {
        timerTextElement.textContent = counter + " seconds left";
        if (counter <= 0) {
            timerTextElement.textContent = "Your moment is complete";
            clearInterval(timerId);
        }
        counter = counter - 1;
    }, 1000);
});