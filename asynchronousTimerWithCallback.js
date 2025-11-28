function timer(duration, onComplete) {
  setTimeout(() => {
    const message = `Timer of ${duration} ms finished.`;
    onComplete(message);
  }, duration);
}

function handleTimerFinish(resultMessage) {
  console.log("Timer finished!");
  console.log(`Received message: ${resultMessage}`);
}

const timerDuration = 2000;
console.log(`Starting timer for ${timerDuration} ms...`);

timer(timerDuration, handleTimerFinish);
