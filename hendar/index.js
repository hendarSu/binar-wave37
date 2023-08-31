// Variable

/**
 * name adalah variable untuk menyimpan data nama
 */
var name = "hendar";


/**
 * ini adalah function untuk menampilkan nama.
 * @param {*} params params nya bisa diisi tipe data string
 */
function printName(params) {
    // declare name
    /**
     * name adalah variable untuk menyimpan data nama
     */
    var name = params;

    // proses return name
    return name;
}

// urang lain mau pake function kita.
const showName = printName(name);


// ------------------------------------
// bahas Variable
// -----------------------------------

// 1. Var 2. let 3. cons

// scope
// reassign
// redeclare
// hosting

// Var - Scope
// local scope
// global scope

var age; // hosting
let name = "hendar"; // ga support hosting;
const name = "dio"; // ga support hosting


function getFullname() {
    const fullname = "Hendar Binar"; // reassign

    var names = fullname.split(' '); // local scope
    var firstName = names[0];
    var lastName = names[1];

    console.log(fullname);

}

class Student {
    name;
    age;

    getProfile() {
        var profile = `${this.name} ${this.age}`;
        return profile;
    }
}

console.log(fullname);


// contoh reassign sama re declare.

function getProfile(params) {
    var name = params.name;
    var age = params.age;

    // reassign
    name = "hendar";
    age = 20;

    const profile = `${name} umur nya ${age}`;
    return profile;
}

const profile = getProfile({
    name : "rolland", age: 18
});

console.log(profile);