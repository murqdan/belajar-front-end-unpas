// object ke JSON
/* let mahasiswa = {
    nama: 'Muhammad Rafiqul',
    nim: '19111234',
    email: 'asd@asd.asd'
}

console.log(JSON.stringify(mahasiswa)); */



// JSON ke object
fetch('coba.json')
    .then(response => response.json())
    .then(response => console.log(response));