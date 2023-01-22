function abbrevName(name) {
    let initials = name.split(" ");
    return (initials[0][0] + "." + initials[1][0]).toUpperCase();
}

console.log(abbrevName("Hashem Abuteen"));