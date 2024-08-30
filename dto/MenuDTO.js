class MenuDTO {
    constructor({ menuName, menuCategory, price, deletedAt }) {
        this.menuName = menuName;
        this.menuCategory = menuCategory;
        this.price = price;
        this.deletedAt = deletedAt;
    }
}

module.exports = MenuDTO;
