/**
 * Created by AlexKate on 10/8/2016.
 */

/////////////Задание 1///////////////////////

function transform(a, b, c) {
    function dec(i) {
        if (i > 255 || i < 0) {
            return ("Не верный дипазон!");
        } else if (isNaN(i)) {
            return ("Введено не числовое значение");
        } else if (i > 15) {
            return (i.toString(16));
        } else {
            return ("0" + i.toString(16));
        }
    }
var result = dec(a) + dec(b) + dec(c);
return ("#" + result);
}

console.log(transform(15, 15, 15));
console.log(transform(12, 13, 15));
console.log(transform(1, 1, 1));
console.log(transform(4, 4, 4));
console.log(transform(125, 136, 200));


/////////////Задание 2///////////////////////
var obj = {sotni: "", desjatki: "", edinici: ""};
var number = prompt("Введи число от  0 до 999");
if ((number > 999) || (number < 0)) {
    console.log("Не верный диапазон!");
}   else if (isNaN(number)) {
    console.log("Введено не число!");
}   else {
    function newbee(number) {
        while (number >=0) {
            var s = Math.floor(number / 100);
            var d = Math.floor((number - s * 100)/10);
            var e = number - s*100 - d*10;
            number = number - s*100 - d*10 - (e+1);
        }
        obj.sotni = s;
        obj.desjatki = d;
        obj.edinici = e;
    }
    newbee(number);
}

console.log(obj);


