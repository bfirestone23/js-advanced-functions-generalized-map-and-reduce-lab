const map = (arr, fn) => {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(fn(arr[i]));
    }
    return result;
}

const reduce = (arr, fn, int=0) => {
    let accumulator = (!!int) ? int : arr[0];
    let currentValue = (!!int) ? 0 : 1;

    for (; currentValue < arr.length; currentValue++) {
        accumulator = fn(arr[currentValue], accumulator)
    }
    return accumulator;
}