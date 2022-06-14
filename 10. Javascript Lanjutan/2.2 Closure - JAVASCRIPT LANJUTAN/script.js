/* function init() {
    // let nama = 'Rafiqul';     // local variable

    return function (nama) { // inner function (closure)
        console.log(nama);  // akses ke parent variable 
    }

}

let panggilNama = init();
panggilNama('Rafiqul');
panggilNama('Adnan'); */

/* =========================================================== */

/* function ucapkanSalam(waktu) {
    return function (nama) {
        console.log(`Halo ${nama}, Selamat ${waktu}, semoga harimu menyenangkan!`);
    }
}

let selamatPagi = ucapkanSalam('Pagi');
let selamatSiang = ucapkanSalam('Siang');
let selamatMalam = ucapkanSalam('Malam');

console.dir(selamatMalam('Rafiqul')); */

/* =========================================================== */

/* let add = (
    function() {
    let counter = 0;
    return function() {
        return ++counter;
    }
})();

counter = 100;

console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add()); */

/* =========================================================== */

// https://www.youtube.com/watch?v=jsW0taT36qU
