class Log {
    constructor(x,y,height,angle){
    var options={
        restitution:0.3,
        friction:4,
        density:1
    }
    this.body= Bodies.rectangle(x,y,15,height,options)
      this.width= 15
      this.height=height
      Matter.Body.setAngle(this.body,angle)
      World.add(world,this.body);
    }
    display(){
        var pos= this.body.position

        var angle=this.body.angle
        push();
        translate(pos.x,pos.y);
        fill("brown");
        rotate(angle);
        rectMode(CENTER)
        rect(0,0,this.width,this.height);
        pop();
    }
}