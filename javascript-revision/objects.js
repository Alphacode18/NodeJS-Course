//Objects are like structs in C but with key value pairs 

const person = {
    name : 'Shreyas',
    age : 19,
    greet: () => {
        console.log("Hi, I am " + this.name); //Would generally print undefined because this refers
                                              //To the global node runtime scope and not the object.
    },
};

const person2 = {
    name : 'Shreyas',
    age : 19,
    greet() {
        console.log("Hi, I am " + this.name); //Prints correctly.
    },
};

console.log(person);
person.greet();