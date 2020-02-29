module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    const moves = Math.pow(2, disksNumber) - 1;
    return {
        turns: moves,
        seconds: moves / (turnsSpeed / 3600)
    };
}