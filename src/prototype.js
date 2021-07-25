function Particle() {
    this.x = 100;
    this.y = 99;
    this.show = function () {
        console.log("point ", this.x, this.y);
    }
}

var p = new Particle();