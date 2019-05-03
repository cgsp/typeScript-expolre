var Person = /** @class */ (function () {
    function Person(name, age) {
        if (name === void 0) { name = 'gsp'; }
        if (age === void 0) { age = 18; }
        this.name = name;
        this.age = age;
        this.name = name;
        this.age = age;
    }
    Person.prototype.showName = function () {
        console.log(this.name);
    };
    Person.prototype.showAge = function () {
        console.log(this.age);
    };
    return Person;
}());
var p = new Person('chang');
p.showAge();
p.showName();
