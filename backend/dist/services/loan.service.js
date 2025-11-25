"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoanService = void 0;
const calculator_1 = require("../utils/calculator");
class LoanService {
    static calculateLoan(input) {
        const { principal, interestRate, tenureMonths } = input;
        const emi = (0, calculator_1.calculateEMI)(principal, interestRate, tenureMonths);
        const totalPayment = Math.round(emi * tenureMonths * 100) / 100;
        const totalInterest = Math.round((totalPayment - principal) * 100) / 100;
        const amortizationSchedule = (0, calculator_1.calculateAmortizationSchedule)(principal, interestRate, tenureMonths);
        return {
            emi,
            totalPayment,
            totalInterest,
            amortizationSchedule
        };
    }
}
exports.LoanService = LoanService;
