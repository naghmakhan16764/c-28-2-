class mango{

    constructor(){

        var option={
            isStatic:false,
            'restitution':0.5,
            'friction':1.0,

        }
        this.body = Bodies.circle(x,y,diametere,options );
        this.diametere=diametere;
        this.image = loadImage("mango.png")
        World.add(world, this.body);



    }

    display();
    push();
    translate(this.body.position.x,this.body.position.y);
    imageMode(CENTER);
    image(this.image,0,0,this.diametere);
    pop();



}