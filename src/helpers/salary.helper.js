const weekDaysPattern = /^MO|^TU|^WE|^TH|^FR/;
const weekEndPattern = /^SA|^SU/;
const pattern = /^MO|^TU|^WE|^TH|^FR|^SA|^SU/;
let salaryWeekDays;
let salaryWeekEnds;
let moneyPerDay = 0;
let salaryToPay = 0;
const salaryHelper = {}

salaryHelper.calculateSalary = (employees) => {
    employees.forEach(employee => {
        salaryWeekDays = 0;
        salaryWeekEnds = 0;
        const weekDays = employee.daysWorked.filter(day => new RegExp(weekDaysPattern, 'i').test(day));
        const weekEnd = employee.daysWorked.filter(day => new RegExp(weekEndPattern, 'i').test(day));
        processEmployeeWork(weekDays, 'WEEKDAYS');
        processEmployeeWork(weekEnd, 'WEEKEND');
        salaryToPay = salaryWeekDays + salaryWeekEnds;
        console.log(`The amount to pay ${employee.name} is: ${salaryToPay} USD`);
    });
}
function processEmployeeWork (days, weekTime) {
    let arrTimeInSeconds;
    days.forEach(day => {
        arrTimeInSeconds = []
        const time = day.replace(pattern, '').split('-');
        time.forEach(value => {
            const seconds = hourToSeconds(value);
            arrTimeInSeconds.push(parseInt(seconds));
        });
        salaryWeekDays = salaryWeekDays + calculateMoneyPerDay(arrTimeInSeconds, weekTime);
    });
}
function hourToSeconds(hour) {
    const arr = hour.split(':');
    return (+arr[0]) * 60 * 60 + (+arr[1]) * 60;
}
function calculateMoneyPerDay (timeInSeconds, weekTime){
    const numberOfHoursWorked = calculateNumberOfHoursWorked(timeInSeconds);
    if(timeInSeconds[0] >= 60 && timeInSeconds[1] <= 32400) {
        weekTime === 'WEEKDAYS' ? moneyPerDay = 25*numberOfHoursWorked : moneyPerDay = 30*numberOfHoursWorked
    } else if (timeInSeconds[0] > 32400 && timeInSeconds[1] <= 64800) {
        weekTime === 'WEEKDAYS' ? moneyPerDay = 15*numberOfHoursWorked : moneyPerDay = 20*numberOfHoursWorked
    } else if((timeInSeconds[0] > 64800 && timeInSeconds[1] <= 86400) || (timeInSeconds[0] > 64800 && timeInSeconds[1] < 60)) {
        weekTime === 'WEEKDAYS' ? moneyPerDay = 20*numberOfHoursWorked : moneyPerDay = 25*numberOfHoursWorked;
    }
    return moneyPerDay;
}
function calculateNumberOfHoursWorked (timeInSeconds) {
    return (timeInSeconds[1] - timeInSeconds[0])/3600;
}
module.exports = salaryHelper
