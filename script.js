'use strict';
// let isNumber = function (n) {
//   return !isNaN(parseFloat(n)) && isFinite(n);
// };

// let money;
// let start = function () {
//   do {
//     money = prompt('Ваш месячный доход?');
//   } while (!isNumber(money));
// };
// start();

// let appData = {
//   income: {},
//   addIncome: [],
//   expenses: {},
//   addExpenses: [],
//   deposit: false,
//   percentDeposit: 0,
//   moneyDeposit: 0,
//   mission: 100000,
//   period: 12,
//   budget: money,
//   budgetDay: 0,
//   budgetMonth: 0,
//   expensesMonth: 0,
//   asking: function () {
//     if (confirm('Есть ли у вас дополнительный источник заработка?')) {
//       let itemIncome = prompt(
//         'Какой у вас дополнительный заработок?',
//         'Таксую'
//       );
//       let cashIncome = prompt(
//         'Сколько в месяц вы на этом зарабатываете?',
//         10000
//       );
//       appData.income[itemIncome] = cashIncome;
//     }
//     let addExpenses = prompt(
//       'Перечислите возможные расходы за рассчитываемый период через запятую'
//     );
//     appData.addExpenses = addExpenses.toLowerCase().split(', ');
//     appData.deposit = confirm('Есть ли у вас депозит в банке?');
//     let expensesItem;
//     let amount;
//     for (let i = 0; i < 2; i++) {
//       expensesItem = prompt('Введите обязательную статью расходов?');
//       do {
//         amount = prompt('Во сколько это обойдется?', '');
//         if (amount.trim() === '' || !isNumber(amount)) {
//           alert('Было введено не число, попробуйте еще раз');
//         }
//       } while (!isNumber(amount));

//       appData.expenses[expensesItem] = +amount;
//     }
//   },
//   getExpensesMonth: function () {
//     let sum = 0;
//     for (let key in appData.expenses) {
//       sum += appData.expenses[key];
//     }
//     appData.expensesMonth = sum;
//     return sum;
//   },
//   getBudget: function () {
//     appData.budgetMonth = appData.budget - appData.getExpensesMonth();
//     appData.budgetDay = Math.floor(appData.budgetMonth / 30);
//   },
//   getStatusIncome: function () {
//     if (appData.budgetDay >= 1200) {
//       console.log('У вас высокий уровень дохода');
//     } else if (appData.budgetDay >= 600 && appData.budgetDay < 1200) {
//       console.log('У вас средний уровень дохода');
//     } else if (appData.budgetDay >= 0 && appData.budgetDay < 600) {
//       console.log('У вас низкий уровень дохода');
//     } else if (appData.budgetDay < 0) {
//       console.log('Что-то пошло не так');
//     }
//   },
//   getTargetMonth: function () {
//     return Math.ceil(appData.mission / appData.budgetMonth);
//   },
//   getInfoDeposit: function () {
//     if (appData.deposit) {
//       appData.percentDeposit = prompt('Какой годовой процент?', '10');
//       appData.moneyDeposit = prompt('Какая сумма заложена?', 10000);
//     }
//   },
//   calcInfoDeposit: function () {
//     return appData.budgetMonth * appData.period;
//   },
// };
// appData.asking();

// console.log(
//   'Сумма всех обязательных расходов за месяц: ',
//   appData.getExpensesMonth()
// );

// appData.getBudget();
// appData.getTargetMonth();

// if (appData.getTargetMonth < 0) {
//   console.log('Цель не будет достигнута');
// } else {
//   console.log(
//     'Цель будет достигнута за: ' + appData.getTargetMonth() + ' месяцев'
//   );
// }

// appData.getStatusIncome();

// for (let i in appData) {
//   console.log(`Наша программа включает в себя данные: ${i} - ${appData[i]}`);
// }

console.log(document.getElementById('start'));
console.log(document.getElementsByTagName('button'));
console.log(document.querySelector('#deposit-check'));
console.log(document.querySelectorAll('.additional_income-item'));
console.log(document.getElementsByClassName('.result-total'));
console.log(document.querySelector('#deposit-check'));