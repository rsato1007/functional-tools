<?php
/**
 * Updates the property of the associative array using the function passed.
 * 
 * @param Array $arr - associative array to update.
 * @param String $key - key of property to be updated.
 * @param Function $func - function that updates the property.
 * 
 * @return Array Updated array.
 */
function update(array $arr, string $key, callable $func): array {
    if (!is_null($arr)) {
        $arr[$key] = $func($arr[$key]);
    }
    return $arr;
}

/**
 * Updates a property that's inside a nested associative array.
 * 
 * @param Array $arr - associative array to update.
 * @param Array $keys - Array representing path to nested property in $arr passed.
 * @param Function $func - function that updates the property.
 * 
 * @return Array Updated array.
 */
function nestedUpdate(array $arr, array $keys, callable $func): array {
    if (count($keys) > 1) {
        return nestedUpdate($arr[$keys[0]], array_slice($keys, 1), $func);
    } else if (count($keys) == 1) {
        return update($arr, $keys[0], $func);
    } else {
        throw new Exception("atleast one key must be passed");
    }
}