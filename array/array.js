function analyze(arr) {

    let obj = {
        average: findAverage(arr),
        min: findMin(arr),
        max: findMax(arr),
        length: findLength(arr)
    }

    return obj;
}

function findAverage(arr) {
    let sum = arr.reduce((a,b) => a + b, 0);
    let avg = sum / findLength(arr);
    return avg;
}

function findMin(arr) {
    let min = Math.min(...arr);
    return min;
}

function findMax(arr) {
    let max = Math.max(...arr);
    return max;
}

function findLength(arr) {
    return arr.length;
}



module.exports = analyze;