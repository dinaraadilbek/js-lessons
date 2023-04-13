let cache = new WeakMap();

function cacheUser(user) {
  if(!cache.has(user)) {
    cache.set(user, Date.now());
  }
  return cache.get(user);
}

let lena = {name: 'Elena'};
let ali = {name: 'Ali'};

cacheUser(lena);
cacheUser(ali);

lena = null;
console.log(cache.has(lena));
console.log(cache.has(ali));


let messages = [
  {text: 'Hello', name: 'Ivan'},
  {text: 'Earth', name: 'Dasha'},
  {text: 'Already', name: 'Dina'}
];

let readMessages = new WeakSet();

readMessages.add(messages[0]);
// readMessages.add(messages[1]);

messages.shift();
console.log(readMessages.has(messages[0]));

