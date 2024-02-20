/**
 * A sort algorithm that implements a stable sort
 * @param {function} compare The comparator function used in sorting
 * @param {array} elements The array to be sorted
 */
function sort(compare, elements) {
 // Implementing a simple stable sort: Bubble Sort for demonstration
  let n = elements.length;
  let swapped;
  do {
    swapped = false;
    for (let i = 1; i < n; i++) {
      if (compare(elements[i - 1], elements[i]) > 0) {
        // Swap elements
        [elements[i - 1], elements[i]] = [elements[i], elements[i - 1]];
        swapped = true;
      }
    }
  } while (swapped);
  return elements;
}

module.exports = sort;
