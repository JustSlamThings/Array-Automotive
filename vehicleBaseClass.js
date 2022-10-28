class Vehicle {
    constructor(make, model, year, color, passenger, speed, mileage, started, numberOfWheels) {
        this.make = make;   
        this.model = model;
        this.year = year;
        this.color = color;
        this.passenger = passenger;
        this.speed = speed;
        this.mileage = mileage;
        this.started = started;
        this.numberOfWheels = numberOfWheels;
    }

    start() {
        if (this.fuel > 0) {
            return this.started = true;
            console.log("engine started...!!!");
        } else {
            return this.started = false;
            console.log("engine cannot start...");
        }
    }
    accelerate() {
        if (this.started) {
            if (this.fuel > 0) {
                console.log(this.speed += 1);
                this.fuel = this.fuel - 1;
            } else {
                console.log("out of fuel.");
                this.stop();
            }
        } else {
            alert("You need to start the engine first.");
        }
    }
    decelerate() {
        if (this.started) {
            if (this.fuel > 0) {
                if (this.speed > 0) {
                    console.log(this.speed -= 1);
                    this.fuel = this.fuel - 1;
                } else {
                    console.log(this + " has stopped moving");
                    this.fuel = this.fuel - 1;
                }
            } else {
                console.log("out of fuel.");
                this.stop();
            }
        } else {
            alert("You need to start the engine first.");
        }
    }
    stop() {
        this.started = false;
    }

    drive() {
        accelerate();
    }
    brake() {
        decelerate();
    }

    autoPark()
    {

    }

    autoDrive()
    {
      
    }

    typeOfVehicle(wheels) {
        if (this.numberOfWheels == 8 && 8 == wheels) {
            console.log(this.model + " " + this.make + " is a Truck and is serviced in Charlotte, North Carolina, South Carolina");
            
        } else if (this.numberOfWheels == 4 && 4 == wheels) {
            console.log(this.model + " " + this.make + " is a Car and is serviced in Miami, Florida and Chicago, Illinois.");
        } else if (this.numberOfWheels == 2 && 2 == wheels) {
            console.log(this.model + " " + this.make + " is a Bike and we don't service bikes.");
        } else {
            console.log("Unknown type of vehicle and please refer to the Corporate Headquarters in Las Vegas, Nevada.");
        }
    }
}

/// TESTING TIME
const testVehicle = new Vehicle()
console.log(testVehicle)
