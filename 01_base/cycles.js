//Циклы

//Цикл — это повторяющаяся последовательность действий. 

let cars = ['Maзда', 'Порше', 'Мерседес'];

//4 цикла используемые в JS:

//1) for
for (let i = 0; i < cars.length; i++) {
    let car = cars[i]; //итерация массива
    console.log(car);
}

//2) for...of
for (let car of cars) {
    console.log(car);
}

//3)do...while
let i = 0;
do {
    let car = cars[i];
    console.log(car);
    i++;
} while (i < cars.length);

//4)while
let i = 0;
while (i < cars.length) {
    let car = cars[i];
    console.log(car);
    i++;
}