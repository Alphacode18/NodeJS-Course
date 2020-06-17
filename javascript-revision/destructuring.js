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

const {gradePointAverage} = person;
console.log(gradePointAverage);

console.log(printName(person));
console.log(printNameDestructuring(person));