class Car{
    constructor (){
        console.log("Engine start")
    }
    drive(){
        console.log("Car is driving")
    }
    stop(){
        console.log("Car is stop")
    }
}
let Ranger=new Car()
Ranger.drive()
Ranger.stop()

class ship extends Car{

}
let ForceRanger=new ship()
 ForceRanger.drive()
 ForceRanger.stop()