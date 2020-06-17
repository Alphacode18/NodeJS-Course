//Object Destructuring

const person = {
    firstName: 'Shreyas',
    lastName: 'Kharbanda',
    almaMater: 'Purdue University',
    gradePointAverage: 4.0,
    coursesTakes: ['CS180', 'CS182', 'CS240'],
    isHonorsStudent: true,
}

const printName = personData => {
    return personData.firstName;
};

//Drops all other properties and only extracts the required property.
const printNameDestructuring = ({firstName}) => {
    return firstName;
};

//Destructuring Objects.
//We require the same name as it is a key value player.

const {gradePointAverage} = person;
console.log(gradePointAverage);

//Destructuring Arrays
//Any name can be chosen for variables as arrays do not have any names, only positional importance.
const [class1, class2, class3] = person.coursesTakes;
console.log(`${class1}, ${class2}, ${class3}.`);

console.log(printName(person));
console.log(printNameDestructuring(person));