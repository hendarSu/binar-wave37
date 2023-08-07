let age = 10;
age = "10";
let tahunsekarang = 2023;

// dynamic typing;
console.log(typeof age);

// Conversion
age = parseInt(age);
age = age.toString();

let tahunLahir = tahunsekarang - age;
let tahun = tahunsekarang + age;

console.log(tahunLahir);
console.log(tahun);
