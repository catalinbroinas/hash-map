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

    return {
        set,
        has
    };
}

export { HashSet };
