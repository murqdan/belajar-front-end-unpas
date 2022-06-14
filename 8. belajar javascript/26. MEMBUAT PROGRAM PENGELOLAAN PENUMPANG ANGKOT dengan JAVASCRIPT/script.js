var penumpang = [];
var tambahPenumpang = function(namaPenumpang,penumpang){
        
        // Jika penumpang Kosong
        if(penumpang.length == 0) {

            // Maka tambah penumpang dari array
            penumpang.push(namaPenumpang);

            // Kembalikan isi array & keluar dari function
            return penumpang;

        } else {

            // Telusuri seluruh kursi dari awal
            for( var i = 0 ; i < penumpang.length ; i++) {

                // Jika ada kursi kosong
                if( penumpang[i] == undefined ) {

                    // Tambah penumpang di kursi tsb
                    penumpang[i] = namaPenumpang;

                    // Kembalikan isi array & keluar dari function
                    return penumpang;

                }

                // Jika Nama Penumpang Sama
                else if ( penumpang[i] == namaPenumpang ) {

                    // Pesan Kesalahan Menolak 
                    console.log(namaPenumpang + ' sudah berada di Angkot!');

                    // Mengembalikan isi array & keluar dari function
                    return penumpang;

                }

                //Jika Kursi Terisi
                else if ( i == penumpang.length - 1) {

                // tambah penumpang di akhir array
                penumpang.push(namaPenumpang);

                // Kembalikan isi array & keluar dari function
                return penumpang;

                }
            }
        }
}

// Disaat Turun = hapusPenumpang()
var hapusPenumpang = function(namaPenumpang,penumpang) {

// Jika Angkotnya Kosong
    if ( penumpang.length == 0 ) {
        console.log('Angkot masih Kosong!');
        return penumpang;

    } else {

        // Pengecekan index Array
        for( var i = 0 ; i < penumpang.length ; i++) {

            // Pengecekan penumpang dan namaPenumpang yang akan keluar
            if( penumpang[i] == namaPenumpang ) {

                // orang yang keluar Kursinya mjd Undefined
                penumpang[i] = undefined;
                return penumpang;

            }

            // Jika nama penumpang yang ingin keluar tidak sesuai
            else if ( i == penumpang.length - 1 ) {

                // Pesan Kesalahan
                console.log( namaPenumpang + ' tidak ada didalam Angkot!!');
                return penumpang;
                
            }
        }
    }
}

