class SalaryDTO {
    constructor({ salaryAmount,employeeid, deletedAt }) {
        this.salaryAmount = salaryAmount;
        this.employeeid = employeeid;
        this.deletedAt = deletedAt;
    }
}

module.exports = SalaryDTO;
