//Вывод данных на экран

// 1)document.write - вывод на экран
document.write('Some text');

// 2)console.log - вывод в консоль
console.log('Some text');

// 3)window.alert - вывод в окне
window.alert('Some text');

// 4)innerHTML - вывод через HTML
<p id='demo'></p>
document.getElementById('demo').innerHTML='Some text';


//Ввод значений от пользователя

//prompt
let text=prompt('Введите значение');