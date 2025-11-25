import { LoanInput, LoanResult } from '../types/loan.types';
import { calculateEMI, calculateAmortizationSchedule } from '../utils/calculator';

export class LoanService {
  static calculateLoan(input: LoanInput): LoanResult {
    const { principal, interestRate, tenureMonths } = input;

    const emi = calculateEMI(principal, interestRate, tenureMonths);
    const totalPayment = Math.round(emi * tenureMonths * 100) / 100;
    const totalInterest = Math.round((totalPayment - principal) * 100) / 100;
    const amortizationSchedule = calculateAmortizationSchedule(principal, interestRate, tenureMonths);

    return {
      emi,
      totalPayment,
      totalInterest,
      amortizationSchedule
    };
  }
}
