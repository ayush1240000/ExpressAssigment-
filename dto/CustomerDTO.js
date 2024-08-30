class CustomerDTO {
    constructor({ userId, deletedAt }) {
        this.userId = userId;
        this.deletedAt = deletedAt;
    }
}

module.exports = CustomerDTO;
