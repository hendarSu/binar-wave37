/**
 * replaceAll() adalah Mengganti string dengan pola tertentu menjadi string lain.
 */

const paragraf = "Sabrina adalah seorang web developer di Bingle";
console.log(paragraf.replace('Sabrina','Mas Gun'));

/**
 * substring() adalah Mengambil beberapa karakter string dari index awal sampai sebelum index akhir.
 */

let abjad = "abcdefghij";
console.log(abjad.substring(0, 5));

/**
 * toLowerCase() / toUpperCase adalah Mengganti string tertentu ke huruf kecil atau huruf kapital.
 */

let nama = "Muhammad Agung Solihin";
let hurufKecil = nama.toLowerCase();
let hurufBesar = nama.toUpperCase();
console.log(hurufKecil);
console.log(hurufBesar);

/**
 * trim() adalah Menghilangkan whitespace di awal dan akhir sebuah string.
 */

let alamat = "    Perumahan Panjibuwono Cluster Brawijaya      ";
console.log(alamat.trim());


/**
 * length() adalah Menghasilkan panjang atau banyak karakter dari sebuah string.
 */

let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(text.length);

/**
 * slice() adalah Mengambil beberapa karakter string dari index awal sampai sebelum index akhir.
 */

let negara = "Indonesia Merdeka";
console.log(negara.slice(0, 9));