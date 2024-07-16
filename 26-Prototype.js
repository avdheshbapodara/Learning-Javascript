const myHerosArray = ['Thor', 'IronMan']

const heroPowersObject = {
    Thor: 'Hammer',
    IronMan: 'Money'
}

//as i said all the things like array, function ,...etc are subset of Objects 
//so if i create an property in object then it must be accesible from each of them


Object.prototype.Avdhesh = function () {
    console.log('Avdhesh is Present in all Objects');
}

// heroPowersObject.Avdhesh()//ofcourse it already an object so it will work 

// myHerosArray.Avdhesh()//now see myHerosArray is an array but still can access the properties of the objects

Array.prototype.qwertyuiop = function () {//lets check if an property created in array is accesible by object or not
    console.log('Array Property!!!');
}

// myHerosArray.qwertyuiop()//no doubt

// heroPowersObject.qwertyuiop()//ERRORRRRRR!!!!  it can't be accessed which seems logical also 



String.prototype.trueLength = function () {
    console.log(`True Length is ${this.trim().length}`);
}
'Avdhesh                   '.trueLength()
'      Briju                   '.trueLength()