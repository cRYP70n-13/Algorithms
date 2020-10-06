from random import choice

class RandomizedSet:
	"""this method uses Hashmap and an ArrayList."""
	def __init__(self):
		self.dict = {}
		self.list = []


def insert(self, val: int) -> bool:
    """
    Inserts a value to the set. Returns true if the set did not already contain the specified element.
    """
    if val not in self.dict:
        self.list.append(val)
        index = self.list.index(val)
        self.dict[val] = index
        return True
    return False


def remove(self, val: int) -> bool:
    """
    Removes a value from the set. Returns true if the set contained the specified element.
    """
    if val in self.dict:
        last_element, index = self.list[-1], self.dict[val]
        # swapping the last element in the list with the element to be deleted.
        self.list[-1], self.list[index] = val,  last_element
        # now add the right value in the dict
        self.dict[last_element] = index
        # pop last element from the list and remove the elem from dict
        self.list.pop()
        # remove the k,v from the dict
        del self.dict[val]
        return True
    return False


def getRandom(self) -> int:
    """
    Get a random element from the set.
    """
    return choice(self.list)
