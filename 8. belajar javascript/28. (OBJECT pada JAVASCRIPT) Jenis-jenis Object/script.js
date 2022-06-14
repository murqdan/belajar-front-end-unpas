// object literal
var mhs1 = {

    nama: 'Adnan',
    nim: '19.11.1234',
    email: 'dummy1@email.com',
    jurusan: 'Informatika'

}

var mhs2 = {

    nama: 'Didin',
    nim: '19.11.1235',
    email: 'dummy2@email.com',
    jurusan: 'Informatika'

}


// function declaration
function buatObjectMahasiswa(nama, nim, email, jurusan) {
    
    var mhs = {};
    mhs.nama = nama;
    mhs.nim = nim;
    mhs.email = email;
    mhs.jurusan = jurusan;
    return mhs;

}

var mhs3 = buatObjectMahasiswa('Rama', '19.11.3246', 'dummy3@email.com', 'Informatika');

    
// constructor
function Mahasiswa(nama, nim, email, jurusan) {     /* Penggunaan nama function pada function constructor (function yang khusus digunakan untuk     
                                                    membuat object), lebih baik menggunakan huruf kapital di awal katanya. */
    // var this = {}
    this.nama =  nama;
    this.nim = nim;
    this.email = email;
    this.jurusan = jurusan;
    // return this;

}

var mhs4 = new Mahasiswa('Haaaafez', '19.11.3247', 'dummy4@email.com', 'Informatika');
console.log(mhs4)