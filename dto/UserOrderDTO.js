class UserOrderDTO {
    constructor({ customerid, deletedAt }) {
        this.customerid = customerid;
        this.deletedAt = deletedAt;
    }
}

module.exports = UserOrderDTO;
