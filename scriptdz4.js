///////////Задание 1//////////////////////////////////////////////////////

function min(a, b) {
	if (a < b) {
		return (a);
}
	else {
		return (b);
}
}
console.log(min(0, 10));
console.log(min(0, -10));

////////////Задание 2///////////////////////////////////////////////////

var char = prompt("Введите букву");
var string = prompt("Введите строку");
var count = 0;
function countBs(a, b){
	for (var i=0; i < b.length - 1; i++) {
		if (a == b.charAt(i)){
		count++;
		}
	}
}
countBs(char, string);
console.log(count);

////////////Задание 3///////////////////////////////////////////////////

function isEven(n){
    if (n == 0){
        return true;
    } else if (n < 0) {
        return isEven(n + 2);
    } else if(n == 1) {
        return false;
    } else {
        return isEven(n-2);
    }
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(0));
console.log(isEven(-1));
console.log(isEven(-10));
console.log(isEven(-75));
