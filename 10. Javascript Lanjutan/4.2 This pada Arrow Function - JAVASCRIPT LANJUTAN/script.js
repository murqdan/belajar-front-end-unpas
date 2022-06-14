// Konsep this pada Arrow Function

// Constructor Function
/* const Mahasiswa = function (nama, umur) {
    this.nama = nama;
    this.umur = umur;
    this.sayHello = function () {
        return `Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`;
    }
}

const mhs1 = new Mahasiswa('Adnan', 30); */





// Arrow function
/* const Mahasiswa = function () {
    this.nama = 'Adnan';
    this.umur = 33;
    this.sayHello = () => {
        consol.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
    }
}

const adnan = new Mahasiswa(); */





// Object Literal
/* const mhs1 = {
    nama: 'Adnan',
    umur: 33,
    sayHello: () => {
        console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
        console.log(this);
    }
} */





/* const Mahasiswa = function () {
    this.nama = 'Adnan';
    this.umur = 33;
    this.sayHello = function () {
        consol.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
    }

    setInterval(() => {
        console.log(this.umur++);
    }, 500);
} 

const adnan = new Mahasiswa(); */





const box = document.querySelector('.box');
box.addEventListener('click', function () {
    let satu = 'size';
    let dua = 'caption';

    if (this.classList.contains(satu)) {
        [satu,dua] = [dua,satu];
    }

    this.classList.toggle(satu);
    setTimeout(() => {
        this.classList.toggle(dua);
    }, 600);

    console.log(this.classList.contains(satu));
});