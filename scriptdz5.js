/**
 * Created by AlexKate on 10/8/2016.
 */

/////////////Задание 1///////////////////////

function transform(a, b, c) {
    function dec(i) {
        if (i > 255 || i < 0) {
            return ("Не верный дипазон!");
        } else if (isNaN(i)) {
            return ("Введите число!");
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