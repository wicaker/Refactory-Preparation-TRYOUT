//This array contain any symbol whic is we will use in teks
const library = [
  ['a',1],
  ['b',2],
  ['c',3],
  ['d',4],
  ['e',5],
  ['f',6],
  ['g',7],
  ['h',8],
  ['i',9],
  ['j',';'],
  ['k','!'],
  ['l','@'],
  ['m','#'],
  ['n','$'],
  ['o','%'],
  ['p','^'],
  ['q','&'],
  ['r','*'],
  ['s','`'],
  ['t','.'],
  ['u',','],
  ['v','-'],
  ['w','='],
  ['x','+'],
  ['y','/'],
  ['z','~'],
  ['A','N'],
  ['B','O'],
  ['C','P'],
  ['D','Q'],
  ['E','R'],
  ['F','S'],
  ['G','T'],
  ['H','U'],
  ['I','V'],
  ['J','W'],
  ['K','X'],
  ['L','Y'],
  ['M','Z'] 
]

const password = (teks) => {
let hasilEnkripsi = []; //empty array to initial enkripsi
for(let i=0;i<teks.length;i++){
  for(let j =0;j<library.length;j++){
    if(teks[i]==library[j][0]){
      hasilEnkripsi.push(library[j][1]);
      break;
    }
    else if(teks[i]==library[j][1]){
      hasilEnkripsi.push(library[j][0]);
      break;
    }
    else if(j===library.length-1 && teks[i] !== library[j][1] && teks[i] !== library[j][0]){
      hasilEnkripsi.push(teks[i]); //if teks[i] not contained in list of array library
    }
    else{
      continue;
    }
  }
}
return hasilEnkripsi.join('');
}

//function enkripsi
const enkripsi = (teks) => {
return password(teks);
}

//function dekripsi
const dekripsi = (teks) => {
return password(teks);
}


enkripsi('the best refactory'); //will return enkripsi of teks
dekripsi (enkripsi('the best refactory')); //will return the best refactory;