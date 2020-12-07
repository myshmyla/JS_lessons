'use strict';
let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let money,
  start = function () {
    do {
      money = prompt('Ваш месячный доход?');
    } while (isNaN(parseFloat(money)));
  };

start();

let appData = {
  income: {}, // доп доходы, объект
  addIncome: [], // доп доходы массив
  expenses: {}, // доп расходы
  addExpenses: [], // массив с возможными расходами
  deposit: false, // депозит
  mission: 78000, // мисcия
  period: 3, // период
  asking: function () {
    let addExpenses = prompt(
      'Перечислите возможные расходы за рассчитываемый период через запятую?'
    );
    appData.addExpenses = addExpenses.toLowerCase().split(',');
    appData.deposit = confirm('Есть ли у вас депозит в банке?');
  },
};

let showTypeOf = function (item) {
  console.log(typeof item);
};
showTypeOf(money);
showTypeOf(appData.income);
showTypeOf(appData.deposit);

let expenses = [];

let getExpensesMonth = function () {
  let sum = 0,
    question;

  for (let i = 0; i < 2; i++) {
    expenses[i] = prompt('Введите обязательную статью расходов?');
    do {
      question = prompt('Во сколько это обойдется?');
    } while (isNaN(question) || question.trim() === '' || question === null);
    sum += +question;
  }
  return sum;
};

let expensesAmount = getExpensesMonth();

console.log('Расходы за месяц: ' + expensesAmount);

let getAccumulatedMonth = function () {
  return money - expensesAmount;
};

let accumulatedMonth = getAccumulatedMonth();

let getTargetMonth = function () {
  return appData.mission / getAccumulatedMonth();
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
