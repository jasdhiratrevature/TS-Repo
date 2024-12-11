class Person{
   private ssn:string
    firstName:string
    lastName:string
    constructor(ssn:string,firstName:string,lastName:string){
        this.ssn=ssn;
        this.firstName=firstName
        this.lastName=lastName
    }
    getFullName():string{
        return `${this.firstName} ${this.lastName}`
    }
}

let person1=new Person('ABCDE','Jasdhir','Singh')
console.log(person1.getFullName())
//console.log(person1.ssn);