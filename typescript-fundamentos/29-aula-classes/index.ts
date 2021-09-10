class Car {
  // fields
    model: String;  
    doors: Number;  
    isElectric: Boolean;
  
  constructor(model: String, doors: Number, isElectric: Boolean) {  
      this.model = model;  
      this.doors = doors;  
      this.isElectric = isElectric;  
    }
  // methods
  displayMake(): void {  
      console.log(`This car is ${this.model}`);  
    }
}
    
const Prius = new Car('Prius', 4, true);  
Prius.displayMake(); // This car is Prius


// ## Herança


class Animal {
    name: string;
    constructor(theName: string) { this.name = theName; }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Snake extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}

class Horse extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}

let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);

