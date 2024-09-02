
/**
 * @param {number} page - The page number (1-based index).
 * @param {number} pageSize - The number of items per page.
 * @returns {object} Pagination options including limit and offset.
 */
const getPagination = (page = 1, pageSize = 2) => {
    const limit = pageSize;
    const offset = (page - 1) * pageSize;
    return { limit, offset };
};

module.exports =  getPagination ;
