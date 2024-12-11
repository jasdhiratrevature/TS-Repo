# Class Decorator
Class decorators, as the name suggests, are used for decorating classes. 
The class decorator,  receives a parameter representing the class to be decorated.
```typescript
function Greeter(target: Function): void {
  target.prototype.greet = function (): void {
    console.log("Hello Jasdhir!");
  };
}

@Greeter
class User {}

let bytefer = new User();
(bytefer as any).greet();
```
When you successfully run the above code, the terminal will output the result — Hello Jasdhir!.