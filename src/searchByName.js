/**
 * Use a binary search to find the customer with given name
 * @param {string} firstName
 * @param {string} lastName
 * @param {array} customers
 */
function searchByName(firstName, lastName, customers) {
    let low = 0;
  let high = customers.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const comparison = lastName.localeCompare(customers[mid].lastName) || firstName.localeCompare(customers[mid].firstName);
    if (comparison === 0) return mid;
    else if (comparison > 0) low = mid + 1;
    else high = mid - 1;
  }
  return -1;
}

module.exports = searchByName;
