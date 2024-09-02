
// const {}  = require('../models');
const TransactionService = require('../services/transactionService');
const getPagination = require('../utils/pagination');
const getSorting = require('../utils/sorting'); // Import sorting utility
const errorCodes = require('../services/statuscode');
const {Op}=require('sequelize')

const createController = (service, DTO) => ({
    add: async (req, res) => {
        try {
            const result = await TransactionService.executeTransaction(async (transaction) => {
                const dto = new DTO(req.body);
                return await service.add(dto, transaction);
            });
            res.status(200).send(errorCodes.done);
        } catch (error) {
            res.status(500).send( errorCodes.invalidentery);
        }
    },

  getAll: async (req, res) => {
        try {
            // Parsing page and size from query parameters
            const pageAsNumber = Number.parseInt(req.query.page);
            const sizeAsNumber = Number.parseInt(req.query.size);
            const page = !Number.isNaN(pageAsNumber) && pageAsNumber > 0 ? pageAsNumber : 1;
            const size = !Number.isNaN(sizeAsNumber) && sizeAsNumber > 0 && sizeAsNumber < 100 ? sizeAsNumber : 10;
            const { limit, offset } = getPagination(page, size);

            // Building search parameters based on query
            const searchTerm = req.query.search || '';
            const searchParams = searchTerm ? {
                [Op.or]: [
                    { fname: { [Op.like]: `%${searchTerm}%` } },
                    // { description: { [Op.like]: `%${searchTerm}%` } }
                ]
            } : {};

            // Building sorting options
            const { sortField, sortOrder } = req.query;
            const sortOptions = [[sortField || 'createdAt', (sortOrder || 'ASC').toUpperCase()]];

            // Fetching results
            const results = await service.search(searchParams, {
                limit,
                offset,
                order: sortOptions,
            });

            // Sending response
            res.send({
                content: results.rows,
                totalPages: Math.ceil(results.count / size),
            });
        } catch (error) {
            res.status(500).send(errorCodes.missingentery);
        }
    },

    getOne: async (req, res) => {
        try {
            const id = req.params.userid;
            const item = await service.getById(id);
            if (item) {
                res.status(200).send(item);
            } else {
                res.status(404).send(errorCodes.missingentery);
            }
        } catch (error) {
            res.status(500).send(errorCodes.missingentery);
        }
    },

    delete: async (req, res) => {
        try {
            const result = await TransactionService.executeTransaction(async (transaction) => {
                const id = req.params.id;
                return await service.delete(id, transaction);
            });

            if (result) {
                res.status(200).send(errorCodes.deleted);
            } else {
                res.status(404).send(errorCodes.missingentery);
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
                res.status(200).send(errorCodes.updated);
            } else {
                res.status(404).send(errorCodes.missingentery);
            }
        } catch (error) {
            res.status(500).send({ message: 'Failed to update item', details: error.message });
        }
    },


});

module.exports = createController;
