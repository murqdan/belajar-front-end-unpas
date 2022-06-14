/* --DOM Manipulation Method-- */

/* Manipulasi Element */

// element.innerHTML
/* const judul = document.getElementById('judul');
judul.innerHTML = '<em>Latihan DOM Manipulation</em>';

const sectionA = document.querySelector('section #a');
sectionA.innerHTML = '<div><p>replace</p></div>' */


// element.style.<propertiCSSnyaApa>
/* const judul = document.querySelector('#judul');
judul.style.color = 'yellow';
judul.style.backgroundColor = 'black'; */


// element.setAttribute()   untuk menambahkan atribut baru
/* const judul = document.getElementsByTagName('h1')[0];
judul.setAttribute('name', 'Rafiqul'); */


// element.getAttribute()   untuk mengetahui isi dari atribut
/* const a = document.querySelector('section#a a');
console.log(a.getAttribute('href')); */


// element.removeAttribute()   untuk menghilangkan atribut
/* const a = document.querySelector('section#a a');
a.removeAttribute('href'); */


// element.classList.add() (untuk menambah class baru)
/* const p2 = document.querySelector('.p2');
p2.classList.add('label'); */


// element.classList.remove() (untuk menghilangkan class yang ada)
/* const p2 = document.querySelector('.p2');
p2.classList.remove('label'); */


// element.classList.toggle() (jika suatu elemen tidak mempunyai class tertentu, maka dia akan menambahkan. tetapi, begitu elemen tersebut punya, toggle akan menghilangkan class tersebut.) 
/* const p2 = document.querySelector('.p2');
p2.classList.toggle('label'); */


// element.classList.item() (untuk mengetahui nilai tertentu dari class yang berada dalam sebuah element)
/* const p2 = document.querySelector('.p2');
console.log(p2.classList.item(0)); */  // mencari dari ke 0


// element.classList.contains() (mengecek dalam sebuah element punyakah class tertentu?)
/* const p2 = document.querySelector('.p2');
console.log(p2.classList.contains('p2')); */  // tanya, apakah ada?


// element.classList.replace() (untuk mengganti class yang ada dengan class yang baru)
/* const p2 = document.querySelector('.p2');
p2.classList.replace('p2','paragrafke2'); */


/* Manipulasi Node */

// document.createElement() (membuat element baru)
const pBaru = document.createElement('p');


// document.createTextNode() (akan menulis apa didalam element yang sudah dibuat tadi)
const teksPBaru = document.createTextNode('Paragraf Baru');


// node.appendChild() (lalu mau simpan dimana. appendChild==simpan ke akhir dari sebuah element parent)
pBaru.appendChild(teksPBaru);

const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru); // simpan pBaru di akhir section A


// node.insertBefore() (lalu mau simpan dimana. insertBefore==simpan sebelum element child yang keberapa)
const liBaru = document.createElement('li');
const teksLiBaru = document.createTextNode('Item Baru');
liBaru.appendChild(teksLiBaru);

const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');
ul.insertBefore(liBaru, li2);


// parentNode.removeChild() (menghapus element)
const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);


// parentNode.replaceChild() (mengganti element)
const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

const h2Baru = document.createElement('h2');
const teksH2Baru = document.createTextNode('Judul Baru!');
h2Baru.appendChild(teksH2Baru);

sectionB.replaceChild(h2Baru, p4);

































//dokumentasi
//https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model