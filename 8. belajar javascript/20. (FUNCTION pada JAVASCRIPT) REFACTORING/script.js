var ulangi = true;
while (ulangi) {

    var sisiKubusA = prompt('masukkan panjang sisi kubus A :');
    var sisiKubusB = prompt('masukkan panjang sisi kubus B :');

    function jumlahVolumeDuaKubus(sisiKubusA, sisiKubusB) {
        return sisiKubusA**3 + sisiKubusB**3;
    }

    alert('jumlah volume kedua kubus \ntersebut adalah : ' + jumlahVolumeDuaKubus(sisiKubusA,sisiKubusB));

    ulangi = confirm('ingin menghitung lagi?');
    
}

alert('terimakasih!')