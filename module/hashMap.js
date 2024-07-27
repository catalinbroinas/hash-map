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

    return {
        hash
    };
}

export { HashMap };