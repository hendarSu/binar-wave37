function getProfile(params) {
    const name = params.name;
    const age = params.age;

    const profile = `${name} umur nya ${age}`;
    return profile;
}


const profile = getProfile({
    name : "rolland", 
    age: 18
});

console.log(profile);