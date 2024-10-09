function neartoonehundred(x, y){
    var a = 100 - x;
    var b = 100 - y;
    if (a > b){
        return b;
    }
    else if(a == b){
        return false;
    }

}

console.log(neartoonehundred(90, 89));
console.log(neartoonehundred(-90, -89));
console.log(neartoonehundred(90, 90));