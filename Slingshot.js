class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 250
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        this.crane = loadImage("sprites/crane.png")
        World.add(world, this.sling);
    }
    attach(body){
        this.sling.bodyA = body;
    }
    
    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.crane,460,200,300,400)
            if(this.sling.bodyA){
                var pointA = this.sling.bodyA.position;
                var pointB = this.pointB;
                stroke("grey")
                strokeWeight(3);
                line(pointA.x , pointA.y - 50, pointB.x , pointB.y)
            }
           
        }
    }