"""A function that takes a list of values and returns a new list of unique values.
        
    Args:
        list (list): The list of values the function iterates through to determine unique values.
        iteratee (function): A function that operates on each item in the list.
    Returns:
        uniqueList (list): A list of unique values found.
    
    Note:
        For dictionaries, the function requires the second argument to be a function that 
        returns the dictionary key to iteratee based on.
"""
def unique(list, iteratee=lambda o: o):
    uniqueDict = {}
    uniqueList = []
    for i in list:
        # Determine type of operation needed
        val = iteratee(i) if iteratee else i
        if val not in uniqueDict.keys():
            uniqueDict[val] = True
            uniqueList.append(i)
    return uniqueList