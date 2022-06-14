// Tagged Templates
/* const nama = 'Adnan';
const umur = 20;

function coba(strings, ...values) {
    // let result = '';
    // strings.forEach((str, i) => {
    //     result += `${str}${values[i] || ''}`;
    // });
    // return result;

    return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''}`, '');
}

const str = coba`Halo, nama saya ${nama}, saya ${umur} tahun.`;
console.log(str); */



// Highlight
const nama = 'Adnan';
const umur = 20;
const email = 'auhdqiwu@awdiua.com';

function highlight(strings, ...values) {
    return strings.reduce((result, str, i) => `${result}${str}<span class="h1">${values[i] || ''}</span>`, '');
}

const str = highlight`Halo, nama saya ${nama}, saya ${umur} tahun, dan email saya adalah : ${email}.`;

document.body.innerHTML = str;