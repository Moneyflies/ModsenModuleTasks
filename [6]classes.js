class Person {
    constructor(name, age, country) {
      this.name = name;
      this.age = age;
      this.country = country;
    }
    displayInfo() {
        console.log(this.name);
        console.log(this.age);
        console.log(this.country);
    }
}

const Person1 = new Person("Joe", 18, "Denmark");
const Person2 = new Person("Key", 20, "Niger");

Person1.displayInfo();
Person2.displayInfo();