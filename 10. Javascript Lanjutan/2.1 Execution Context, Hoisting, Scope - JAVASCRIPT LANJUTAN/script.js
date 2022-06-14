// 2.1 EXECUTION CONTEXT, HOISTING, and SCOPE

/* var nama = 'Adnan';
console.log(nama); */

// creation phase pada Global Context
// nama var = undefined
// nama function = fn()
// hoisting
// window = global object
// this = window
// execution phase

/* ============================================================ */

/* console.log(sayHello());

var nama = 'Adnan';
var umur = '20';

function sayHello() {
    return `Halo, nama saya ${nama}, saya ${umur} tahun.`;
}
 */
// function membuat local Execution Context
// yang di dalamnya terdapat creation dan execution phase
// window
// arguments
// hoisting

/* ============================================================ */

/* var nama = 'Adnan';
var username = '@murafad';

function cetakURL() {
    var instagramURL = 'http://instagram.com/';
    return instagramURL + username;
}

console.log(cetakURL('@didin', '@hafez')); */

/* ============================================================ */

/* function a() {
    console.log('ini a');

    function b() {
        console.log('ini b');

        function c() {
            console.log('ini c');
        }

        c();
    }

    b();
}

a(); */

/* ============================================================ */

/* function satu() {
    var nama = 'Opik';
    console.log(nama);
}

function dua() {
    console.log(nama);
}

console.log(nama);
var nama = 'Boski';
satu();
dua('Kiki');
console.log(nama);
 */





// https://www.youtube.com/watch?v=8mZsm9ZQFdY&