// cara untuk membuat object pada javacript

// 1. Object Literal

/* let mahasiswa1 = {
    nama: 'Adnan',
    energi: 10,
    makan: function(porsi) {
        this.energi += porsi;
        console.log(`Halo ${this.nama}, selamat makan!`);
    }
}

let mahasiswa2 = {
    nama: 'Alif',
    energi: 10,
    makan: function(porsi) {
        this.energi = this.energi + porsi;
        console.log(`Halo ${this.nama}, selamat makan!`);
    }
}
 */

// 2. Function Declaration

/* function mahasiswa(nama, energi) {
    let mahasiswa = {};
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;
    
    mahasiswa.makan = function(porsi) {
        this.energi += porsi;
        console.log(`Halo ${this.nama}, selamat makan!`);
    }

    mahasiswa.main = function(jam) {
        this.energi -= jam;
        console.log(`Halo ${this.nama}, selamat bermain!`);
    }

    return mahasiswa;
}

let adnan = Mahasiswa('Adnan', 10);
let alif = Mahasiswa('Alif', 10); */

// 3. Constructor Function

function Mahasiswa(nama, energi) {
    this.nama = nama;
    this.energi = energi;

    this.makan = function (porsi) {
        this.energi += porsi;
        console.log(`Halo ${this.nama}, selamat makan!`);
    }

    this.main = function (jam) {
        this.energi -= jam;
        console.log(`Halo ${this.nama}, selamat bermain!`);
    }
}

let adnan = new Mahasiswa('Adnan', 10);
let alif = new Mahasiswa('Alif', 10); 

// 4. Object.create()

/* const MethodMahasiswa = {
    makan: function(porsi) {
        this.energi += porsi;
        console.log(`Halo ${this.nama}, selamat makan!`);
    },

    main: function(jam) {
        this.energi -= jam;
        console.log(`Halo ${this.nama}, selamat bermain!`);
    },

    tidur: function(jam) {
        this.energi += jam*2;
        console.log(`Halo ${this.nama}, selamat tidur!`);
    }
};

function Mahasiswa(nama, energi) {
    let mahasiswa = Object.create(MethodMahasiswa);
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;

    return mahasiswa;
}

let adnan = Mahasiswa('Adnan', 10);
let alif = Mahasiswa('Alif', 10); */

// 5. prototype (prototyple inheritance)

/* function Mahasiswa(nama, energi) {
    this.nama = nama;
    this.energi = energi;
}

Mahasiswa.prototype.makan = function(porsi) {
    this.energi += porsi;
    return `Halo ${this.nama}, selamat makan!`;
}

Mahasiswa.prototype.main = function(jam) {
    this.energi -= jam;
    return `Halo ${this.nama}, selamat main!`;
}

Mahasiswa.prototype.tidur = function(jam) {
    this.energi += jam*2;
    return `Halo ${this.nama}, selamat tidur!`;
}

let adnan = new Mahasiswa('Adnan', 10); */

// 6. versi class

/* class Mahasiswa {

    constructor(nama, energi) {
        this.nama = nama;
        this.energi = energi;
    }

    makan = function(porsi) {
        this.energi += porsi;
        return `Halo ${this.nama}, selamat makan!`;
    }

    main = function(jam) {
        this.energi -= jam;
        return `Halo ${this.nama}, selamat main!`;
    }

    tidur = function(jam) {
        this.energi += jam*2;
        return `Halo ${this.nama}, selamat tidur!`;
    }

}

let adnan = new Mahasiswa('Adnan', 10); */