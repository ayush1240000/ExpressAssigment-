const {  Menu } = require('../../models');
const BaseService = require('../baseServices');

class MenuService extends BaseService {
    constructor() {
        super(Menu);
    }
}

module.exports = new MenuService();
