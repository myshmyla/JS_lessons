'use strict';
//let isNumber = function (n) {
// return !isNaN(parseFloat(n)) && isFinite(n);
//};

let money,
  start = function () {
    do {
      money = prompt('Ваш месячный доход?');
    } while (isNaN(parseFloat(money)));
  };

start();

let income = 'Фриланс',
  addExpenses = prompt(
    'Перечислите возможные расходы за рассчитываемый период через запятую'
  ),
  deposit = confirm('Есть ли у вас депозит в банке?'),
  mission = 50000,
  period = 3;

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

  for (let i = 0; i < 2; i++) {
    expenses[i] = prompt('Введите обязательную статью расходов?');
    do {
      sum += +prompt('Во сколько это обойдется?'); // Здесь добавил 2 плюса;
    } while (isNaN(sum) || sum === '' || sum === null);
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
