// require eveything
const s1 = require('./student');

// require only needed things
const { getName, getAge } = require('./student');

console.log("Student Name", s1.getName());
console.log("Student Age", s1.getAge());
console.log("Result", s1.cgpa);


// accessing only getName
console.log("Name: " + getName())
console.log("Age: " + getAge())