function HashMap() {
    // Get hash code for the key
    const hash = (key, tableSize) => {
        // Initialize hash code to 0
        let hashCode = 0;

        // Prime number for hash calculation
        const primeNumber = 31;

        // Iterate through each element of the key
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
            hashCode = hashCode % tableSize;
        }

        // Return final hash code
        return hashCode;
    };

    return {
        hash
    };
}

export { HashMap };