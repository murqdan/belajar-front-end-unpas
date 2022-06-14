// Template Literals / Template String
/* const nama = 'Adnan';
const umur = 33;
console.log(`Halo, nama saya ${nama}, dan saya ${umur} tahun.`); */


// Embedded Expression
/* console.log(`${1 + 1}`); */
/* console.log(`${alert('Halo!')}`); */
/* const x = 11;
console.log(`${(x % 2 == 0) ? 'genap' : 'ganjil'}`); */


// 1. HTML Fragments
const mhs = {
    nama: 'Adnan',
    umur: 99,
    nim: '19123456',
    email: 'xyz@xyz.id'
};

const el = 
`<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="nrp">${mhs.nim}</span>
</div>`;

document.body.innerHTML = el;