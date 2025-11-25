import { Router } from 'express';
import { LoanController } from '../controllers/loan.controller';

const router = Router();

/**
 * @swagger
 * /loan/calculate:
 *   post:
 *     summary: Calculate loan EMI and amortization schedule
 *     tags: [Loan]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - principal
 *               - interestRate
 *               - tenureMonths
 *             properties:
 *               principal:
 *                 type: number
 *                 description: Loan principal amount
 *               interestRate:
 *                 type: number
 *                 description: Annual interest rate in percentage
 *               tenureMonths:
 *                 type: integer
 *                 description: Loan tenure in months
 *               processingFee:
 *                 type: number
 *                 description: Optional processing fee
 *     responses:
 *       200:
 *         description: Loan calculation result
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 emi:
 *                   type: number
 *                 totalPayment:
 *                   type: number
 *                 totalInterest:
 *                   type: number
 *                 amortizationSchedule:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       month:
 *                         type: integer
 *                       interestPaid:
 *                         type: number
 *                       principalPaid:
 *                         type: number
 *                       remainingBalance:
 *                         type: number
 */
router.post('/calculate', LoanController.calculateLoan);

export default router;
