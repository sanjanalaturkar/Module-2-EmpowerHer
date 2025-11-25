const loadingIntervalId = setInterval(() => {
    console.log("Loading...");
}, 1000);

setTimeout(() => {
    clearInterval(loadingIntervalId);
    console.log("Loaded successfully!");
}, 5000);
