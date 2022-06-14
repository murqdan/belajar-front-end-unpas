function getPilihanComputer() {
    const comp = Math.random();

    if(comp < 0.34) return 'gajah';
    if(comp >= 0.34 && comp < 0.67) return 'orang';
    return 'semut';
}

function getHasil(comp, player) {
    if(player == comp) return 'SERI!';
    if(player == 'gajah') return (comp == 'orang') ? 'KAMU MENANG!' : 'KAMU KALAH!';
    if(player == 'orang') return (comp == 'gajah') ? 'KAMU KALAH!' : 'KAMU MENANG!';
    if(player == 'semut') return (comp == 'orang') ? 'KAMU KALAH!' : 'KAMU MENANG!';
}

function putar() {
    const imgComputer = document.querySelector('.img-komputer');
    const gambar = ['gajah','semut','orang'];
    let i = 0;
    const waktuMulai = new Date().getTime();

    setInterval(function() {
        if (new Date().getTime() - waktuMulai > 1000) {
            clearInterval;
            return;
        }
        imgComputer.setAttribute('src', 'img/' + gambar[i++] + '.png');
        if(i == gambar.length) i = 0;
    }, 100)
}

const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function(pil) {
    pil.addEventListener('click', function() {
        const tHasil = document.querySelector('.info');
        tHasil.innerHTML= '';

        const pilihanComputer = getPilihanComputer();
        const pilihanPlayer = pil.className;
        const hasil = getHasil(pilihanComputer, pilihanPlayer);

        putar();
        setTimeout(function() {
            const imgComputer = document.querySelector('.img-komputer');
            imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

            const tHasil = document.querySelector('.info');
            tHasil.innerHTML= hasil;
        }, 1000);  
    });
});

// DRY
/* const pGajah = document.querySelector('.gajah');
pGajah.addEventListener('click', function() {
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = pGajah.className;

    const imgComputer = document.querySelector('.img-komputer');
    imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

    const hasil = getHasil(pilihanComputer, pilihanPlayer);
    const tHasil = document.querySelector('.info');
    tHasil.innerHTML= hasil;

})

const pOrang = document.querySelector('.orang');
pOrang.addEventListener('click', function() {
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = pOrang.className;

    const imgComputer = document.querySelector('.img-komputer');
    imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

    const hasil = getHasil(pilihanComputer, pilihanPlayer);
    const tHasil = document.querySelector('.info');
    tHasil.innerHTML= hasil;

})

const pSemut = document.querySelector('.semut');
pSemut.addEventListener('click', function() {
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = pSemut.className;

    const imgComputer = document.querySelector('.img-komputer');
    imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

    const hasil = getHasil(pilihanComputer, pilihanPlayer);
    const tHasil = document.querySelector('.info');
    tHasil.innerHTML= hasil;

}) */