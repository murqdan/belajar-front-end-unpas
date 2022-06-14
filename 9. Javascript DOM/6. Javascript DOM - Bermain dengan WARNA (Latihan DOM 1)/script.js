const tUbahWarna = document.getElementById("tUbahWarna");

tUbahWarna.addEventListener("click", function () {
  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
});

const warna = document.querySelectorAll("input[type='range']");

/* const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]'); */

/* sMerah.addEventListener('input', function () {
    const  r = sMerah.value;
    document.body.style.backgroundColor = 'rgb('+ r +',0,0)';
})

sHijau.addEventListener('input', function () {
    const  g = sHijau.value;
    document.body.style.backgroundColor = 'rgb(0,'+ g +',0)';
})

sBiru.addEventListener('input', function () {
    const  b = sBiru.value;
    document.body.style.backgroundColor = 'rgb(0,0,'+ b +')';
}) */

warna.forEach(function (slider) {
  slider.addEventListener("input", function () {
    const r = document.querySelector("input[name='sMerah']").value;
    const g = document.querySelector("input[name='sHijau']").value;
    const b = document.querySelector("input[name='sBiru']").value;
    console.log(r, g, b);
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
  });
});
