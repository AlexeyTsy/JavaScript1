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


