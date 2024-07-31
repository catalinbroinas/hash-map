import { HashMap } from "./module/hashMap.js";

const myHashMap = HashMap();

console.log(myHashMap.length());

myHashMap.set('team', 'Liverpool');

console.log(myHashMap.length());

myHashMap.set('name', 'John');

console.log(myHashMap.length());

console.log(myHashMap.get('team'));
console.log(myHashMap.get('name'));
console.log(myHashMap.get('age'));

myHashMap.set('name', 'Klopp');
myHashMap.set('age', 57);

console.log(myHashMap.length());

console.log(myHashMap.get('name'));
console.log(myHashMap.get('age'));

console.log(myHashMap.has('team'));
console.log(myHashMap.has('age'));
console.log(myHashMap.has('nationality'));

console.log(myHashMap.length());

console.log(myHashMap.get('age'));
console.log(myHashMap.remove('age'));
console.log(myHashMap.remove('nationality'));
console.log(myHashMap.get('age'));
console.log(myHashMap.remove('age'));

console.log(myHashMap.length());