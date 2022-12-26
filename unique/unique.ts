/**
 * Function that returns a list of unique values in the array passed.
 * 
 * @param arr - Array to iterate through and determine unique values
 * @param iteratee - Function that alters value if needed or handles objects.
 * 
 * @returns Array of values that are unique.
 * 
 */
const unique = <T>(arr: T[], iteratee: Function = (o: T) => o): T[] => {
    let uniqueVals: {[key: string]: boolean} = {};
    let newList: T[] = [];
    arr.forEach(i => {
        const val = iteratee(i);
        if (!uniqueVals.hasOwnProperty(val)) {
            uniqueVals[val] = true;
            newList.push(i);
        }
    })
    return newList;
}