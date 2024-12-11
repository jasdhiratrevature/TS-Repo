interface Car{
    readonly make:string;
    model:string;
    mileage?:number
}

let car: Required<Car>={
    make:'KIA',
    model:"Seltos",
    mileage:20

}