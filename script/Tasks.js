'use strict'
// //Task-1
let x = 10, y = 7;
//
let comparison = (x > y) ? 'x больше, чем y' : 'x не больше, чем y';
console.log(comparison);

// //Task-2
const numTask1 = +prompt('Ведите число(Task2)')

if ( numTask1 % 2 === 0 ){
    alert(`Число ${numTask1} четное`);
}else {
    alert(`Число ${numTask1} нечетное`);
}


//Task-3
let numTask2 = prompt('Введите целое число (Task3)');
let numLength = numTask2.length;

if(numTask2 > 0 && numLength === 1) {
    alert(`Число ${numTask2} однозначное положительное`);
}else if (numTask2 > 0 && numLength === 2) {
    alert(`Число ${numTask2} двузначное положительное`);
}else if (numTask2 > 0 && numLength === 3) {
    alert(`Число ${numTask2} трехзначное положительное`);
}else if(numTask2 < 0 && numLength === 2) {
    alert(`Число ${numTask2} однозначное отрицательное`);
}else if (numTask2 < 0 && numLength === 3) {
    alert(`Число ${numTask2} двузначное отрицательное`);
}else if (numTask2 < 0 && numLength === 4) {
    alert(`Число ${numTask2} трехзначное отрицательное`);
}else {
    alert(`Вы ввели не подходящие число`);
}



//Task-4
const a = +prompt('Введите первое число (Task-4)');
const b = +prompt('Введите второе число');
const c = +prompt('Введите третье число');

if( a > b && a > c){
    alert(`наибольшим числом являеться число ${a}`);
}else if( b > a && b > c){
    alert(`наибольшим числом являеться число ${b}`);
}else{
    alert(`наибольшим числом являеться число ${c}`);
}


//Task-5
const aSide = +prompt('Введите длину первой стороны (Task5)');
const bSide = +prompt('Введите длину второй стороны');
const cSide = +prompt('Ведите длину третьей стороны');

if (aSide + bSide > cSide  &&  aSide + cSide > bSide  &&  bSide + cSide > aSide){
    alert('Треугольник будет отличный')
}else{
    alert('Увы, но триугольник не получиться')
}





