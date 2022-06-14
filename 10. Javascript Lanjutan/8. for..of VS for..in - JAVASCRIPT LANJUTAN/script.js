// for..of

// Array ~
/* const mhs = ['Ramdhan', 'Rafdi', 'Rafiqul']; */

/* for (let i = 0; i < mhs.length; i++) {
    console.log(mhs[i]);
} */

/* mhs.forEach(m => console.log(m)); */

/* for (const m of mhs) {
    console.log(m);
} */

/* mhs.forEach((m, i) => {
    console.log(`${m} adalah mahasiswa ke-${i + 1}`);
}) */

/* for (const [i, m] of mhs.entries()) {
    console.log(`${m} adalah mahasiswa ke-${i + 1}`);
} */




// String ~
/* const nama = 'Adnan';
for (const n of nama) {
    console.log(n);
} */




// NodeList ~
/* const liNama = document.querySelectorAll('.nama'); */

/* liNama.forEach(n => console.log(n.textContent)); */

/* for (const n of liNama) {
    console.log(n.textContent);
} */




// Arguments ~
/* function jumlahkanAngka() {

    let jumlah = 0;

    for (a of arguments) {
        jumlah += a;
    }

    return jumlah;
}

console.log(jumlahkanAngka(1, 2, 3, 4, 5)); */

/*========================================================== */

// for..in

/* const mhs = {
    nama: 'Adnan',
    umur: 30,
    email: 'dummy@wasd@com'
}

for (m in mhs) {
    // console.log(m);
    console.log(mhs[m]);
} */