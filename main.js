import { HashMap } from "./module/hashMap.js";

// Create an instance of HashMap
const myHashMap = HashMap();

// Display the initial number of keys in the hash table
console.log(myHashMap.length()); // Expected output: 0

// Add a key-value pair to the hash table
myHashMap.set('team', 'Liverpool');
console.log(myHashMap.length()); // Expected output: 1

// Add another key-value pair to the hash table
myHashMap.set('name', 'John');
console.log(myHashMap.length()); // Expected output: 2

// Retrieve values using keys
console.log(myHashMap.get('team')); // Expected output: 'Liverpool'
console.log(myHashMap.get('name')); // Expected output: 'John'
console.log(myHashMap.get('age'));  // Expected output: null (key does not exist)

// Update the value for an existing key and add a new key-value pair
myHashMap.set('name', 'Klopp');
myHashMap.set('age', 57);
console.log(myHashMap.length()); // Expected output: 3

// Get all keys
console.log(myHashMap.keys()); // Expected output: ['team', 'name', 'age']

// Get all values
console.log(myHashMap.values()); // Expected output: ['Liverpool', 'Klopp', 57]

// Retrieve updated values and new key
console.log(myHashMap.get('name')); // Expected output: 'Klopp'
console.log(myHashMap.get('age'));  // Expected output: 57

// Check the existence of specific keys
console.log(myHashMap.has('team'));       // Expected output: true
console.log(myHashMap.has('age'));        // Expected output: true
console.log(myHashMap.has('nationality')); // Expected output: false

// Display the current number of keys in the hash table
console.log(myHashMap.length()); // Expected output: 3

// Remove a key-value pair and attempt to remove a non-existing key
console.log(myHashMap.get('age'));            // Expected output: 57
console.log(myHashMap.remove('age'));         // Expected output: true (key exists and is removed)
console.log(myHashMap.remove('nationality')); // Expected output: false (key does not exist)
console.log(myHashMap.get('age'));            // Expected output: null (key has been removed)

// Attempt to remove the same key again
console.log(myHashMap.remove('age'));         // Expected output: false (key does not exist)

// Display the final number of keys in the hash table
console.log(myHashMap.length()); // Expected output: 2

// Get all keys
console.log(myHashMap.keys()); // Expected output: ['team', 'name']

// Get all values
console.log(myHashMap.values()); // Expected output: ['Liverpool', 'Klopp']

// Clear all entries
myHashMap.clear();
console.log(myHashMap.length()); // Expected output: 0

// Try to get removed values
console.log(myHashMap.get('team')); // Expected output: null
console.log(myHashMap.get('name')); // Expected output: null

// Get all keys
console.log(myHashMap.keys()); // Expected output: []

// Get all values
console.log(myHashMap.values()); // Expected output: []
