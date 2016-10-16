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
console.log(nth(arrayToList([10, 20 , 30]), 0));


////////////Задание 2////////////////

function reverseArray(array) {
    var output = [];
    for (var i = array.length - 1; i>=0; i--) {
        output.push(array[i]);
    }
    return output;
}

function reverseArrayInPlace(array) {
    var first = null;
    var last = null;
    var length = array.length;
    for (first = 0; first < length/2; first++) {
        last = length - 1 - first;
        [array[first], array[last]] = [array[last], array[first]];
    }
    return array;
}


console.log('-----------Задание 2--------------');
console.log(reverseArray([2, 4, 5, 6]));
console.log(reverseArrayInPlace([10, 20, 30]));
console.log(reverseArrayInPlace(["corrib", "oil", "company"]));
