const {  Menu } = require('../../models');
const BaseService = require('../BaseServices');

class MenuService extends BaseService {
    constructor() {
        super(Menu);
    }
}

module.exports = new MenuService();
