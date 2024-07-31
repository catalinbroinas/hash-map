import { HashMap } from "./module/hashMap.js";
import { HashSet } from "./module/hashSet.js";

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

// Get all entries
console.log(myHashMap.entries()); // Expected output: [ [ 'name', 'Klopp' ], [ 'team', 'Liverpool' ], [ 'age', 57 ] ]

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

// Get all entries
console.log(myHashMap.entries()); // Expected output: [ [ 'name', 'Klopp' ], [ 'team', 'Liverpool' ]]

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

// Get all entries
console.log(myHashMap.entries()); // Expected output: []


// Odin test
const test = HashMap();

test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');
test.set('frog', 'green');
test.set('grape', 'purple');
test.set('hat', 'black');
test.set('ice cream', 'white');
test.set('jacket', 'blue');
test.set('kite', 'pink');
test.set('lion', 'golden');

// Exceed your current load factor
test.set('moon', 'silver');

// Get all keys
console.log(test.keys());

// Get all values
console.log(test.values());

// Get all entries
console.log(test.entries());

// Create an instance of hashSet
const players = HashSet();

// Display the initial number of keys in the hash table
console.log(players.length()); // Expected output: 0

// Add keys to the array
players.set('Virgil');
players.set('Jones');
players.set('Jota');

// Get all entries (keys)
console.log(players.entries()); // Expected output: [ 'Jota', 'Jones', 'Virgil' ]

// Display the initial number of keys in the hash table
console.log(players.length()); // Expected output: 3

// Check the existence of specific keys
console.log(players.has('Virgil'));       // Expected output: true
console.log(players.has('Jones'));        // Expected output: true
console.log(players.has('Salah'));        // Expected output: false

// Remove the specified key
players.remove('Jota');
players.remove('Darwin');

// Check the existence of specific keys
console.log(players.has('Jones'));        // Expected output: true
console.log(players.has('Jota'));        // Expected output: false

// Display the initial number of keys in the hash table
console.log(players.length()); // Expected output: 2

// Get all entries (keys)
console.log(players.entries()); // Expected output: [ 'Jones', 'Virgil' ]

// Clear `players`
players.clear();

// Display the initial number of keys in the hash table
console.log(players.length()); // Expected output: 0

// Get all entries (keys)
console.log(players.entries()); // Expected output: []

// Test resize functionality
players.set('Alisson');
players.set('Virgil van Dijk');
players.set('Mohamed Salah');
players.set('Sadio Mané');
players.set('Roberto Firmino');
players.set('Andrew Robertson');
players.set('Trent Alexander-Arnold');
players.set('Jordan Henderson');
players.set('Fabinho');
players.set('Naby Keïta');
players.set('James Milner');
players.set('Xherdan Shaqiri');
players.set('Diogo Jota');

// Get all entries (keys)
console.log(players.entries());

// Display the initial number of keys in the hash table
console.log(players.length()); // Expected output: 13
