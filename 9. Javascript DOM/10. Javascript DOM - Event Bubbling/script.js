/* const tutup = document.querySelectorAll('.close');
tutup.forEach(function(el) {
    el.addEventListener('click', function(e) {
        e.target.parentElement.style.display = 'none';
        e.preventDefault();
        e.stopPropagation();
    })
})

const cards = document.querySelectorAll('.card');
cards.forEach(function (card) {
    card.addEventListener('click', function (e) {
        alert('cards');
    })
})

const container = document.querySelector('.container');
container.addEventListener('click', function() {
    alert('container');
})

const body = document.querySelector('.body');
body.addEventListener('click', function() {
    alert('body');
})
 */

const container = document.querySelector(".container");
container.addEventListener("click", function (e) {
  if (e.target.className == "close") {
    e.target.parentElement.style.display = "none";
    e.preventDefault();
    console.log(e.target);
  }
});
