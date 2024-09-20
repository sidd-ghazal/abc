/////simple_function/////
function hollyBook() {
    var hollyBook = "qurqn majeed";
    console.log(hollyBook);
    return hollyBook;
}
hollyBook();
///// function Array /////
function petName() {
    var petNames = ["simba", "tiger", "tom"];
    console.log(petNames[1], petNames[2]);
}
petName();
/////////// function Return ///////
function addTwoValue(value1, value2) {
    return value1 + value2;
}
var result = addTwoValue(4, 5);
console.log("result", result);
//////////// perameter and argument
function greet(name, id) {
    console.log("welcome,".concat(name, " and your id is ").concat(id));
}
greet("ghazala", 30);
///// Aero function  /////
var mul = function (a, b) {
    return a * b;
};
console.log(mul(3, 4));
