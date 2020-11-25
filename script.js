// Первое задание
//Следующим переменным присвоить значения
const money = 500000;
const income = 'freelance';
const addExpenses = 'Internet, Taxi, Communal services';
const deposit = true;
const mission = 9999999999999;
const period = 10;

// Второе задание
//Вывести в консоль тип данных значений переменных money, income, deposit
console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);

//Вывести в консоль длину строки addExpenses
console.log(addExpenses.length);

//Вывести в консоль “Период равен (period) месяцев” и “Цель заработать (mission) рублей/долларов/гривен/юани”

console.log('Период равен: ' + period + ' месяцев');
console.log('Цель заработать: ' + mission + ' рублей');

//Привести строку addExpenses к нижнему регистру и разбить строку на массив, вывести массив в консоль
console.log(addExpenses.length);
console.log(addExpenses.toLowerCase().split(', '));

//Объявить переменную budgetDay и присвоить дневной бюджет (доход за месяц / 30)
let budgetMonth = 135000;
let month = 30;
let budgetDay = budgetMonth / month;

//Вывести в консоль budgetDay
console.log(budgetDay);
