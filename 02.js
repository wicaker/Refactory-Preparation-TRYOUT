const combine = (...array) => {
  let string = []; //empty array and will contain combain of several array to one array
  for(let i=0;i<array.length;i++){
    string.push(array[i].join(' '));
  }
  return string.join(' '); // change array to string
}

const first = ['Behind', 'every', 'great', 'man'];
const second = ['is', 'a', 'woman'];
const third = ['rolling', 'her', 'eyes'];

combine(first, second, third);