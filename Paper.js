class Paper{
    constructor(x, y){
        var options = {
            isStatic: false,
            restitiution: 0.3,
            friction: 0.5,
            density: 1.2,

        }
        this.body = Matter.Bodies.circle(x, y, 70, options);
        
        World.add(world, this.body);
    }
       display(){
        var pos = this.body.position;
        push ();
        translate(pos.x, pos.y);
        fill ("pink");
        circle(0, 30, 70);
        pop ();
       }
}