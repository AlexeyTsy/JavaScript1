/**
 * Created by AlexKate on 10/10/2016.
 */

////////////Задание 1////////////////

function arrayToList(arr) {
    var list = {};
    list.value = arr[0];
    arr.shift();
    if (arr.length != 0) {
        list.rest = arrayToList(arr);
    } else {
        list.rest = null;
    }
    return list;
}

function listToArray(list) {
    var arr = [];
    for (var i = list; i; i= i.rest) {
        arr.push(i.value);
    }
    return arr;
}

function prepend(a,  b) {
    var list = {};
    list.value = a;
    list.rest = b;
    return list;
}

function nth(list, num) {
    var element;
    var counter = 0;
    for (var i = list; i; i = i.rest, counter++) {
        if (counter == num) {
            element = i.value;
            break;
        }
    }
    return element;
}

console.log('Задание 1');
console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20 , 30]), 2));


