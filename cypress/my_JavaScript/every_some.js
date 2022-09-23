/* arr.every(callback) - возвращает true, если вызов callback вернёт true для каждого элемента первоначального массива
    arr.some(callback) - возвращает true, если вызов callback вернёт true для какого-нибудь элемента первоначального массива
             function callback(current, index, array)
                               current - текущее значение массива, filter проходит по всем значениям
                               index - индекс текущего значения массива, необязательный параметр
                               array - сам массив, необязательный параметр
 */
"use strict";

const a = [-5, -10, -15, 20, -25, 30];

function isPositive(number) {
    return number > 0;
}

const every_result = a.every((current) => {
    return current > 0
});
console.log(every_result);                   // false, не все положительные

const some_result = a.some((current) => {
    return current > 0
});
console.log(some_result);                    // true, есть хоть одно положительное
console.log('*************************');


// или так:
function isPositive(current) {
    return current > 0;
}
console.log(a.every(isPositive));           // false, не все положительные
console.log(a.some(isPositive));            // true, есть хоть одно положительное
