class OrderMenuDTO {
    constructor({ orderid, menuid, quantity, deletedAt }) {
        this.orderid = orderid;
        this.menuid = menuid;
        this.quantity = quantity;
        this.deletedAt = deletedAt;
    }
}

module.exports = OrderMenuDTO;
