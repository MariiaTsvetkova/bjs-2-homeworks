'use strict'

// Задание 1
function getArrayParams(arr) {
  let min,max,sum,avg;

  sum = 0;
  min = Infinity;
  max = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  avg = +(sum / arr.length).toFixed(2);

  return { min:min, max:max, avg:avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

function makeWork(arrOfArr, func) {
  let max = -Infinity;

  for (let i = 0; i < arrOfArr.length; i++) {
    func(arrOfArr[i]);
    if (func(arrOfArr[i]) > max) {
      max = func(arrOfArr[i]);
    }
  }

  return max
}

// Задание 3
function worker2(arr) {
  let max = -Infinity;
  let min = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  let dif = +(max-min);

  return dif
}
