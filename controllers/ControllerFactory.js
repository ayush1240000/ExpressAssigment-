
const TransactionService = require('../services/TransactionService');
const errorCodes = require('../services/statuscode');

const createController = (service, DTO) => ({
    add: async (req, res) => {
        try {
            const result = await TransactionService.executeTransaction(async (transaction) => {
                const dto = new DTO(req.body);
                const item = await service.add(dto, transaction);
                return item;
            });
            res.status(200).send(result);
        } catch (error) {
            res.status(500).send(errorCodes.Cerror );
        }
    },

    getAll: async (req, res) => {
        try {
            const items = await service.getAll();
            res.status(200).send(items);
        } catch (error) {
            res.status(500).send({ message: 'Failed to retrieve items', details: error.message });
        }
    },

    getOne: async (req, res) => {
        try {
            const id = req.params.id;
            const item = await service.getById(id);
            if (item) {
                res.status(200).send(item);
            } else {
                res.status(404).send({ message: `${service.name} not found` });
            }
        } catch (error) {
            res.status(500).send({ message: 'Failed to retrieve item', details: error.message });
        }
    },

    delete: async (req, res) => {
        try {
            const result = await TransactionService.executeTransaction(async (transaction) => {
                const id = req.params.id;
                const deletionResult = await service.delete(id, transaction);
                return deletionResult;
            });

            if (result) {
                res.status(200).send({ message: `${service.name} deleted successfully` });
            } else {
                res.status(404).send({ message: `${service.name} not found` });
            }
        } catch (error) {
            res.status(500).send({ message: 'Failed to delete item', details: error.message });
        }
    },

    update: async (req, res) => {
        try {
            const result = await TransactionService.executeTransaction(async (transaction) => {
                const id = req.params.id;
                const updateData = req.body;
                const [affectedRows] = await service.update(id, updateData, transaction);
                return affectedRows;
            });

            if (result > 0) {
                res.status(200).send({ message: `${service.name} updated successfully` });
            } else {
                res.status(404).send({ message: `${service.name} not found` });
            }
        } catch (error) {
            res.status(500).send({ message: 'Failed to update item', details: error.message });
        }
    },
});

module.exports = createController;
