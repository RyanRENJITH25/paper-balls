class ground
{
	constructor(x,y,w,h)
	{
	
		var ground_options={
            isStatic:true
        }

        this.body=Bodies.rectangle(x,y,w,h, ground_options);
        this.w=w;
        this.h=h;
        World.add(world,this.body);
	
	}

	display()
	{
			var pos=this.body.position;		
			push()
			translate(pos.x, pos.y);
			rectMode(CENTER)
			strokeWeight(4);
			fill(255,255,0)
			rect(0,0,this.w, this.h);
			pop();
	}
}