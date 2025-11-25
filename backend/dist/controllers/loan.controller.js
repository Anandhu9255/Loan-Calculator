"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoanController = void 0;
const zod_1 = require("zod");
const loan_service_1 = require("../services/loan.service");
const loanInputSchema = zod_1.z.object({
    principal: zod_1.z.number().positive(),
    interestRate: zod_1.z.number().positive(),
    tenureMonths: zod_1.z.number().int().positive(),
    processingFee: zod_1.z.number().optional()
});
class LoanController {
    static async calculateLoan(req, res, next) {
        try {
            const validatedInput = loanInputSchema.parse(req.body);
            const result = loan_service_1.LoanService.calculateLoan(validatedInput);
            res.json(result);
        }
        catch (error) {
            next(error);
        }
    }
}
exports.LoanController = LoanController;
