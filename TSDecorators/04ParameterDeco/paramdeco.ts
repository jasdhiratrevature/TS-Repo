const parameterDecorator = (target: any, methodName: string, position: number) => {
    // do something with your parameter
    console.log('Parameter decorator!');
    console.log(target);
    console.log(methodName);
    console.log(position);
  }
  
  class Product {
    title: string;
    private _price: number;
  
    constructor(t: string, p: number) {
      this.title = t;
      this._price = p;
    }
  
    getPriceWithDiscount(name:string,@parameterDecorator discount: number) {
      return this._price - (this._price * discount) / 100;
    }
  }