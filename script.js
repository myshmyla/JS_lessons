'use strict';
let isNumber = function(n){
  return !isNaN(parseFloat(n)) && isFinite(n)
}

let money,
  income = 'Фриланс',
  addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
  deposit = confirm('Есть ли у вас депозит в банке?'),
  mission = 50000;
 // period = 3;

let start = function() {
  do{
    money = prompt('Ваш месячный доход?');
  }
  while (isNaN(money) || money === '' || money === null)
};

start();

let showTypeOf = function (item) {
  console.log(typeof item);
};
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);


let expenses = [];

console.log(addExpenses.toLowerCase().split(','));

let getExpensesMonth = function () {
let sum = 0;

for (let i = 0; i< 2; i ++) {
  
expenses[i] = prompt('Введите обязательную статью расходов?');

  sum+= +prompt('Во сколько это обойдется?');
}
console.log(expenses);
  return sum;
};


let expensesAmount = getExpensesMonth();

console.log('Расходы за месяц: ' + expensesAmount);

let getAccumulatedMonth = function () {
  return money - expensesAmount;
};

let accumulatedMonth = getAccumulatedMonth();


let getTargetMonth = function () {
  return mission / accumulatedMonth;
};

let budgetDay = accumulatedMonth / 30;

if (getTargetMonth() > 0) {
  console.log(
    'Цель будет достигнута за ' + Math.ceil(getTargetMonth()) + ' месяц'
  );
} else {
  console.log('Цель не будет достигнута');
}

let getStatusIncome = function () {
  if (budgetDay > 1200) {
    return 'У вас высокий уровень дохода';
  } else if (budgetDay > 600 && budgetDay < 1200) {
    return 'У вас средний уровень дохода';
  } else if (budgetDay < 600 && budgetDay > 0) {
    return 'К сожалению у вас уровень дохода ниже среднего';
  } else {
    return 'Что то пошло не так!';
  }
};

console.log(getStatusIncome());


/*let money = +prompt('Ваш месячный доход?');
console.log(money);

let addExpenses = prompt(
  'Перечислите возможные расходы за рассчитываемый период через запятую'
);
console.log(addExpenses);

let deposit = confirm('Есть ли у вас депозит в банке?');
console.log(deposit);*/
