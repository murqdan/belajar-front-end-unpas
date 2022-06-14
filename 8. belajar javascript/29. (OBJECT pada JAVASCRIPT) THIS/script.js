// object literal
var obj = {a: 10, nama: 'Adnan'};
obj.sapa = function () {
    
    console.log(this);    // this mengembalikan object yang bersangkutan
    console.log('Halo');

}

obj.sapa(); 


// function declaration
function sapa() {
    
    console.log(this);    // this mengembalikan object global
    console.log('Halo2');

}

/* this.*/sapa(); 


// constructor
function Sapa() {
    
    console.log(this);    // this mengembalikan object yang baru dibuat
    console.log('Halo3');

}

var obj1 = new Sapa();
var obj2 = new Sapa();