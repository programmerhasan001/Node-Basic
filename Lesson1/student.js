const getName = () => {
    return "Md. Hasan"
}

const getAge = () => {
    return 26;
}


const cgpa = 3.92;

// exporting way -1
// exports.GET_NAME = getName;
// exports.GET_AGE = getAge;
// exports.result = cgpa;


// exporting way -2

module.exports = {
    getName,
    getAge,
    cgpa
}


// third way of export
// exports.getCity = () => {
//     return "Dhaka"
// }