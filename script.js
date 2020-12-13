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
  income: {},
  addIncome: [],
  expenses: {},
  addExpenses: [],
  deposit: false,
  mission: 50000,
  period: 3,
  asking: function () {
    let addExpenses = prompt(
      'Перечислите возможные расходы за рассчитываемый период через запятую'
    );
    appData.addExpenses = addExpenses.toLowerCase().split(',');
    appData.deposit = confirm('Есть ли у вас депозит в банке?');
    for (let i = 0; i < 2; i++) {
      appData.expenses[i] = prompt('Введите обязательную статью расходов?');
      do {
        question = prompt('Во сколько это обойдется?');
      } while (isNaN(question) || question === '' || question === null);
      sum += +question;
    }
  },
  budget: money,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  getExpensesMonth: function () {
    let sum = 0,
      question;

    return sum;
  },
  getAccumulatedMonth: function () {
    return money - expensesAmount;
  },
  getTargetMonth: function () {
    return appData.mission / appData.getAccumulatedMonth(); //accumulatedMonth;
  },
  getStatusIncome: function () {
    if (budgetDay > 1200) {
      return 'У вас высокий уровень дохода';
    } else if (budgetDay > 600 && budgetDay < 1200) {
      return 'У вас средний уровень дохода';
    } else if (budgetDay < 600 && budgetDay > 0) {
      return 'К сожалению у вас уровень дохода ниже среднего';
    } else {
      return 'Что то пошло не так!';
    }
  },
};
appData.asking();
//showTypeOf(appData.money);
//showTypeOf(appData.income);
//showTypeOf(appData.deposit);

let expenses = [];

let expensesAmount = appData.getExpensesMonth();

console.log('Расходы за месяц: ' + expensesAmount);

let accumulatedMonth = appData.getAccumulatedMonth();

let budgetDay = accumulatedMonth / 30;

if (appData.getTargetMonth() > 0) {
  console.log(
    'Цель будет достигнута за ' + Math.ceil(appData.getTargetMonth()) + ' месяц'
  );
} else {
  console.log('Цель не будет достигнута');
}

console.log(appData.getStatusIncome());
