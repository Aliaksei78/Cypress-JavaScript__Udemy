/* arr.filter(callback, contextObject); - make new array by filtering every element of initial array. Под капотом, filter() итерирует по каждому
                                          элементу в массиве и передаёт каждый из них самой callback() функции. Если callback() выдаёт true, 
                                          то этот элемент будет включен в финальный массив.
              function callback(current, index, array)
                                current - текущее значение массива, filter проходит по всем значениям
                                index - индекс текущего значения массива, необязательный параметр
                                array - сам массив, необязательный параметр
              contextObject - объект, задающий контекст, передав который, можно ссылаться на него с помощью this уже внутри callback() функции,
                              необязательный параметр
 */
"use strict";

const a = [5, 10, 15, 20, 25, 30];

const even = a.filter(current => current % 2 == 0)                    // I do not like this way
console.log(even);                                                    // [ 10, 20, 30 ]
console.log('**********************************************');

const even1 = a.filter((current) => {
    if (current % 2 == 0) return current                              // I think it is more obvious
})
console.log(even1);                                                   // [ 10, 20, 30 ]
console.log('**********************************************');


const cities = [{ name: 'Novosibirsk', population: 1612833 },
{ name: 'Kaliningrad', population: 482443 },
{ name: 'Kaluga', population: 336726 },
{ name: 'Minsk', population: 2000002 }
];
const small_cities = cities.filter((current) => current.population > 1000000);
console.log(small_cities);
console.log('**********************************************');



// +contextObject и ссылка него с помощью this
function isInRange(value) {                                                           // callback
    if (typeof value !== 'number') {
        return false;
    }
    if (value >= this.lower && value <= this.upper)                                   // === return value >= this.lower && value <= this.upper;
        return value;
}
const data = [10, 20, "30", 1, 5, 'JavaScript filter', undefined, 'example', NaN];
const range = { lower: 1, upper: 10 };                                                // contextObject
const numberInRange = data.filter(isInRange, range);
console.log(numberInRange); // [10, 1, 5]
console.log('**********************************************');


// исключить из массива: пустые строки, null и undefined
const arr = [0, null, 42, undefined, "", true, false, NaN, "", "foo bar"];
const filteredArr = arr.filter((current) => {
    return !(current === "" || typeof (current) == "undefined" || current === null);
});
console.log(filteredArr);                                                               // [0, 42, true, false, NaN, "foo bar"]


// исключить из массива: все false значения, включая NaN, пустые строки и undefined.    // Cool!! but below more obvious
const trueOnly = arr.filter(Boolean);
console.log(trueOnly);                                                                  // [42, true, "foo bar"]

// исключить из массива: все false значения, включая NaN, пустые строки и undefined.
const trueOnly1 = arr.filter((current) => {
    return Boolean(current)                                                             // I think it is more obvious than above
});
console.log(trueOnly1);                                                                 // [42, true, "foo bar"]
console.log('**********************************************');


// отфильтровать массив слов по наличию нескольких нужных букв.
const girls = ['Alena', 'Malena', 'Milena', 'Sveta', 'Olya'];
let filterValues = (name) => {
    return girls.filter((current) => {
        return current.toLowerCase().indexOf(name.toLowerCase()) > -1;
    });
}
console.log(filterValues('le'));     // [ 'Alena', 'Malena', 'Milena' ]
console.log('**********************************************');


// использую все три аргумента для callback() функции 
let cities1 = ['Smolevichi', 'Prague', 'Minsk'];
let cool = [];
let long = cities1.filter((current, index, array) => {
    array[index] += ' cool'
    cool.push(array[index]);
    return current.length >= 10
});
console.log(cool);              // [ 'Smolevichi cool', 'Prague cool', 'Minsk cool' ]
console.log(long);              // [ 'Smolevichi' ]
