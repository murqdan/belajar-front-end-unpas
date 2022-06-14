// Destructuring Variable / Assignment

// Destructuring Array
const perkenalan = ['Halo', 'nama', 'saya', 'Adnan'];

/* let salam1 = perkenalan[0];
let salam2 = perkenalan[1];
console.log(salam1);
console.log(salam2); */

/* const [salam, satu, dua, nama] = perkenalan;
console.log(nama); */



// skipping items
/* const [salam, , , nama] = perkenalan;   
console.log(nama); */



// swap items
/* let a = 1;      
let b = 2;
console.log(a);
console.log(b);
[a, b] = [b, a];
console.log(a);
console.log(b); */



// return value pada function
/* function coba() {
    return [1, 2];
}

const a = coba();
console.log(a[1]); */

/* function coba2() {
    return [1, 2];
}

const [a, b] = coba2();
console.log(a); */



// Rest Parameter
/* const [a, ...values] = [1, 2, 3, 4, 5];
console.log(a);
console.log(values); */



//  Destructuring Object
/* const mhs2 = {
    nama: 'Adnan',
    umur: 33
}

const {nama, umur} = mhs2;   // nama parameter destructuring object harus sama dengan nama properti pada objectnya.
console.log(nama); */

// assignment tanpa deklarasi object
/* ({ nama, umur } = {
    nama: 'Adnan',
    umur: 30
});
console.log(nama); */

// assignment ke variabel baru
/* const mhs3 = {
    nama: 'Adnan',
    umur: 30
}

const { nama: n, umur: u } = mhs3;
console.log(n); */

// memberikan default value
/* const mhs4 = {
    nama: 'Adnan',
    umur: 33,
    email: 'adn@contoh.com'
}

const {nama, umur, email = 'email@default.com'} = mhs4;
console.log(email); */

// memberi nilai default + assign ke variabel baru
/* const mhs = {
    nama: 'Adnan',
    umur: 33,
}

const {nama: n, umur: u, email: e = 'email@default.com'} = mhs;
console.log(e); */

// dengan rest parameter
/* const mhs5 = {
    nama: 'Adnan',
    umur: 33,
    email: 'adn@contoh.com'
}

const { nama: n, ...values } = mhs5;
console.log(values); */

// assignment tanpa deklarasi object
/* 
({ nama: n, ...values } = {
    nama: 'Adnan',
    umur: 33,
    email: 'adn@contoh.com'
});
console.log(values.email); */



// Mengambil field pada object, setelah dikirim sebagai parameter untuk function

//normal
/* const mhs6 = {
    id: 123,
    nama: 'Adnan',
    umur: 33,
    email: 'adn@contoh.com'
};

function getIdMhs(mhs) {
    return mhs.id;
}

console.log(getIdMhs(mhs6)); */

/* const mhs = {
    id: 123,
    nama: 'Adnan',
    umur: 33,
    email: 'adn@contoh.com'
};

function getIdMhs({ id }) {     //dibongkar dulu
    return id;
    //return nama; --> ini error, karena nama tidak dikenali 
}

console.log(getIdMhs(mhs)); */