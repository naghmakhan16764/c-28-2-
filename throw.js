class Throw{

    constructor(bodyA, pointB){

        var option={
            bodyA: bodyA,
            pointA: pointB,
            stiffness: 0.01,
            length: 10
        }
        this.pointB=pointB;
        thisthrow = Constructor.create(options);
        World.add(world, this.throw);

    }
    fly(){
        this.throw.bodyA=null;

    }

    display();

}