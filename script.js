let user = 
{
    login: 'vasua123',
    name: 'Вася Пупкин',
    regDate: new Date(11,11,2011),
    url: '1.jpg',
    orders: [111, 1213, 3323]
}

let comment =
{
    date: new Date(11,11,2011),
    text: 'Текст на русском',
    author: 'vasya123',

    showComment(){
        return(`${this.author}: ${this.text} at ${this.date}`);
    }

}
console.log(comment);

let cat = {
    name: 'Барсик',
    age: 3,
    weight: 5.5,
    happines: 3,

    feedCat(){
        this.happines = this.happines + 5;
    }
}

let calc = {
    sum(a, b){
        return a + b;
    }
}

let car = {}

car.brand = 'BMW';
car['brand'] = 'Mercedes';
car.frive = function(){
    console.log('Хочу на тест драйв');
}

class Animal {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
    showInfo() {
        console.log('Это ' + this.type);
    }
}
let animal1 = new Animal('Снежок', 'кот');


//Статический метод проверки входящей коллекции инпутов на пустое значение
//в статические методы информация приходит снаружи в аргумент функции
class Validation {
    static CheckEmpty(collection) {
        let isEmpty = false;
        for(let input of collection){ //проходимся по массиву из колеекции инпутов пришедшей из array
            if(input.value == '')
                isEmpty = true;
        }
        return isEmpty;
    }
}

let array = document.querySelectorAll('test');
let isEmpty = Validation.CheckEmpty(array);

if (isEmpty){
    //есть пустой инпут
    alert('Есть пустой элемент');
}

function bike() {
    console.log(this.name)
}
let name = 'ninja';
let obj1 = {name: 'pomidor', bike: bike};
let obj2 = {name: 'site', bike: bike};

bike();
obj1.bike();
obj2.bike();


const person = {
    name: 'Valera',
    age: 23,
}
let city = person.city;
city = 'Amsterdam'

console.log(person)