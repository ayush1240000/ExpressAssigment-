class DinnerTableDTO {
    constructor({ tableno, status, customerid, employeeid, deletedAt }) {
        this.tableno = tableno;
        this.status = status;
        this.customerid = customerid;
        this.employeeid = employeeid;
        this.deletedAt = deletedAt;
    }
}

module.exports = DinnerTableDTO;
