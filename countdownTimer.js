let countdownIntervalId = null; 

const stopCountdown = (message) => {
    if (countdownIntervalId !== null) {
        clearInterval(countdownIntervalId);
        countdownIntervalId = null;
        console.log(`\n--- ${message} ---`);
    }
};

const startCountdown = () => {
    let seconds = parseInt(prompt("Enter the number of seconds to count down:"), 10);

    if (isNaN(seconds) || seconds <= 0) {
        console.log("Invalid input. Please enter a positive number.");
        return;
    }

    console.log(`\nStarting countdown from ${seconds} seconds...`);
    console.log("Press 's' and then ENTER in the console to stop the timer.");
    
    countdownIntervalId = setInterval(() => {
        if (seconds <= 0) {
            stopCountdown("Countdown Complete!");
            return;
        }

        console.log(`Time remaining: ${seconds} seconds`);
        seconds--;
        
    }, 1000);

    setTimeout(() => {
        const interruptCheck = prompt("If you wish to stop the countdown, type 's' now:");
        if (interruptCheck && interruptCheck.toLowerCase() === 's') {
            stopCountdown(`Countdown stopped manually at ${seconds + 1} seconds.`);
        }
    }, 100); 
};

startCountdown();
