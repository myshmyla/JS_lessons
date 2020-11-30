'use strict';

let money = +prompt('Ваш месячный доход?');
console.log(money);

let addExpenses = prompt(
  'Перечислите возможные расходы за рассчитываемый период через запятую'
);
console.log(addExpenses);

let deposit = confirm('Есть ли у вас депозит в банке?');
console.log(deposit);

let expenses1 = prompt('Введите обязательную статью расходов?'),
  expenses1Amount = +prompt('Во сколько это обойдется?'),
  expenses2 = prompt('Введите обязательную статью расходов?'),
  expenses2Amount = +prompt('Во сколько это обойдется?');

console.log(addExpenses.toLowerCase().split(','));

let getExpensesMonth = function () {
  return expenses1Amount + expenses2Amount;
};
console.log('Расходы за месяц: ' + getExpensesMonth());

let getAccumulatedMonth = function () {
  return money - getExpensesMonth();
};

let accumulatedMonth = getAccumulatedMonth();

let mission = 999999;
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

/*let showTypeOf = function () {
  return;
};
showTypeOf(money);
showTypeOf(deposit);
showTypeOf(getExpensesMonth);*/
