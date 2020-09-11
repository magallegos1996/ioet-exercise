const Employee = require('../models/Employee')
const salaryHelper = require('./salary.helper')
const employees = [];
const inputProcessor = {};

inputProcessor.processInput = (input) => {
    const data = input.trim().replace('00:00', '24:00').split(/[\n\r]/g);
    data.filter(element => element !== '').forEach(value => {
        const arr = value.split("=");
        const name = arr[0];
        const daysWorked = arr[1].split(',');
        const employee = new Employee(name, daysWorked);
        employees.push(employee);
    });
    salaryHelper.calculateSalary(employees);
}

module.exports = inputProcessor
