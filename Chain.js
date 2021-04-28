class Chain{
constructor(bodyA,bodyB){
    var options={
        bodyA:bodyA,
        bodyB:bodyB,
        stiffness:0.7,
        length:10

    }
    this.chain=Constraint.create(options);
    World.add(world,this.chain);
    
}

display(){
    push ();
    strokeWeight (5);
    stroke("red");
    line (this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y);
    pop ();

}

}