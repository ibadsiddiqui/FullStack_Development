var Car = function() {
    //thi is a private variable
    var speed = 20;

    //these are public methods
    this.accelerate = function(change) {
        speed += change;
    };
    this.decelerate = function() {
        speed -= 5;
    };
    this.getSpeed = function() {
        return speed;
    };
};

var Bike = function() {
    var gear = 0;
    this.setGear = function(gr) {
        gear = gr;
    };
    this.getGear = function() {
        return gear;
    };
}