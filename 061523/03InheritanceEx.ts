abstract class Person{
    firstName:string
     lastName:string
     constructor(firstName:string,lastName:string){
        
         this.firstName=firstName
         this.lastName=lastName
     }
     getFullName():string{
         return `${this.firstName} ${this.lastName}`
     }

     describe():string{
        return `This is ${this.firstName} ${this.lastName}`
    }
 }

 class Employee extends Person{
    constructor(firstname:string,lastName:string, private jobRole:string){
        super(firstname,lastName)
    }
    describe():string{
        return  super.describe()+` ${this.jobRole}`
    }
 }

 let emp1=new Employee("Udhaya","Kumar","Web Developer");

 //console.log(emp1.getFullName());
 console.log(emp1.describe());

 //let person1=new Person('Tauqeer','Alam');