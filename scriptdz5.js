/**
 * Created by AlexKate on 10/8/2016.
 */

function transform(a, b, c) {
    if ((a < 0) && (a > 255)) {
       console.log("Неверно введеное число!");
    }
    if ((b < 0) && (b > 255)) {
        console.log("Неверно введеное число!");
    }
    if ((c < 0) && (c > 255)) {
        console.log("Неверно введеное число!");
    }
    console.log("#" + a.toString(16) + b.toString(16) + c.toString(16));
}

transform(15, 15, 15);
