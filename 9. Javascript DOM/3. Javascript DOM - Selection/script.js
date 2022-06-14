// document.getElementById() -> element
/* const judul = document.getElementById('judul');

judul.style.color = 'red';
judul.style.backgroundColor = '#ccc';
judul.innerHTML = 'Belajar Selection'; */


// document.getElementsByTagName() -> HTMLCollections
/* const p = document.getElementsByTagName('p');
for (let i = 0; i < p.length; i++) {
    p[i].style.backgroundColor = 'lightblue';   // untuk memanipulasi, harus terspesifikasi kepada elementnya secara langsung (index ke berapa). tidak bisa jika masih berupa array.
}

const h1 = document.getElementsByTagName('h1')[0];  // untuk memanipulasi, harus terspesifikasi kepada elementnya secara langsung (index ke berapa). tidak bisa jika masih berupa array.
h1.style.fontSize = '50px'; */


// document.getElementsByClassName() -> HTMLCollections
/* const p1 = document.getElementsByClassName('p1');
p1[0].innerHTML = 'Ini diubah dari javascript'; // untuk memanipulasi, harus terspesifikasi kepada elementnya secara langsung (index ke berapa). tidak bisa jika masih berupa array.
 */

// document.querySelector() -> element
/* const p4 = document.querySelector('#b p');
p4.style.color = 'green';
p4.style.fontSize = '30px';

const li2 = document.querySelector('section ul li:nth-child(2)');
li2.style.backgroundColor = 'orange';

const p = document.querySelector('p');
p.innerHTML = 'Ini diubah melalui javascript'; */


// document.querySelectorAll() -> nodeList
/* const p = document.querySelectorAll('p');
for (let i = 0; i < p.length; i++) {
    p[i].style.backgroundColor = 'lightblue';
} */


// mengubah node root (salah satu cara agar lebih efektif memilih method yang cocok untuk menyeleksi DOM)

/* sebelum */
/* const p4 = document.getElementsByTagName('p');
p4[3].style.backgroundColor = 'orange'; */

/* sesudah */
const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');
p4.style.backgroundColor = 'orange';