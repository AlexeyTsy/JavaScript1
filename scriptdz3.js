document.write("<br />" + "ЗАДАНИЕ 1:" + "<br />" + "<br />");

var a="#";
var i = 1;
while (i <=7 ) {
    i++;
    document.write(a + "<br />");
    a = a + "#";
}

document.write("<br />" + "<br />" + "ЗАДАНИЕ 2:" + "<br />" + "<br />");

var c = "#";
var b = "_";

for (var n = 1; n <= 4; n++){
    for (var j = 1; j<=4; j++){
        var line = c + b;
        if (j % 4 == 0){
            line = line + "<br />";
        }
        if (n % 2 == 0) {
            line = '\u202E' + line;
        }
        document.write(line);
    }
}
