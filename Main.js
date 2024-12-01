console.log('#5. JavaScript homework exaple filem')

/*
 * #1
 *
 * Створіть функцію counter(), яка має реалізувати лічильник за допомогою замикання:
 * функція може приймати число як аргумент counter(n)
 * якщо число передано у функцію - лічба починається із зазначеного числа
 * якщо ні - то лічба триває
 */

console.log("Task 1:");
document.write("<h2>Task 1:</h2>");

const createCounter = function() {
    let count = 0;
    return function (n) {
        if (typeof n === "number")
            count = n;
        return count++;
    }
}

let counter = createCounter();
console.log(counter()) // 0
console.log(counter()) // 1
console.log(counter(100)) // 100
console.log(counter()) // 101
console.log(counter()) // 102
console.log(counter(500)) // 500
console.log(counter()) // 501
console.log(counter()) // 502
console.log(counter(0)) // 0
console.log(counter()) // 0
console.log(counter()) // 1
console.log("");

counter = createCounter();
document.write(`<p>${counter()}</p>`) // 0
document.write(`<p>${counter()}</p>`) // 1
document.write(`<p>${counter(100)}</p>`) // 100
document.write(`<p>${counter()}</p>`) // 101
document.write(`<p>${counter()}</p>`) // 102
document.write(`<p>${counter(500)}</p>`) // 500
document.write(`<p>${counter()}</p>`) // 501
document.write(`<p>${counter()}</p>`) // 502
document.write(`<p>${counter(0)}</p>`) // 0
document.write(`<p>${counter()}</p>`) // 0
document.write(`<p>${counter()}</p>`) // 1

/*
 * #2
 *
 * Створіть функцію counterFactory, яка має реалізувати три методи за допомогою замикання:
 * початкове значення лічильника - 0
 * counterFactory.value() - повертає значення лічильника
 * counterFactory.value(n) - встановлює значення лічильника, повертає нове значення
 * counterFactory.increment() - збільшує значення лічильника на 1
 * counterFactory.decrement() - зменшує значення лічильника на 1
 */


console.log("Task 2:");
document.write("<h2>Task 2:</h2>");

const counterFactory = (function () {
        let count = 0;

        return {
            increment() {
                count++;
            },

            decrement() {
                count--;
            },

            value(n) {
                if (typeof n === "number")
                    count = n;
                return count;
            }
        }
})();

console.log(counterFactory.value()) // 0
document.write(`<p>${counterFactory.value()}</p>`);

counterFactory.increment()
counterFactory.increment()
counterFactory.increment()

console.log(counterFactory.value()) // 3
document.write(`<p>${counterFactory.value()}</p>`);

counterFactory.decrement()
counterFactory.decrement()

console.log(counterFactory.value()) // 1
document.write(`<p>${counterFactory.value()}</p>`);
console.log(counterFactory.value(100)) // 100
document.write(`<p>${counterFactory.value(100)}</p>`);

counterFactory.decrement()

console.log(counterFactory.value()) // 99
document.write(`<p>${counterFactory.value()}</p>`);
console.log(counterFactory.value(200)) // 200
document.write(`<p>${counterFactory.value(200)}</p>`);

counterFactory.increment()

console.log(counterFactory.value()) // 201
console.log("");

document.write(`<p>${counterFactory.value()}</p>`);

/*
 * #3
 *
 * Створіть функцію myPow(a, b, myPrint). Всередині реалізуйте рекурсію для підрахунку результату піднесення числа a до ступеня b.
 * - Функція myPrint(a, b, res) - глобальна функція, що має генерувати з параметрів a, b, res рядок вигляду 'a^b=res' і повертати його.
 * - myPrint() має бути передана в myPow() як параметр і викликана всередині як callback-функція.
 * - функція myPow() як значення, що повертається, приймає результат myPrint().
 * Наприклад:
 * console.log(myPow(3, 4, myPrint)); // 3^4=81
 * console.log(myPow(2, 3, myPrint)); // 2^3=8
 * console.log(myPow(2, 0, myPrint))  // 2^0=1
 * console.log(myPow(2, -2, myPrint)) // 2^-2=0.25
 */


console.log("Task 3:");
document.write("<h2>Task 3:</h2>");

const myPrint = (a, b, res) => {
    return `${a}^${b}=${res}`
}
const myPow = (a, b, cb) => {
    let result;
    if (b > 0){
        result = a * myPow(a, b-1);
    }
    else if (b === 0) {
        result = 1;
    } 
    else {
        result = 1 / myPow(a, -b);
    }

    if(cb) {
        return cb(a, b, result);
    }
    else {
        return result;
    }
}

console.log(myPow(3, 4, myPrint)) // 3^4=81
console.log(myPow(2, 3, myPrint)) // 2^3=8
console.log(myPow(2, 0, myPrint)) // 2^0=1
console.log(myPow(2, -2, myPrint)) // 2^-2=0.25
console.log("");

document.write(`<p>${myPow(3, 4, myPrint)}</p>`);
document.write(`<p>${myPow(2, 3, myPrint)}</p>`);
document.write(`<p>${myPow(2, 0, myPrint)}</p>`);
document.write(`<p>${myPow(2, -2, myPrint)}</p>`);

/*
 * #4
 * Створіть функцію myMax(arr), яка як параметр приймає
 * довільний числовий масив і повертає максимальне число з переданого їй масиву.
 * У реалізації функції має бути застосовано метод Math.max() і apply().
 */

console.log("Task 4:");
document.write("<h2>Task 4:</h2>");

const list = [12, 23, 100, 34, 56, 9, 233]
const myMax = (arr) => Math.max.apply(null, arr);

console.log(myMax(list)); // 233
console.log("");

document.write(`<p>${myMax(list)}</p>`)

/*
 * #5
 *
 * Створіть функцію myMul(a, b), яка буде множити числа а і b, повертаючи результат.
 */

console.log("Task 5:");
document.write("<h2>Task 5:</h2>");

const myMul = (a, b) => a * b; 

/*
 * Створіть функції myDouble(n), яка приймає один параметр і подвоює його.
 * Використовувати множення або інші математичні операції всередині функції - заборонено, тільки bind() і myMul().
 * Функція повертає результат обчислення.
 */

const myDouble = (a) => {
    const result = myMul.bind(a, 2);
    return result(a);
};

console.log(myDouble(3)) // = myMul(2, 3) = 6
console.log(myDouble(4)) // = myMul(2, 4) = 8
console.log(myDouble(5)) // = myMul(2, 5) = 10

document.write(`<p>${myDouble(3)}</p>`);
document.write(`<p>${myDouble(4)}</p>`); 
document.write(`<p>${myDouble(5)}</p>`);
// Аналогічним чином створюємо функцію myTriple(n), яка потроює параметр, що приймає, повертаючи результат.

const myTriple = (a) => {
    const result = myMul.bind(a, 3);
    return result(a);
};

console.log(myTriple(3));
console.log(myTriple(4));
console.log(myTriple(5));

document.write(`<p>${myTriple(3)}</p>`);
document.write(`<p>${myTriple(4)}</p>`);
document.write(`<p>${myTriple(5)}</p>`);
