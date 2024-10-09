function firtst_half(str){
    if (str.length % 2 === 0) {
        return str.slice(0, str.length / 2);
    } else {
        return "The string length is not even.";
    }

}
console.log(firtst_half("PHP"));
console.log(firtst_half("Python"));
console.log(firtst_half("Javascript"));
