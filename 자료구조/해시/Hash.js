//객체
const table = {}
table.key = 1;
table['key2'] = 2;
delete table.key;
console.log(table); //{'key2': 2}

//Map
const table = new Map();
table.set('key',1);
table.set('key1',2);
console.log(table.get('key')); //1

//Set - key와 value가 동일
const table = new Set();
table.add('key');
table.add('key1');
console.log(table.has('key')); //true
console.log(table.has('key3')); //false
table.delete('key1');
console.log(table.size); //1
table.clear();
console.log(table.size); //0