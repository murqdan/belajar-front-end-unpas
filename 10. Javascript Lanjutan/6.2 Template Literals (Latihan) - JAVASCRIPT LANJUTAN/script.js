// 2. Looping
/* const mhs = [
    {
        nama: 'Muhammad',
        nim: '19111234'
    },
    {
        nama: 'Rafiqul',
        nim: '19111235'
    },
    {
        nama: 'Adnan',
        nim: '19111236'
    }
];

const el = 
`<div class="mhs">
    ${mhs.map(m =>
    `<ul>
        <li>${m.nama}</li>
        <li>${m.nim}</li>
    </ul>`).join('')}
</div>`;

document.body.innerHTML = el; */



// 3. Conditionals
// ternary
/* const lagu = {
    judul: 'Kau Adalah',
    penyanyi: 'Isyana',
    feat: 'Rayi'
}

const el = 
`<div class="lagu">
    <ul>
        <li>${lagu.penyanyi}</li>
        <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ''}</li>
    </ul>
</div>`;

document.body.innerHTML = el; */



// 4. Nested (HTML Fragments bersarang)
/* const mhs = {
    nama: 'Adnan',
    semester: 4,
    mataKuliah: [
        'Matkul1',
        'Matkul2',
        'Matkul3',
        'Matkul4'
    ]
};

function cetakMataKuliah(mataKuliah) {
    return `
    <ol>
        ${mataKuliah.map(mk => `<li>${mk}</li>`).join('')}
    </ol>
    `;
}

const el = 
`<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="semester">Semester : ${mhs.semester}</span>
    <h4>Mata Kuliah :</h4> ${cetakMataKuliah(mhs.mataKuliah)}
</div>`;

document.body.innerHTML = el; */