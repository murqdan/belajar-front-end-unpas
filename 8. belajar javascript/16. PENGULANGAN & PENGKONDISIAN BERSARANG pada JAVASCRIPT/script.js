let n = prompt("masukkan panjang pola :");
let s = "";

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    s += "*";
  }
  s += "\n";
}

console.log(s);
