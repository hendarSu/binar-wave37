const student = {
    name : "Anshof",
    status: true,
    age : 10
};

if (student.status) {
    let umur = (student.age !== undefined) ? student.age : "belum di input";
    console.log("Nama Std : " + student.name);
    console.log("umur Std : " + umur + " Umur");
} else {
    console.log("Std tidak terdaftar atau tidak aktif");
}