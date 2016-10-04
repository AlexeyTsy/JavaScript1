
//ЗАДАНИЕ 1
var a = 1, b = 1, c, d;

c = ++a; document.write(c + "<br \>"); // a = a + 1, присваивает с значение а, с = 2
d = b++; document.write(d + "<br \>"); // присваивает значение d = 1, b = b + 1;

c = (2+ ++a); document.write(c + "<br \>"); // 5        a = 2 + 1; используем новое значение a, c = 2 + 3; c = 5;
d = (2+ b++); document.write(d + "<br \>"); // 4        b = 2 + 1; но используем старое значение b, d = 2 + 2; d = 4;

// Значения получили после арифметических действий, над каждым оперантом 2 раза
document.write(a + "<br \>"); // 3
document.write(b + "<br \>" + "<br \>"); // 3

//ЗАДАНИЕ 2

//x = 5, другими словами уравнение можно записать x = 1 + (a = a * 2), x = 1 + 4, x = 5

//ЗАДАНИЕ 3

for (var i=1;i<=100;i++) {
    if  ((i % 5 == 0) && (i % 3 == 0)) {
        document.write("FizzBuzz <br \>");
    }
    else if ((i % 5 == 0) && (i % 3 != 0)) {
        document.write("Buzz <br \>");
    }
    else if (i % 3 == 0) {
        document.write("Fizz <br \>");
    }
     else {
        document.write(i + "<br \/>");
    }
}
