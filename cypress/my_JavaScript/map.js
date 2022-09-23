/* arr.map(callback) - создаёт новый массив, который будет состоять из результатов вызова функции callback для каждого элемента первоначального массива
           function callback(current, index, array)
                             current - текущее значение массива, filter проходит по всем значениям
                             index - индекс текущего значения массива, необязательный параметр
                             array - сам массив, необязательный параметр
 */
"use strict";

const a = [5, 10, 15, 20, 25, 30];

const double_a = a.map((current) => {
    return current * 2;
});
console.log(double_a);                                             // [ 10, 20, 30, 40, 50, 60 ]
console.log('**********************************************')


// использую все три аргумента для callback() функции
let odd = new Array();
const double_a1 = a.map((current, index, array) => {
    if (array[index] % 2 == 1) {
        odd.push(array[index]);
    }
    return current * index + array.length;
});
console.log(double_a1);                                             // [ 6, 16, 36, 66, 106, 156 ]
console.log(`odd = [${odd}]`);                                      // odd = [5,15,25]    обратные кавычки!!! )))
console.log('**********************************************')
