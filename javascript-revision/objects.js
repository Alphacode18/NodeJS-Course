//Objects are like structs in C but with key value pairs 

const person = {
    name : 'Shreyas',
    age : 19,
    greet: () => {
        console.log(`Hi, I am ${person.name}`);
    }
};

console.log(person);
person.greet();