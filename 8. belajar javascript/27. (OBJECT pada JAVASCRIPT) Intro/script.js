// object literal
var manusia = {

    // variabel yang berada di dalam object disebut properti.
    nama: 'Aris Pranawa Ibnu Hadi',
    umur: 54,
    pekerjaan: 'Akuntan',
    hobi: ['bernyayi', 'bersepeda', 'traveling'],

    // function yang berada di dalam object disebut method.
    sapa: function () {

        return 'Assalamualaikum, nama saya ' + this.nama + '. Usia saya ' + this.umur + ' tahun. Hobi saya ' + this.hobi.join(', ') + '. Dan saya adalah seorang ' + this.pekerjaan + '.';
    },

    // object di dalam object
    alamat: {

        jalan: 'Jl.abc no.123',
        kota: 'Gorontalo',
        provinsi: 'Gorontalo'

    }

}

console.log(manusia.nama);
console.log(manusia.umur);
console.log(manusia.pekerjaan);
console.log(manusia.hobi.join(', '));
console.log(manusia.sapa());
console.log(manusia.alamat.provinsi);