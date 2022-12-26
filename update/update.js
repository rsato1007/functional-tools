/**
 * Updates property of object that's been passed.
 * @param object - The object we're updating.
 * @param key - The key to the object value we're updating.
 * @param modify - The function that updates our value.
 * @returns The updated object.
 */
const update = (object, key, modify) => {
    if (object == null) {
        return object;
    } else {
        object[key] = modify(object[key]);
        return object;
    }
}

/**
 * Functional tool that updates a value in an nested object. User must know the path otherwise will not work.
 * Requires update() in the same scope in order to work.
 * @param object The object that needs to be altered.
 * @param keys An array of keys to the path of the value to be updated.
 * @param modify The function that updates the object's value.
 * @returns The modified object.
 */
const nestedUpdate = (object, keys, modify) => {

    if (keys.length === 0) {
        throw new Error("Atleast one key is required");
    }
    else if (keys.length === 1) {
        update(object, keys[0], modify);
        return object;
    } else {
        return nestedUpdate(object[keys[0]], keys.slice(1, keys.length), modify);
    }
}