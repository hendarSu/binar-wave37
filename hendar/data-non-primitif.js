const student = {
    name : "Anshof",
    status: true,
    age : 10,
    pengamalan : ["programmer", "PM"],
    lulusan : [
        {
            tahun: "2001",
            sekolah : "SD Jatim"
        },
        {
            tahun: "2008",
            sekolah : "SMP Jatim"
        }
    ]
};

student.name = "Ahmad Faizin";
student.pengamalan[0] = "Designer";
console.log(JSON.stringify(student, null, 2));

// student = {
//     perguruanTinggi: "ITB"
// }

const listNumber = [1, 2, 3];
listNumber[0] = "10";

console.log(listNumber);

student = "Hendar";
console.log(student);
