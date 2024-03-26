// const name = "Avdhesh"
// const surname = "Bapodara"

// console.log(name + " Vajsi" + " " + surname);
// console.log(`My Name is ${name} and my surname is ${surname}`);//Use this

const gameName = new String("Minecraft")
// console.log(gameName[0])
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.indexOf('r'));
// console.log(gameName.charAt(7));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-7, 4)
console.log(anotherString);

const newStringOne = "        Godho       "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "Https://Avdheshbapodara.com/xyz%30pqr"
console.log(url.replace("%30", "-"));
console.log(url.includes('Avdhesh'));
console.log(url.split('/'))//converts the String into an array using seperator