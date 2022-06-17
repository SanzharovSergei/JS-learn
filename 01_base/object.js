//Объекты

//Создание объекта(синтаксис):
const person = {
    name: 'Sergei',
    age: 29,
    greet: function () {
        console.log('greet');
    }
}

//person - название объекта
//name - ключ
//'Sergei'- значение
//greet - метод объекта

//Обращение:
console.log(person.name);
console.log(person['name']);
person.greet();

//Изменение значения:
person.age = 30;
console.log(person.age);

//Добавление новых ключей:
person.isProgrammer = true;
console.log(person.isProgrammer);
