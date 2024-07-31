import { HashMap } from "./hashMap.js";

function HashSet() {
    let capacity = 16;
    const loadFactor = 0.8;
    let size = 0;
    let hashTable = new Array(capacity);

    // Create a new instance of HashMap for hash functions
    const hashMap = HashMap();
    const hash = hashMap.hash;
    const resize = hashMap.resize;

    // Set the value of the key
    const set = (value) => {
        const index = hash(value);

        // Initialize the bucket if it does not exist
        if (!hashTable[index]) {
            hashTable[index] = [];
        }

        // Check if the key already exists
        if (!hashTable[index].some(item => item === value)) {
            hashTable[index].push(value);
            size += 1;

            // Resize if necessary
            if (size > loadFactor * capacity) {
                resize();
            }
        }
    };

    // Check if the key exists
    const has = (key) => {
        const index = hash(key);
        return (hashTable[index] && hashTable[index].includes(key)) ? true : false;
    };

    // Remove the specified key
    const remove = (key) => {
        const index = hash(key);

        // Check if the bucket exists and contains the key
        if (hashTable[index]) {
            // Find the index of the key in the bucket
            const keyIndex = hashTable[index].indexOf(key);

            // If the key is found, remove it
            if (keyIndex !== -1) {
                hashTable[index].splice(keyIndex, 1);
                size -= 1;
                return true;
            }
        }

        // Key is not found
        return false;
    };

    // Get the number of stored keys in the hash table
    const length = () => {
        let count = 0;

        if (Array.isArray(hashTable)) {
            hashTable.forEach(bucket => {
                if (bucket) {
                    count += bucket.length;
                }
            });
        }

        return count;
    };

    // Removes all entries in the hash table
    const clear = () => {
        if (Array.isArray(hashTable)) {
            hashTable.forEach(bucket => {
                if (bucket) {
                    bucket.splice(0, bucket.length);
                }
            });
        }
    };

    return {
        set,
        has,
        remove,
        length,
        clear
    };
}

export { HashSet };
