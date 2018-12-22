let daftarProduk = [
  {
    kodeProduk : '1',
    namaProduk : 'Indomie',
    harga : 2500,
  },
  {
    kodeProduk : '2',
    namaProduk : 'Teh Botol',
    harga : 3000,
  },
  {
    kodeProduk : '3',
    namaProduk : 'Pulpen',
    harga : 5000,
  },
  {
    kodeProduk : '4',
    namaProduk : 'Pensil',
    harga : 1000
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
  return console.log(daftarBelanja);
}


//HTML
let tabel = [];
for(let i=0; i< daftarProduk.length ;i++){
  tabel.push(`<tr>
    <td>${daftarProduk[i].kodeProduk}</td>
    <td>${daftarProduk[i].namaProduk}</td>
    <td>${daftarProduk[i].harga}</td>
    <td><a class="waves-effect waves-light btn" onClick='beli(${daftarProduk[i].kodeProduk})' >Beli</a></td>
  </tr>`);
}
document.getElementById('list-produk').innerHTML=tabel.join('');

const beli = (id) => {
  lihatCart(id);
  let tabelBelanja=[];
  let items = [];
  for(let i=0; i<daftarBelanja.items.length;i++){
    items.push(daftarBelanja.items[i].namaProduk);
  }
  tabelBelanja.push(`<tr>
    <td>${daftarBelanja.totalBelanja}</td>
    <td>${daftarBelanja.totalItem}</td>
    <td>${items}</td>
  </tr>`);
  return document.getElementById('list-belanja').innerHTML=tabelBelanja;
}

