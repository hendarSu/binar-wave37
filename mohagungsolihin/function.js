function diskon (harga) {
    let musimPandemi = (harga * 30)/100
    return musimPandemi
}

let sale = diskon(20000)
console.log(sale);