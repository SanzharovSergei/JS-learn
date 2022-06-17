//Функции

//Функция - это блок кода, предназначенный для выполнения определенной задачи;

//Функция:
function calculateAge(year){
    return 2022 - year;
}
console.log('Ваш возраст:'+calculateAge(2020)+'года');

//Стрелочная функция:

let calcAge=(year)=>{
    return 2022 - year;
}
console.log('Ваш возраст:'+calcAge(2020)+'года');