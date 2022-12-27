/**
 * Updates property of object that's been passed.
 * @param obj - The object we're updating.
 * @param key - The key to the object value we're updating.
 * @param func - The function that updates our value.
 * @returns The updated object.
 */
const update = (
    obj: { [key: string]: any },
    key: string,
    func: (arg: any) => any
): { [key: string]: any } => {
    if (obj !== null) {
        obj[key] = func(obj[key]);
    }
    return obj;
}

/**
 * Functional tool that updates a value in an nested object. User must know the path otherwise will not work.
 * Requires update() in the same scope in order to work.
 * @param obj The object that needs to be altered.
 * @param keys An array of keys to the path of the value to be updated.
 * @param func The function that updates the object's value.
 * @returns The modified object.
 */
const nestedUpdate = (
    obj: { [key: string]: any },
    keys: string[],
    func: (arg: any) => any
): { [key: string]: any } => {
    if (keys.length > 1) {
        nestedUpdate(obj[keys[0]], keys.slice(1, keys.length), func);
    } else if (keys.length === 1) {
        update(obj, keys[0], func);
    } else {
        throw new Error("Atleast one key is required");
    }
    return obj;
}