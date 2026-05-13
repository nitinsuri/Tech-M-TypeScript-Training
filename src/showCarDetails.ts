import {Car} from './class.car.details.ts'

class ElectricCar extends Car {
    constructor(
        brand:string,
        model:string,
        year: number,
        public batteryRange:number
    ) {
        super(brand,model, year)
    }
}

const myEV = new ElectricCar('BYD','Shark',2026)

console.log(myEV.getDetails())