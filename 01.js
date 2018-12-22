const isPalindrome = (teks) => {
  let reverse = []; //empty array will contain reverse of teks parameter
  for(let i=teks.length-1; i>=0 ;i--){
    reverse.push(teks[i]);
  }
  return teks === reverse.join('');
}

// test the output
isPalindrome('ibu ratna antar ubi'); // true
isPalindrome('cbc'); // true
isPalindrome('abcda'); // false
