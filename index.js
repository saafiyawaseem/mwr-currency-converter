#!/usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
console.log(chalk.blue.bold("\n\t welcome to 'my-code'mwr-currency converter\n"));
const currency = {
    USD: 1, //base currency:
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
    AUD: 1.65,
    CUD: 1.3,
    JYP: 113,
};
let answer = await inquirer.prompt([
    {
        name: 'from',
        message: "choose the currency convert from",
        type: 'list',
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR', 'AUD', 'CUD', 'JYP']
    },
    {
        name: 'to',
        message: "choose the currency convert into",
        type: 'list',
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR', 'AUD', 'CUD', 'JYP']
    },
    {
        name: 'amount',
        message: "Enter your amount",
        type: 'number',
    },
]);
let fromAmount = currency[answer.from];
let toAmount = currency[answer.to];
let amount = answer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
//console.log(fromAmount);
//console.log(toAmount);
//console.log(amount);
console.log(convertedAmount.toFixed(2));
