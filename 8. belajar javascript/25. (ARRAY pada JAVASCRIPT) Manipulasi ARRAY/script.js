                          /* CARA MANUAL
================================================================ */

// 1. Menambah isi array

/* var arr = [];
arr[0] = "Ramdhan";
arr[1] = "Rafdi";
arr[2] = "Rafiqul";

console.log(arr); */


// 2. Menghapus isi array

/* var arr = ["Ramdhan", "Rafdi", "Rafiqul"];
arr[1] = undefined;

console.log(arr); */


// 3. Menampilkan isi array

/* var arr = ["Ramdhan", "Rafdi", "Rafiqul"];

for(var i = 0; i < arr.length; i++) {
    console.log('Anak ke-' + (i+1) + ' : ' + arr[i]);
} */


                      /* MENGGUNAKAN METHOD
================================================================ */

// 1. join (untuk menggabungkan array dalam bentuk string)

/* 
var arr = ["Ramdhan", "Rafdi", "Rafiqul"];
console.log(arr.join(' & '));
 */


// 2. push & pop

/* var arr = ["Ramdhan", "Rafdi", "Rafiqul"];
arr.push('Riva', 'Rini', 'iniKehapusKarnaPop');
arr.pop();

console.log(arr.join(' - ')); */


// 3. unshift & shift

/* var arr = ["Ramdhan", "Rafdi", "Rafiqul"];
arr.unshift('iniKehapusKarnaShift', 'Rini', 'Riva');
arr.shift();

console.log(arr.join(' - '));
 */


// 4. splice (menambal)
// splice(indexAwal, mauDihapusSampeKeIndexBerapa, elemenBaru1, elemenBaru2)

/* var arr = ["Rini", "Ramdhan", "Rafiqul"];
var arr2 = ["Rini", "Ramdhan", "Rafiqul", "Rini", "Ramdhan", "Rafiqul"];

arr.splice(2, 0, 'Rafdi');  // ini menambah elemen baru
arr2.splice(1,4);           // ini menghapus elemen

console.log(arr.join(' - '));
console.log(arr2.join(' - '));
 */


// 5. slice (mengiris array, dan menjadikannya array baru)
// slice(indexAwal, mauDiirisSampeKeIndexBerapa + 1)

/* var arr = ["Rini", "Riva", "Ramdhan", "Rafdi", "Rafiqul"];
var arr2 = arr.slice(2,5);

console.log(arr.join(' - '));
console.log(arr2.join(' - ')); */


// 6. forEach & map (untuk melakukan looping pada array, lebih powerfull daripada for biasa)

// for biasa --------------------------------------------------

/* var angka = [1,2,3,4,5,6,7,8];

for(var i = 0; i < angka.length; i++) {
    console.log(angka[i]);
} */

// forEach ----------------------------------------------------

// var angka = [1,2,3,4,5,6,7,8];
// var nama = ['Ramdhan', 'Rafdi', 'Rafiqul'];

// var asu = angka.forEach(function (e) {
//     return e*2;
// })
// console.log(asu);
/* 
nama.forEach(function (e, i) {
    console.log('Anak ke-' + (i+1) + ' adalah : ' + e);
}) */

// map (sama seperti forEach, tapi lebih baik. karna mengembalikan nilai) -------------------------------------------

/* var angka = [1,2,3,4,5,6,7,8];

var angka2 = angka.map(function (e) {
    return e*2;
})  

console.log(angka2.join(' - ')); */


// 7. sort

/* var angka = [9,2,1,4,3,6,0,7,5,8];
angka.sort();

console.log(angka.join(' - ')); */

/* var angka = [9,2,1,4,3,6,0,7,5,8,20,13];
var angka2 = [9,2,1,4,3,6,0,7,5,8,20,13];

angka.sort(function (a,b) {
    return a-b; // mengurutkan secara ASCENDING
});

angka2.sort(function (a,b) {
    return b-a; // mengurutkan secara DESCENDING
});

console.log(angka.join(' - '));
console.log(angka2.join(' - ')); */


// 8. find & filter (mencari elemen pada array)

// find, mengembalikan satu nilai
// (mencari nilai pada array, dan mengembalikannya dalam bentuk satu nilai)
// (mencarinya dari index ke-0)

/* var angka = [9,2,1,4,3,6,0,7,5,8];
var angka2 = angka.find(function (e) {
    return e > 5;
})

console.log(angka2); */

// filter, mengembalikan banyak nilai
// (mencari nilai pada array, dan mengembalikannya dalam bentuk array)

var angka = [9,2,1,4,3,6,0,7,5,8];
var angka2 = angka.filter(function (e) {
    return e > 5;
})

console.log(angka);
console.log(angka2.join(' - '));









// untuk selengkapnya bisa dilihat pada link berikut:
/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array */