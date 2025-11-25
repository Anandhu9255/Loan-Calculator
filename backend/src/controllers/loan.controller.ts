import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { LoanService } from '../services/loan.service';

const loanInputSchema = z.object({
  principal: z.number().positive(),
  interestRate: z.number().positive(),
  tenureMonths: z.number().int().positive(),
  processingFee: z.number().optional()
});

export class LoanController {
  static async calculateLoan(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const validatedInput = loanInputSchema.parse(req.body);
      const result = LoanService.calculateLoan(validatedInput);
      res.json(result);
    } catch (error) {
      next(error);
    }
  }
}
