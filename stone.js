class stone{

    constructor(x,y,diameter) {
        var options = {
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.body = Bodies.circle(x,y,diameter,options)
        this.diametere=diametere;
        World.add(world, this.body);

    }
    display();
    push();
    imageMode(CENTER)
    image(this.image,0, 0, this.diametere);
    pop();
}