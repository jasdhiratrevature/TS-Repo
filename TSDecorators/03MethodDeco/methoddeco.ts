//const methodDecorator = (target: any, methodName: string, descriptor: PropertyDescriptor) => {
// tsc -t es5 .\03MethodDeco\methoddeco.ts for compile    
function methodDecorator  (target: any, methodName: string, descriptor: PropertyDescriptor):any  {
    // do something with your method
    console.log('Method decorator!');
    console.log(target);
    console.log(methodName);
    console.log(descriptor);
  }
  
  class Product {
    title: string;
    private _price: number;
  
    constructor(t: string, p: number) {
      this.title = t;
      this._price = p;
    }
  
    @methodDecorator
    getPriceWithDiscount(discount: number) {
      return this._price - (this._price * discount) / 100;
    }
  }