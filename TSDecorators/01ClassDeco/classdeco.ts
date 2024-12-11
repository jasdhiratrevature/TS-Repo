function Greeter(target: Function): void {
    target.prototype.greet = function (): void {
      console.log("Hello Jasdhir!");
    };
  }
  
  @Greeter
  class User {}
  
  let bytefer = new User();
  (bytefer as any).greet();