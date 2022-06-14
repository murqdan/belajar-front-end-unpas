/* function tambah(a,b) {
    return a + b;
}

function kali(a,b) {
    return a * b;
}

var hasil = kali(tambah(1,2), tambah(3,4));
console.log(hasil);
 */


function tambah() {
    var hasil = 0;

    for(var i = 0; i < arguments.length; i++) {
        hasil += arguments[i];
    }

    return hasil;
}

var coba = tambah(1,2,3,4,5);
console.log(coba)


/* variabel khusus (arguments)
arguments adlah sbuah variabel
arguments dsbut jg sudo variabel
variabel argumen bertipe array */