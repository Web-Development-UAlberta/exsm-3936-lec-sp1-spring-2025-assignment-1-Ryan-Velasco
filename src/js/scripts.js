async function main() {
  //First class (engine) - number of cylinders and whether it is running or not (start at false)
  class Engine {
    constructor(cylinders) {
      this.cylinders = cylinders;
      this.engineRunning = false;
    }
  }
  //Second class (car) - make, model, year, odometer, engine (instance of engine class), include method to start/stop car and drive
  class Car {
    constructor(make, model, year, engineCylinders) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.odometer = 0; //Always starts at zero
      this.engine = new Engine(engineCylinders);
    }

    startEngine() {
      this.engine.engineRunning = true;
    }

    stopEngine() {
      this.engine.engineRunning = false;
    }

    drive(distance) {
      if(!this.engine.engineRunning) {
        throw new Error("ERROR: Cannot drive car while the engine is turned off.");
      }

      this.odometer += distance;
    }
  }

}
