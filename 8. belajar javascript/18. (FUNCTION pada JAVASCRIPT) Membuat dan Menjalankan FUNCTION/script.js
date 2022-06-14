var ulangi = true;
while (ulangi) {

    var sisiKubusA = prompt('masukkan panjang sisi kubus A :');
    var sisiKubusB = prompt('masukkan panjang sisi kubus B :');

    function jumlahVolumeDuaKubus(sisiKubusA, sisiKubusB) {
    var total, volumeA, volumeB;

    volumeA = sisiKubusA**3;
    volumeB = sisiKubusB**3;

    total = volumeA + volumeB;

    return total;
    }

    alert('jumlah volume kedua kubus \ntersebut adalah : ' + jumlahVolumeDuaKubus(sisiKubusA,sisiKubusB));

    ulangi = confirm('ingin menghitung lagi?');
    
}

alert('terimakasih!')