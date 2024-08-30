

const { sequelize } = require('../models');
// const errorCodes = require('./statuscode');

class TransactionService {
    static async executeTransaction(callback) {
        const transaction = await sequelize.transaction();
        try {
            const result = await callback(transaction);
            await transaction.commit();
            return result;
        } catch (error) {
            await transaction.rollback();
            // Log the error for debugging purposes
            console.error('Transaction failed:', error.message);
            // Optionally, you can throw a custom error or return a specific error code
            // throw new CustomError('Transaction failed', 500); 
            throw error; // Re-throw the original error for further handling
        }
    }
}

module.exports = TransactionService;
