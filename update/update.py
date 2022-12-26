"""Alters the key value for the dictionary passed using the function passed.

    Arguments:
        d (dictionary): The dictionary to be updated.
        key (string): The key to the value to be updated.
        func (function): The function that alters the value of the key passed.
    
    Returns:
        dictionary: The new dictionary.
"""
def update(d, key, func):
    if d is None:
        return d
    else:
        d[key] = func(d[key])
        return d

"""Alters the value when it's inside a nested dictionary.
    Arguments:
        d (dictionary): The dictionary to be updated.
        key (list): A list of strings representing the path to the value to be altered.
        func (function): The function that alters the value of the key passed.
    
    Returns:
        dictionary: The new dictionary.
"""
def nestedUpdate(d, keys, func):
    if len(keys) < 1:
        raise Exception("Atleast one key is required")
    elif (len(keys) == 1):
        update(d, keys[0], func)
        return d
    else:
        return nestedUpdate(d[keys[0]], keys[1:], func)
    return