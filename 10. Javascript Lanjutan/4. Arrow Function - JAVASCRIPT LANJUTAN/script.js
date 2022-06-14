// Function Expression
/* const tampilNama = function (nama) {
    return `Halo, ${nama}`;
}
console.log(tampilNama('Adnan')); */





// Arrow Function
/* const tampilNama = (nama, waktu) => {
    return `Selamat ${waktu}, ${nama}!`;
}
console.log(tampilNama('Adnan', 'Pagi')); */

// implisit return
/* const tampilNama = nama => `Assalamualaikum, ${nama}!`;
console.log(tampilNama('Adnan')); */

/* const sapa = () => `Hello World!`;
console.log(sapa()); */





// contoh Arrow Function
let mahasiswa = ['sandhika', 'doddy', 'erik'];

/* let jumlahHuruf = mahasiswa.map(function (nama) {
    return nama.length;
});
console.log(jumlahHuruf); */

/* let jumlahHuruf = mahasiswa.map(nama => nama.length);
console.log(jumlahHuruf); */

let jumlahHuruf = mahasiswa.map(nama => ({nama, jmlHuruf: nama.length}));
console.table(jumlahHuruf);