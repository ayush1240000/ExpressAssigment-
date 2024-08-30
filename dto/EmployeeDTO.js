class EmployeeDTO {
    constructor({ userid,role, deletedAt }) {
        this.userid = userid;
        this.role = role;
        this.deletedAt = deletedAt;
    }
}

module.exports = EmployeeDTO;
