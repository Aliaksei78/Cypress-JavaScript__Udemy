/* arr.reduse(total, current, index, array) - метод проходит по каждому элементу массива и возвращает 'total'
              total - его reduce и возвращает, можно установить начальное значение (иначе 0) и даже тип
              current - текущее значение массива, reduce проходит по всем значениям
              index - индекс текущего значения массива, необязательный параметр
              array - сам массив, необязательный параметр

   arr.reduceRight работает аналогично, но идёт по массиву справа-налево.
 */
"use strict";

const a = [5, 10, 15];

const sum0 = a.reduce((total, current) => total + current);          // I do not like this way.
console.log(sum0);   // 30
console.log('**********************************************')

const sum = a.reduce((total, current) => {
    total += current;
    return total
}, 0);                                                               // 0 is start value of 'total'.   When 0 you can do not write it but I will.
console.log(sum);  // 30
console.log('**********************************************')

const sum1 = a.reduce((total, current) => total + current, 20);      // 20 is start value of 'total'.
console.log(sum1);   // 50
console.log('**********************************************')

//_____________________________________________________________________________________________________________________________________________________

const average = a.reduce((total, current, index, array) => {
    total += current;
    if (index === array.length - 1) {
        return total / array.length;
    } else { return total; }
});
console.log(average);   // 10
console.log('**********************************************')

const average1 = a.reduce((total, current, index, array) => {
    total += current;
    if (index === array.length - 1) {
        return total / array.length;
    } else { return total; }
}, 90);                                                             // 90 is start value of 'total'.
console.log(average1);                                              // (90+30) / 3 == 40
console.log('**********************************************')

//_________________________________________________________________________________________________________________________________________________

const double_a = a.reduce((total, current) => {
    total.push(current * 2);
    return total;
}, []);                                                             // [] means that 'total' is array.
console.log(double_a);                                              // [10; 20, 30]
console.log('**********************************************')

const double_a1 = a.reduce((total, current) => {
    total.push(current * 2);
    return total;
}, [99]);                                                           // [99] means that 'total' is array with one element 99.
console.log(double_a1);                                             // [99, 10; 20, 30]
console.log('**********************************************')

const double_a2 = a.reduceRight((total, current) => {
    total.push(current * 2);
    return total;
}, [99]);                                                           // [99] means that 'total' is array with one element 99.
console.log(double_a2);                                             // [99, 30; 20, 10]
console.log('**********************************************')
