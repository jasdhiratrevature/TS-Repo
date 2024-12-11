var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//const methodDecorator = (target: any, methodName: string, descriptor: PropertyDescriptor) => {
function methodDecorator(target, methodName, descriptor) {
    // do something with your method
    console.log('Method decorator!');
    console.log(target);
    console.log(methodName);
    console.log(descriptor);
}
var Product = /** @class */ (function () {
    function Product(t, p) {
        this.title = t;
        this._price = p;
    }
    Product.prototype.getPriceWithDiscount = function (discount) {
        return this._price - (this._price * discount) / 100;
    };
    __decorate([
        methodDecorator
    ], Product.prototype, "getPriceWithDiscount", null);
    return Product;
}());
