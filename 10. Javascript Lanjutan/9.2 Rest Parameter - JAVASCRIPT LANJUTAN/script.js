// Rest Parameter
/* function myFunc(a, ...myArgs) {
    return `a=${a}, b=${myArgs[0]}, c=${myArgs[1]}, d=${myArgs[2]}, e=${myArgs[3]}`;
}
console.log(myFunc(1, 2, 3, 4, 5)); */

/* function myFunc() {
    //return arguments; //arguments itu bukan array.
    return [...arguments];
}
console.log(myFunc(1, 2, 3, 4, 5)); */




// 
/* function jumlahkan(...angka) {
    // let total = 0;

    // for (const e of angka) {
    //     total += e;
    // }

    // return total; 

    return angka.reduce((a, b) => a + b);
}
console.log(jumlahkan(1, 2, 3, 4, 5)); */




// array destructuring
/* const kelompok1 = ['Adnan', 'Didin', 'Rama', 'Fajar', 'Awan'];
const [ketua, wakil, ...anggota] = kelompok1;
console.log(ketua);
console.log(wakil);
console.log(anggota); */




// object destructuring
/* const team = {
    pm: 'Mujiyono',
    uiUx: 'Awan',
    frontEnd1: 'Adnan',
    frontEnd2: 'Didin',
    backEnd: 'Fajar',
    devOps: 'Rama'
}

const { pm, ...myTeam } = team;
console.log(pm);
console.log(myTeam); */




// filtering
/* function filterBy(type, ...values) {
    return values.filter(value => typeof value === type);
}

console.log(filterBy('number', 1, 2, 'Rafiqul', false, 10, true, 'Adnan'));

console.log(filterBy('string', 1, 2, 'Rafiqul', false, 10, true, 'Adnan'));

console.log(filterBy('boolean', 1, 2, 'Rafiqul', false, 10, true, 'Adnan')); */