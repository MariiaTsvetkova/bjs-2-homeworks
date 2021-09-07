'use strict'

function solveEquation(a, b, c) {
  let arr = []; // массив для ответов
  
  let d = Math.pow(b, 2) - 4 * a * c; // формула вычисления дискриминанта
  let root = Math.sqrt(d); // переменная для хранения корня из дискриминанта
  
  if (d < 0) {
    arr = [];        // если дискриминант меньше нуля, корней нет 
  } else if (d === 0) {
    arr.push((-b + root) / (2 * a));      // если дискриминант равен нулю, у уравнения один корень 
  } else { 
    arr.push((-b + root) / (2 * a)); // вычисляем первый корень
    arr.push((-b - root) / (2 * a)); // вычисляем второй корень
  }
  
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  if (isNaN(validateNumber(percent))) {
    return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`
  };
  if (isNaN(validateNumber(contribution))) {
    return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`
  };
  if (isNaN(validateNumber(amount))) {
    return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`
  };
  

  let totalAmount;
  let loanBody = amount - contribution;
  
  let currentYear = new Date().getFullYear();
  let currentMonth = new Date().getMonth();
  let yearOfPayment = date.getFullYear();
  let monthOfPayment = date.getMonth();
  let numberOfMonths = (yearOfPayment - currentYear) * 12 + (monthOfPayment - currentMonth);
  let p = percent / 100 / 12;
  let monthlyPayment = loanBody * (p + p / (((1 + p)**numberOfMonths) - 1));
  totalAmount = (monthlyPayment * numberOfMonths).toFixed(2);
  
  

  return +totalAmount;
}

function validateNumber(value)  {
  return +value;
}