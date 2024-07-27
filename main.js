import { HashMap } from "./module/hashMap.js";

const myHashMap = HashMap();

myHashMap.set('team', 'Liverpool');
myHashMap.set('name', 'John');

console.log(myHashMap.get('team'));
console.log(myHashMap.get('name'));
console.log(myHashMap.get('age'));

myHashMap.set('name', 'Klopp');
myHashMap.set('age', 57);

console.log(myHashMap.get('name'));
console.log(myHashMap.get('age'));
