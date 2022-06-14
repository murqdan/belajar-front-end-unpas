// Spread Operator (memecah iterables menjadi single element)

/* const mhs = ['Ramdhan', 'Rafdi', 'Rafiqul'];
console.log(...mhs[2]); */




//menggabungkan 2 array
/* const mhs = ['Ramdhan', 'Rafdi', 'Rafiqul']
const dosen = ['Ferian', 'Suyanto', 'Petra'];
//const orang = [...mhs, ...dosen];
const orang = mhs.concat(dosen);
console.log(orang); */




// meng-copy array
/* const mhs = ['Ramdhan', 'Rafdi', 'Rafiqul'];
const mhs1 = [...mhs];
mhs1[0] = 'Rini';

console.log(mhs);
console.log(mhs1); */




// dengan DOM
/* const liMhs = document.querySelectorAll('li'); */

/* const mhs = [];
for (let i = 0; i < liMhs.length; i++) {
    mhs.push(liMhs[i].textContent);
}

console.log(mhs); */

/* const mhs = [...liMhs].map(e => e.textContent);
console.log(mhs); */




// dengan DOM
const nama = document.querySelector('.nama');
const huruf = [...nama.textContent].map(e => `<span>${e}</span>`).join('');

nama.innerHTML = huruf;