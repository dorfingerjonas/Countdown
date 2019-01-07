let decrementsPerSecond = 1;

let setCountdown = function (counter) {

    console.log(counter);

    let timer = setInterval(() => {
        console.log(--counter);
    }, 1000 / decrementsPerSecond);

    setTimeout(() => {
        clearInterval(timer)
    }, counter * 1000 / decrementsPerSecond + 100);
};

let setDecrementsPerSecond = function(decrements) {
    decrementsPerSecond = decrements;
}
module.exports.setCountdown = setCountdown;

module.exports.setDecrementsPerSecond = setDecrementsPerSecond;