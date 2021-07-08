class Paper {
    constructor(x, y, radius) {
        var options = {
            'restitution': 0.3,
            'friction': 0.5,
            'density': 1.2
        }
        this.x = x;
        this.y = y;
        this.r = radius
        this.image = loadImage("paper.png");
        this.body = Bodies.circle(this.x, this.y,(this.r-20)/2, options);       
        this.radius = radius;
        //this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
    }
    display() {
        var position= this.body.position
        push();
        translate(position.x, position.y);
        rectMode(CENTER)
        //rotate(angle);
        fill("deeppink")
        //ellipseMode(RADIUS);
        //ellipse( 0, 0, this.radius, this.radius);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r, this.r)
        pop();
    }
}