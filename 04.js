let daftarProduk = [
  {
    kodeProduk : 1,
    namaProduk : 'Indomie',
    harga : 2500,
  },
  {
    kodeProduk : 2,
    namaProduk : 'Teh Botol',
    harga : 3000,
  },
  {
    kodeProduk : 3,
    namaProduk : 'Pulpen',
    harga : 5000,
  },
  {
    kodeProduk : 4,
    namaProduk : 'Pensil',
    harga : 1000,
  }
];

//This object to initial shopping list of customer
let daftarBelanja = {
  totalBelanja :'',
  totalItem :'',
  items : []
}

//This function for calculating total belanja
const totalItem = (belanja) => {
  return daftarBelanja.totalItem = belanja.length;
}

//This function for calculate totalItem 
const totalBelanja = (belanja)=> {
  let total = 0;
  for(let i= 0 ; i<belanja.length;i++){
    total = total + belanja[i].harga;
  }
  return daftarBelanja.totalBelanja = total;
}

//This function will return list cart of customer
const lihatCart = (kodeProduk) => {
  for(let i=0;i<daftarProduk.length;i++){
    if(kodeProduk==daftarProduk[i].kodeProduk){
      daftarBelanja.items.push(daftarProduk[i]);
    }
  }
  totalItem(daftarBelanja.items);
  totalBelanja(daftarBelanja.items);
  return daftarBelanja;
}

lihatCart(1);
lihatCart(2);
lihatCart(3);
