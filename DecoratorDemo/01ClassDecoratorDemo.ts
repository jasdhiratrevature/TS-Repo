function Greeting(target:Function){
        console.log("Hello User")
        target.prototype.greet=function():void{
            console.log("Hello Decorator !!!")
        }
}

@Greeting  // Decorator
class User{

}

let user=new User();
(user as any).greet();