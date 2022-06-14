/* const tutup = document.querySelector('.close');

tutup.addEventListener('click', function() {

    const card = document.querySelector('.card');
    card.style.display = 'none';

}) */

const tutup = document.querySelectorAll('.close');

tutup.forEach(function(e) {
    e.addEventListener('click', function() {
        e.parentElement.style.display = 'none';
    })
})

//traversal
const nama = document.querySelector('.nama');
console.log(nama.nextElementSibling.nextElementSibling);
