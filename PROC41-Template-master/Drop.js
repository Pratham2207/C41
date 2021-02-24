class Drop{
    constructor(){
        var x = random(width);
        var y = random(-100,-10);
        this.width = 5;
        this.height = 10;
        this.pos = createVector(x,y);
        this.vel = createVector(0,5);
    }
    display(){
        fill(0,0,255);
        ellipseMode(RADIUS);
        rect(this.pos.x,this.pos.y,this.width,this.height);
    }
    update(){
        this.pos.add(this.vel);
    }
}