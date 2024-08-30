class BillDTO {
    constructor({ billid, amount, status, created_at, updated_at, customerid, tableno, employeeid, deletedAt }) {
        this.billid = billid;
        this.amount = amount;
        this.status = status;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.customerid = customerid;
        this.tableno = tableno;
        this.employeeid = employeeid;
        this.deletedAt = deletedAt;
    }
}

module.exports = BillDTO;
