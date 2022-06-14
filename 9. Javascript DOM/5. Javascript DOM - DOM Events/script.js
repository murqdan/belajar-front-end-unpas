/* ada dua jenis untuk mendengarkan events
1. event handler
    a. inline HTML attribute (sangat tidak disarankan untuk menggunakan cara ini)
    b. element method
2. addEventListener() 

===============================================================================================*/

/* 1. event handler */

// a. inline HTML attribute
/* const p1 = document.querySelector('.p1');

function ubahWarnaP1() {
    p1.style.backgroundColor = 'lightblue';
} */

// b. element method
/* const p2 = document.querySelector('.p2');

function ubahWarnaP2() {
    p2.style.backgroundColor = 'orange';
}

p2.onclick = ubahWarnaP2; */

/* ---------------------------------------------------------------- */

/* 2. addEventListener() */

/* const p4 = document.querySelector('section#b p');

p4.addEventListener('click', function(){
    const ul = document.querySelector('section#b ul');
    const liBaru = document.createElement('li');
    const teksLiBaru = document.createTextNode('item baru!');

    liBaru.appendChild(teksLiBaru);
    ul.appendChild(liBaru);
}) */

/* ==========================================PERBEDAAN============================================ */

/* apa perbedaan event handler dengan addEventListener()?
perbedaannya adalah ketika kita memberikan lebih dari satu perubahan
pada sebuah event.
jika kita menggunakan event handler, maka perubahan yang terakhir
dilakukan akan menimpa perubahan sebelumnya.
sedangkan menggunakan addEventListener() dia akan menambahkan
perubahannya.
*/

// event handler
/* const p1 = document.querySelector('.p1');

p1.onclick = function() {
    p1.style.backgroundColor = 'lightblue';
}

p1.onclick = function() {
    p1.style.color = 'red';
} */


// addEventListener()
/* const p2 = document.querySelector('.p2');

p2.addEventListener('click', function() {
    p2.style.backgroundColor = 'lightblue';
});

p2.addEventListener('click', function() {
    p2.style.color = 'red';
}); */












// dokumentasi
// https://developer.mozilla.org/en-US/docs/Web/Events