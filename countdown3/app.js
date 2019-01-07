const countdown = require("./countdown");

var helloWorld = function() {
    console.log("Hallo Welt!");
};

countdown.setDecrementsPerSecond(3);

countdown.setCountdown(helloWorld, 10);
