export interface LoanInput {
  principal: number;
  interestRate: number;
  tenureMonths: number;
  processingFee?: number;
}

export interface AmortizationItem {
  month: number;
  interestPaid: number;
  principalPaid: number;
  remainingBalance: number;
}

export interface LoanResult {
  emi: number;
  totalPayment: number;
  totalInterest: number;
  amortizationSchedule: AmortizationItem[];
}
