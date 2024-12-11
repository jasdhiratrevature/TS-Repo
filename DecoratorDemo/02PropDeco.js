var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var propDecorator;
(function (target, propertyName) {
    var currentAge = target[propertyName];
    Object.defineProperty(target, propertyName, {
        set: function (newAge) {
            if (newAge < 18) {
                return;
            }
            currentAge = newAge;
        },
        get: function () { return currentAge; }
    });
});
var Person = /** @class */ (function () {
    function Person() {
        this.age = 30;
    }
    __decorate([
        propDecorator
    ], Person.prototype, "age");
    return Person;
}());
var person = new Person();
console.log(person.age); // 30
person.age = 17;
console.log(person.age); // 17 -- 30
person.age = 24;
console.log(person.age); //24
