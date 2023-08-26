// ДЗ 17. Багатоквартирний будинок

// 1. Створити клас Людина.
// Властивості:
//   імʼя;
//   стать.
// Методи:
//   конструктор, який приймає два параметри: імʼя та стать.



class Person {
    constructor(name, sex){
        this.name = name;
        this.sex = sex;
    }
}



// 2. Створити клас Квартира.

// Властивості:
//   конструктор не потрібен;
//   масив жителів, який при створенні пустий.
// Методи:
//   додати жителя - метод повинен приймати екземпляр класу Людина, та додавати до масиву жителів.



class Apartment {
    residents = [];

    addResident(person){
        this.residents.push(person);
    }
}



// 3. Створити клас Будинок.

// Властивості:
//   масив квартир, який при створенні пустий;
//   максимальна кількість квартир.
// Методи:
//   конструктор, який приймає один параметр: максимальну кількість квартир;
//   додати квартиру - метод повинен приймати екземпляр класу Квартира, перевіряти, чи не буде кількість перевищувати максимальну кількість квартир, і якщо це так, додати квартиру, в іншому випадку виводить у консоль відповідне повідомлення.



class Building {
    constructor(maxApartments){
        this.maxApartments = maxApartments;
        this.apartments = [];
    }

    addApartment(apartment){
        if(this.apartments.length < this.maxApartments){
            this.apartments.push(apartment);
        } else {
            console.log( 'Cannot add more. You have reached maximum amount of apartments');
        }
    }
}


// створити: декілька екземплярів класу Людина;

const john = new Person('John', 'male');
const jane = new Person('Jane', 'female');
const ben = new Person('Ben', 'male');
const kate = new Person('Kate', 'female');


// створити: декілька екземплярів класу Квартира;

const apartment_1 = new Apartment;
const apartment_2 = new Apartment;
const apartment_3 = new Apartment;
const apartment_4 = new Apartment;
const apartment_5 = new Apartment;
const apartment_6 = new Apartment;


// додадити екземпляри класу Людина до екземплярів класу Квартира;

apartment_1.addResident(john);
apartment_2.addResident(jane);
apartment_3.addResident(ben);
apartment_2.addResident(kate);


// екземпляр класу Будинок;

const building_1 = new Building(5);


// додадити екземпляри класу Квартира до екземплярів класу Будинок.

building_1.addApartment(apartment_1);
building_1.addApartment(apartment_2);
building_1.addApartment(apartment_3);
building_1.addApartment(apartment_4);
building_1.addApartment(apartment_5);


// check

console.log(apartment_1.residents);
console.log(apartment_2.residents);
console.log(apartment_3.residents);

console.log(building_1.apartments);

building_1.addApartment(apartment_6);

// якщо я зрозуміла умову правильно.