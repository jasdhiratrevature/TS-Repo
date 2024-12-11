// In the example below, we are going to prevent the age from being changed to a value lower than 18.
const propertyDecorator = (target: any, propertyName: string) => {
    let currentAge: number = target[propertyName];
  
    Object.defineProperty(target, propertyName, {
      set: (newAge: number) => {
        if (newAge < 18) {
          return;
        }
        currentAge = newAge;
      },
      get: () => currentAge
    });
  }
  
  class Person {
    @propertyDecorator
    age = 28
  }
  
  const person = new Person();
  console.log(person.age); // 28
  
  person.age = 16;
  console.log(person.age); // 28
  
  person.age = 24;
  console.log(person.age); // 24