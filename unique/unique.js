/**
 * Function that returns a list of unique values in the array passed.
 * 
 * @param arr - Array to iterate through and determine unique values
 * @param iteratee - Function that alters value if needed or handles objects.
 * 
 * @returns Array of values that are unique.
 * 
 */
const unique = (arr, iteratee = (o) => o) => {
    let uniqueVals = {};
    let newList = [];
    arr.forEach(i => {
        const val = iteratee(i);
        if (!uniqueVals.hasOwnProperty(val)) {
            uniqueVals[val] = true;
            newList.push(i);
        }
    })
    return newList;
}