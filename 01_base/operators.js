//Операторы

//1) +   //2) =
//3) -   //4) % (остаток от деления)
//5) *   //6) ++ (увеличение на 1)
//7) /   //8) -- (уменьшение на 1)



//Операторы сравнения

//1) == (равно)            2) === (строгое равно)
//3) != (не равно)         4) !== (не равно строгое)
//5) > (больше)            6) < (меньше)
//7) >= (больше или равно) 8) <= (меньше или равно)



//Логические операторы

// && - и
result = a && b;

// || - или
result = a || b;

// ! - не
result = !value;



//Условные операторы
let a = 10;
let b = 20;


// if(с одной ветвью)
if (a > b) {
    console.log('a больше б');
}

// if...else(c двумя ветвями)
if (a > b) {
    console.log(true);
} else {
    console.log(false)
}

// if...else if(c несколькими ветвями)
if (a > b) {
    console.log(true);
} else if (a < b) {
    console.log(false);
} else {
    console.log('Они равный');
}

// ?:(тернарный оператор)
a < b ? console.log(true) : console.log(false);

// switch(оператор выбора)
let c = 2 + 2;

switch (c) {
  case 3:
    console.log( 'Маловато' );
    break;
  case 4:
    console.log( 'В точку!' );
    break;
  case 5:
    console.log( 'Перебор' );
    break;
  default:
    console.log( "Нет таких значений" );
}