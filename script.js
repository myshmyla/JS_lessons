'use strict';

let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let money;
let start = function () {
  do {
    money = prompt('Ваш месячный доход?');
  } while (!isNumber(money));
};
start();

let appData = {
  income: {},
  addIncome: [],
  expenses: {},
  addExpenses: [],
  deposit: false,
  percentDeposit: 0,
  moneyDeposit: 0,
  mission: 100000,
  period: 12,
  budget: money,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  asking: function () {
    if (confirm('Есть ли у вас дополнительный источник заработка?')) {
      let cashIncome, itemIncome;

      do {
        itemIncome = prompt('Какой у вас дополнительный заработок?', 'Таксую');
      } while (isNumber(itemIncome) || itemIncome === null);

      while (!isNumber(cashIncome)) {
        cashIncome = prompt('Сколько в месяц вы на этом зарабатываете?', 10000);
      }

      appData.income[itemIncome] = cashIncome;
    }

    let addExpenses;
    do {
      addExpenses = prompt(
        'Перечислите возможные расходы за рассчитываемый период через запятую'
      );
    } while (isNumber(addExpenses) || addExpenses === null);

    appData.addExpenses = addExpenses.toUpperCase().split(', ');
    appData.deposit = confirm('Есть ли у вас депозит в банке?');
    let expensesItem;
    let amount;
    for (let i = 0; i < 2; i++) {
      do {
        expensesItem = prompt('Введите обязательную статью расходов');
      } while (isNumber(expensesItem) || expensesItem === null);

      do {
        amount = prompt('Во сколько это обойдется?', '');
        if (amount.trim() === '' || !isNumber(amount)) {
          alert('Было введено не число, попробуйте еще раз');
        }
      } while (!isNumber(amount));

      appData.expenses[expensesItem] = +amount;
    }
  },
  getExpensesMonth: function () {
    let sum = 0;
    for (let key in appData.expenses) {
      sum += appData.expenses[key];
    }
    appData.expensesMonth = sum;
    return sum;
  },
  getBudget: function () {
    appData.budgetMonth = appData.budget - appData.getExpensesMonth();
    appData.budgetDay = Math.floor(appData.budgetMonth / 30);
  },
  getStatusIncome: function () {
    if (appData.budgetDay >= 1200) {
      console.log('У вас высокий уровень дохода');
    } else if (appData.budgetDay >= 600 && appData.budgetDay < 1200) {
      console.log('У вас средний уровень дохода');
    } else if (appData.budgetDay >= 0 && appData.budgetDay < 600) {
      console.log('У вас низкий уровень дохода');
    } else if (appData.budgetDay < 0) {
      console.log('Что-то пошло не так');
    }
  },
  getTargetMonth: function () {
    return Math.ceil(appData.mission / appData.budgetMonth);
  },

  //внутри метода getInfoDeposit нужно добавить проверки на цифру, как ранее у тебя были через цикл do while
  getInfoDeposit: function () {
    if (appData.deposit) {
      do {
        percentDeposit = prompt('Какой годовой процент?', '10');
      } while (!isNumber(percentDeposit));

      do {
        moneyDeposit = prompt('Какая сумма заложена?', 10000);
      } while (!isNumber(moneyDeposit));
    }
  },
  calcInfoDeposit: function () {
    return appData.budgetMonth * appData.period;
  },
};
appData.asking();

//вызов метода поправить на вывод поля объекта.
appData.getBudget();
appData.getTargetMonth();

if (appData.getTargetMonth < 0) {
  console.log('Цель не будет достигнута');
} else {
  console.log(
    'Цель будет достигнута за: ' + appData.getTargetMonth() + ' месяцев'
  );
}

appData.getStatusIncome();

for (let i in appData) {
  console.log(`Наша программа включает в себя данные: ${i} - ${appData[i]}`);
}
