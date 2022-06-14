// Destructuring Function
/* function penjumlahanPerkalian(a, b) {
    return [a + b, a * b];
} */

/* const jumlah = penjumlahanPerkalian(2, 3)[0];
const kali = penjumlahanPerkalian(2, 3)[1];
console.log(jumlah);
console.log(kali); */

/* const [jumlah, kali] = penjumlahanPerkalian(2, 3);   // Destructuring
console.log(jumlah);
console.log(kali); */

/* function kalkulasi(a, b) {
    return [a + b, a - b, a * b, a / b]; // catatan, jika menggunakan array maka saat penamaan destructuring function nya harus urut dan sesuai berdasarkan nilai return functionnya.
}

const [jumlah, kurang, kali, bagi] = kalkulasi(2, 3);
console.log(bagi); */

// jika ingin tidak harus berurutan, maka dapat menggunakan nilai return bertipe object
/* function Kalkulasi(a, b) {
    return {
        tambah: a + b,
        kurang: a - b,
        kali: a * b,
        bagi: a / b
    }
}

const { bagi, tambah, kali, kurang } = Kalkulasi(2, 3);
console.log(kurang); */



// Destructuring function arguments
/* const mhs1 = {
    nama: 'Adnan',
    umur: 30,
    email: 'adn@adn.com',
    nilai: {
        tugas: 100,
        uas: 100,
        uts: 100
    }
}

function cetakMkhs({ nama, umur, nilai: { tugas, uas, uts } }) {
    return `Halo, nama saya ${nama}, saya berumur ${umur} tahun, nilai uas saya adalah ${uas}.`;
}

console.log(cetakMkhs(mhs1)); */