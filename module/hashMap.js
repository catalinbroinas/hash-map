function HashMap() {
    let capacity = 16;
    const loadFactor = 0.8;
    let size = 0;
    let hashTable = new Array(capacity);

    // Get hash code for the key
    const hash = (key) => {
        let hashCode = 0;
        const primeNumber = 31;

        // Compute hash code based on key characters
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
            hashCode = hashCode % capacity;
        }

        return hashCode;
    };

    // Resize the hash table to a new capacity
    const resize = () => {
        const oldTable = hashTable;
        capacity *= 2;
        size = 0;

        // Create a new hash table with the updated capacity
        hashTable = new Array(capacity);

        // Rehash all entries from the old table to the new table
        for (const bucket of oldTable) {
            if (bucket) {
                for (const item of bucket) {
                    set(item.key, item.value);
                }
            }
        }
    };

    // Set value for the key
    const set = (key, value) => {
        const index = hash(key);

        // Initialize the bucket if it does not exist
        if (!hashTable[index]) {
            hashTable[index] = [];
        }

        // Update value if the key already exist
        for (const item of hashTable[index]) {
            if (item.key === key) {
                item.value = value;
                return;
            }
        }

        // Add new key-value pair to the bucket
        hashTable[index].push({ key, value });
        size += 1;

        // Check if resize is needed
        if (size > capacity * loadFactor) {
            resize();
        }
    };

    // Get value of the key
    const get = (key) => {
        const index = hash(key);

        // Check if bucket exists and find key
        if (hashTable[index]) {
            for (const item of hashTable[index]) {
                if (item.key === key) {
                    return item.value;
                }
            }
        }

        // Key is not found
        return null;
    };

    // Check if the key exits in the hash table
    const has = (key) => {
        const index = hash(key);

        // Check if bucket exists and find key
        if (hashTable[index]) {
            for (const item of hashTable[index]) {
                if (item.key === key) {
                    return true;
                }
            }
        }

        // Key is not found
        return false;
    };

    // Remove entry with the specified key
    const remove = (key) => {
        const index = hash(key);

        // Check if bucket exists and find key
        if (hashTable[index]) {
            for (const [i, item] of hashTable[index].entries()) {
                if (item.key === key) {
                    hashTable[index].splice(i, 1);
                    size -= 1;
                    return true;
                }
            }
        }

        // Key is not found
        return false;
    };

    // Get the number of stored keys in the hash table
    const length = () => {
        let count = 0;

        // Count entries in each bucket
        for (const bucket of hashTable) {
            if (bucket) {
                count += bucket.length;
            }
        }

        return count;
    };

    // Removes all entries in the hash table
    const clear = () => {
        // Empty each bucket
        for (const bucket of hashTable) {
            if (bucket) {
                bucket.splice(0, bucket.length);
            }
        }

        // Reset size
        size = 0;
    };

    // Get an array containing all the keys inside the hash table
    const keys = () => {
        const allKeys = [];

        // Collect keys from each bucket
        for (const bucket of hashTable) {
            if (bucket) {
                for (const item of bucket) {
                    allKeys.push(item.key);
                }
            }
        }

        return allKeys;
    };

    // Get an array containing all the values inside the hash table
    const values = () => {
        const allValues = [];

        // Collect values from each bucket
        for (const bucket of hashTable) {
            if (bucket) {
                for (const item of bucket) {
                    allValues.push(item.value);
                }
            }
        }

        return allValues;
    };

    // Get an array containing all entries ([key, value] pair)
    const entries = () => {
        const allEntries = [];

        // Collect [key, value] pairs from each bucket
        for (const bucket of hashTable) {
            if (bucket) {
                for (const item of bucket) {
                    allEntries.push([item.key, item.value]);
                }
            }
        }

        return allEntries;
    };

    return {
        set,
        get,
        has,
        remove,
        length,
        clear,
        keys,
        values,
        entries
    };
}

export { HashMap };
