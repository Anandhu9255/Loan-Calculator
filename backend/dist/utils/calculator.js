"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateEMI = calculateEMI;
exports.calculateAmortizationSchedule = calculateAmortizationSchedule;
function calculateEMI(principal, annualInterestRate, tenureMonths) {
    const monthlyRate = annualInterestRate / 100 / 12;
    const emi = principal * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths) / (Math.pow(1 + monthlyRate, tenureMonths) - 1);
    return Math.round(emi * 100) / 100;
}
function calculateAmortizationSchedule(principal, annualInterestRate, tenureMonths) {
    const monthlyRate = annualInterestRate / 100 / 12;
    const emi = calculateEMI(principal, annualInterestRate, tenureMonths);
    const schedule = [];
    let remainingBalance = principal;
    for (let month = 1; month <= tenureMonths; month++) {
        const interestPaid = Math.round(remainingBalance * monthlyRate * 100) / 100;
        const principalPaid = Math.round((emi - interestPaid) * 100) / 100;
        remainingBalance = Math.round((remainingBalance - principalPaid) * 100) / 100;
        schedule.push({
            month,
            interestPaid,
            principalPaid,
            remainingBalance
        });
    }
    return schedule;
}
