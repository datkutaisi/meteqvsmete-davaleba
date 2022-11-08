function Car(cMake , cModel, cYear) {
    this.make = cMake;
    this.model = cModel;
    this.year = cYear;
    this.getCarInfo = function(){
        document.write(this.make + this.model + "released in" + this.year);
    };
};


function Person(Pname , Page, Pcars) {
    this.name = Pname;
    this.age = Page;
    this.cars = Pcars;
    this.driver = function (car){
        document.write("და ყავს მანქანა" + " " + car.make + " " + car.model+ " "+ "released in" + " "+ car.year);
    }
    this.personInfo = function(){
        document.write(this.name + " "+ "არის" + " "+ this.age+" " + "წლის"+" ");
    };
};

//var bill=

var tom= new Person('Tom', 24, );
tom.personInfo();

var bill= new Car('Tesla', 'Model S', 2015);
tom.driver(bill);