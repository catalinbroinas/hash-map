function HashMap() {
    let capacity = 16;
    const loadFactory = 0.8;
    const hashTable = new Array(capacity);

    // Get hash code for the key
    const hash = (key) => {
        // Initialize hash code to 0
        let hashCode = 0;

        // Prime number for hash calculation
        const primeNumber = 31;

        // Iterate through each element of the key
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
            hashCode = hashCode % capacity;
        }

        // Return final hash code
        return hashCode;
    };

    // Set value for the key
    const set = (key, value) => {
        const index = hash(key);

        // Check if index is within bounds
        if (index < 0 || index >= capacity) {
            throw new Error('Index is out of bound.');
        }

        // Initialize the bucket if it does not exist
        if (!hashTable[index]) {
            hashTable[index] = [];
        }

        // Check if the key already exists and update its value
        for (const item of hashTable[index]) {
            if (item.key === key) {
                item.value = value;
                return;
            }
        }

        // Add new key-value pair to the bucket
        hashTable[index].push({ key, value });
    };

    // Get value of the key
    const get = (key) => {
        const index = hash(key);

        // Check if the bucket exists before iterating
        if (hashTable[index]) {
            for (const item of hashTable[index]) {
                if (item.key === key) {
                    // Return the value if the key matches
                    return item.value;
                }
            }
        }

        // Return null if the key is not found
        return null;
    };

    // Check if the key exits in the hash table
    const has = (key) => {
        const index = hash(key);

        // Check if the bucket exists before iterating
        if (hashTable[index]) {
            for (const item of hashTable[index]) {
                // Check if the key matches
                if (item.key === key) {
                    return true;
                }
            }
        }

        // Return false if the key is not found
        return false;
    };

    return {
        set,
        get,
        has
    };
}

export { HashMap };
