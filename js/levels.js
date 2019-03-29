var newLevel = (dir) => {
	if (dir == "left"){
		Level--;
		player.x = canvas.width - player.width;
	}
	else if (dir == "right"){
		Level++;
		player.x = 0;
	}
	
	Objects.boat.locked = false;
	Objects.plane.locked = false;
	
	holes = [];
	backgrounds = [];
	gems = [];
//LEVEL 1
if (Level == 1){
	pictures.backgrounds.backgroundColor = "#acf";
	
	backgrounds.push(new background(pictures.backgrounds.house, 1, 7, 8, 5), new background(pictures.backgrounds.hill1, 9, 8, 2, 4), new background(pictures.backgrounds.hill1, 17, 6, 3, 6));
	backgrounds.push(new background(pictures.backgrounds.cloud1, 6, 3, 2, 1), new background(pictures.backgrounds.palm, 6, 8, 2, 4),
					new background(pictures.backgrounds.mushroom, 12, 11, 1, 1), new background (pictures.backgrounds.cloud1, 17, 6, 2, 1),
					new background(pictures.backgrounds.tree, 23, 8, 3, 4));
					
	floor = {
		x: 0,
		y: canvas.height * .8,
		width: canvas.width,
		height: canvas.height * 0.2,
		update: function(){
			//ground
			context.beginPath();
			context.fillStyle = "yellow";
			context.rect(this.x, this.y, this.width, this.height);
			context.stroke();
			context.fill();
			context.closePath();
			//grass
			context.beginPath();				
			context.fillStyle = "green";
			context.rect(this.x, this.y, this.width, this.height * 0.35);
			context.stroke();
			context.fill();		
			context.closePath();		
		}
	};										
}
//LEVEL 2
else if (Level == 2){
	pictures.backgrounds.backgroundColor = "#acf";

	gems.push(new gemClass("pink", 10, 8, 0.5, 0.5), new gemClass("yellow", 15, 5, 0.5, 0.5), new gemClass("red", 10, 5, 0.5, 0.5));
	gems.push(new gemClass("white", 16, 9, 0.5, 0.5), new gemClass("rainbow", 17, 9, 0.5, 0.5), new gemClass("hazel", 19, 9, 0.5, 0.5));

	holes.push(new holeClass(10, 3));

	floor = {
		x: 0,
		y: canvas.height * .8,
		width: canvas.width,
		height: canvas.height * 0.2,
		update: function(){
			//ground
			context.beginPath();
			context.fillStyle = "yellow";
			context.rect(this.x, this.y, this.width, this.height);
			context.stroke();
			context.fill();
			context.closePath();
			//grass
			context.beginPath();				
			context.fillStyle = "green";
			context.rect(this.x, this.y, this.width, this.height * 0.35);
			context.stroke();
			context.fill();		
			context.closePath();		
		}
	};		
}
//LEVEL 3
else if (Level == 3){
	pictures.backgrounds.backgroundColor = "#acf";


	floor = {
		x: 0,
		y: canvas.height * .8,
		width: canvas.width,
		height: canvas.height * 0.2,
		update: function(){
			//ground
			context.beginPath();
			context.fillStyle = "yellow";
			context.rect(this.x, this.y, this.width, this.height);
			context.stroke();
			context.fill();
			context.closePath();
			//grass
			context.beginPath();				
			context.fillStyle = "green";
			context.rect(this.x, this.y, this.width, this.height * 0.35);
			context.stroke();
			context.fill();		
			context.closePath();		
		}
	};		
}
//LEVEL 4
else if (Level == 4){
		pictures.backgrounds.backgroundColor = "#acf";




	holes.push(new holeClass(15, 4));		
	
	floor = {
		x: 0,
		y: canvas.height * .8,
		width: canvas.width,
		height: canvas.height * 0.2,
		update: function(){
			//ground
			context.beginPath();
			context.fillStyle = "yellow";
			context.rect(this.x, this.y, this.width, this.height);
			context.stroke();
			context.fill();
			context.closePath();
			//grass
			context.beginPath();				
			context.fillStyle = "green";
			context.rect(this.x, this.y, this.width, this.height * 0.35);
			context.stroke();
			context.fill();		
			context.closePath();		
		}
	};	
}
//LEVEL 5
else if (Level == 5){
	pictures.backgrounds.backgroundColor = "#acf";
	Objects.cave.img = pictures.objects.caveentrance;
	Objects.cave.x = canvas.width * 0.667;
	Objects.cave.y = canvas.height * 0.265;

	floor = {
		x: 0,
		y: canvas.height * .8,
		width: canvas.width,
		height: canvas.height * 0.2,
		update: function(){
			//ground
			context.beginPath();
			context.fillStyle = "yellow";
			context.rect(this.x, this.y, this.width, this.height);
			context.stroke();
			context.fill();
			context.closePath();
			//grass
			context.beginPath();				
			context.fillStyle = "green";
			context.rect(this.x, this.y, this.width, this.height * 0.35);
			context.stroke();
			context.fill();		
			context.closePath();		
		}
	};		
}
//LEVEL 6
else if (Level == 6){
	pictures.backgrounds.backgroundColor = "caveentrance";	
	
	
	
		floor = {
		x: 0,
		y: canvas.height * .8,
		width: canvas.width,
		height: canvas.height * 0.2,
		update: function(){
			//cave ground
			context.beginPath();
			context.fillStyle = "brown";
			context.rect(this.x, this.y, this.width, this.height);
			context.stroke();
			context.fill();
			context.closePath();	
		}
	};	
}
//LEVEL 7
else if (Level == 7){

	pictures.backgrounds.backgroundColor = "black";	
	
	
	
		floor = {
		x: 0,
		y: canvas.height * .8,
		width: canvas.width,
		height: canvas.height * 0.2,
		update: function(){
			//cave ground
			context.beginPath();
			context.fillStyle = "brown";
			context.rect(this.x, this.y, this.width, this.height);
			context.stroke();
			context.fill();
			context.closePath();	
		}
	};

	
}
//LEVEL 8
else if (Level == 8){


	pictures.backgrounds.backgroundColor = "black";	
	


	holes.push(new holeClass(12, 4));	
	
		floor = {
		x: 0,
		y: canvas.height * .8,
		width: canvas.width,
		height: canvas.height * 0.2,
		update: function(){
			//cave ground
			context.beginPath();
			context.fillStyle = "brown";
			context.rect(this.x, this.y, this.width, this.height);
			context.stroke();
			context.fill();
			context.closePath();	
		}
	};
	
}
//LEVEL 9
else if (Level == 9){

	pictures.backgrounds.backgroundColor = "caveexit";	
	
	
	
		floor = {
		x: 0,
		y: canvas.height * .8,
		width: canvas.width,
		height: canvas.height * 0.2,
		update: function(){
			//cave ground
			context.beginPath();
			context.fillStyle = "brown";
			context.rect(this.x, this.y, this.width, this.height);
			context.stroke();
			context.fill();
			context.closePath();	
		}
	};

	
}
//LEVEL 10
else if (Level == 10){
	pictures.backgrounds.backgroundColor = "#acf";
	//cave
	Objects.cave.img = pictures.objects.caveexit;
	Objects.cave.x = 0;
	Objects.cave.y = canvas.height * 0.265;
	
	//boat
	if (dir == "left"){
		Objects.boat.img = pictures.objects.boat;
	}
	else
	{
		Objects.boat.img = pictures.objects.boatright;
		Objects.boat.x = canvas.width * 0.49;
	}
	
	holes.push(new holeClass(14.9, 10, "blue"));
	
	
	floor = {
		x: 0,
		y: canvas.height * .8,
		width: canvas.width * 0.5,
		height: canvas.height * 0.2,
		update: function(){
			//ground
			context.beginPath();
			context.fillStyle = "yellow";
			context.rect(this.x, this.y, this.width, this.height);
			context.stroke();
			context.fill();
			context.closePath();
			//water
			context.beginPath();
			context.fillStyle = "blue";
			context.rect(canvas.width * 0.5, this.y, this.width, this.height);
			context.stroke();
			context.fill();
			context.closePath();			
		}
	};	

	
}
//LEVEL 11
else if (Level == 11){
	pictures.backgrounds.backgroundColor = "#acf";

	//boat
	if (dir == "left"){
		Objects.boat.img = pictures.objects.boat;
	}
	else
	{
		Objects.boat.img = pictures.objects.boatright;
		Objects.boat.x = canvas.width * 0.39;
	}

	holes.push(new holeClass(0, 15, "blue"));	
	
	floor = {
		x: 0,
		y: canvas.height * .8,
		width: canvas.width * 0.5,
		height: canvas.height * 0.2,
		update: function(){
			//ground
			context.beginPath();
			context.fillStyle = "yellow";
			context.rect(canvas.width * 0.5, this.y, this.width, this.height);
			context.stroke();
			context.fill();
			context.closePath();
			//water
			context.beginPath();
			context.fillStyle = "blue";
			context.rect(this.x, this.y, this.width, this.height);
			context.stroke();
			context.fill();
			context.closePath();			
		}
	};	


	
}
//LEVEL 12
else if (Level == 12){


	pictures.backgrounds.backgroundColor = "#acf";

	floor = {
		x: 0,
		y: canvas.height * .8,
		width: canvas.width,
		height: canvas.height * 0.2,
		update: function(){
			//ground
			context.beginPath();
			context.fillStyle = "yellow";
			context.rect(this.x, this.y, this.width, this.height);
			context.stroke();
			context.fill();
			context.closePath();		
		}
	};

	
}
//LEVEL 13
else if (Level == 13){

	pictures.backgrounds.backgroundColor = "#acf";

	floor = {
		x: 0,
		y: canvas.height * .8,
		width: canvas.width,
		height: canvas.height * 0.2,
		update: function(){
			//ground
			context.beginPath();
			context.fillStyle = "yellow";
			context.rect(this.x, this.y, this.width, this.height);
			context.stroke();
			context.fill();
			context.closePath();		
		}
	};

	
}
//LEVEL 14
else if (Level == 14){
	
	pictures.backgrounds.backgroundColor = "#acf";

	floor = {
		x: 0,
		y: canvas.height * .8,
		width: canvas.width,
		height: canvas.height * 0.2,
		update: function(){
			//ground
			context.beginPath();
			context.fillStyle = "yellow";
			context.rect(this.x, this.y, this.width, this.height);
			context.stroke();
			context.fill();
			context.closePath();		
		}
	};
	
	
}
//LEVEL 15
else if (Level == 15){
	if (dir == "left"){
		player.y = canvas.height * 0.1;
	}

	pictures.backgrounds.backgroundColor = "#acf";

	floor = {
		x: 0,
		y: canvas.height * .8,
		width: canvas.width,
		height: canvas.height * 0.2,
		update: function(){
			//ground
			context.beginPath();
			context.fillStyle = "yellow";
			context.rect(this.x, this.y, this.width, this.height);
			context.stroke();
			context.fill();
			context.closePath();		
		}
	};


}
//LEVEL 16
else if (Level == 16){

	pictures.backgrounds.backgroundColor = "#acf";

	floor = {
		x: 0,
		y: canvas.height * .6,
		width: canvas.width,
		height: canvas.height * 0.4,
		update: function(){
			//ground
			context.beginPath();
			context.fillStyle = "gray";
			context.rect(this.x, this.y, this.width, this.height);
			context.stroke();
			context.fill();
			context.closePath();		
		}
	};

	holes.push(new holeClass(15, 3));
	
}
//LEVEL 17
else if (Level == 17){

	pictures.backgrounds.backgroundColor = "#acf";
	
	
	holes.push(new holeClass(11, 5));

	floor = {
		x: 0,
		y: canvas.height * .6,
		width: canvas.width,
		height: canvas.height * 0.4,
		update: function(){
			//ground
			context.beginPath();
			context.fillStyle = "gray";
			context.rect(this.x, this.y, this.width, this.height);
			context.stroke();
			context.fill();
			context.closePath();		
		}
	};

	
}
//LEVEL 18
else if (Level == 18){
	
	holes.push(new holeClass(5, 4), new holeClass(13, 5));
	
	pictures.backgrounds.backgroundColor = "#acf";

	floor = {
		x: 0,
		y: canvas.height * .6,
		width: canvas.width,
		height: canvas.height * 0.4,
		update: function(){
			//ground
			context.beginPath();
			context.fillStyle = "gray";
			context.rect(this.x, this.y, this.width, this.height);
			context.stroke();
			context.fill();
			context.closePath();		
		}
	};	
	
	
}
//LEVEL 19
else if (Level == 19){

	pictures.backgrounds.backgroundColor = "#acf";


	
	floor = {
		x: 0,
		y: canvas.height * .6,
		width: canvas.width,
		height: canvas.height * 0.4,
		update: function(){
			//ground
			context.beginPath();
			context.fillStyle = "gray";
			context.rect(this.x, this.y, this.width, this.height);
			context.stroke();
			context.fill();
			context.closePath();		
		}
	};

	
}	
//LEVEL 20
else if (Level == 20){
	
	pictures.backgrounds.backgroundColor = "#acf";
	
	//plane
	if (dir == "left"){
		Objects.plane.img = pictures.objects.planeleft;
	}
	else
	{
		Objects.plane.img = pictures.objects.plane;
		Objects.plane.x = canvas.width * 0.49;
	}


	floor = {
		x: 0,
		y: canvas.height * .6,
		width: canvas.width,
		height: canvas.height * 0.4,
		update: function(){
			//ground
			context.beginPath();
			context.fillStyle = "gray";
			context.rect(this.x, this.y, this.width * 0.5, this.height);
			context.stroke();
			context.fill();
			context.closePath();				
		}
	};	
	
	holes.push(new holeClass(15, 10));
	
	if (dir == "left"){
		Objects.plane.img = pictures.objects.planeleft;
	}
	else
	{
		Objects.plane.img = pictures.objects.plane;
		Objects.plane.x = canvas.width * 0.37;
	}
	Objects.plane.y = canvas.height * 0.5;

	
}
//LEVEL 21
else if (Level == 21){

	pictures.backgrounds.backgroundColor = "#acf";
	
	//plane
	if (dir == "left"){
		Objects.plane.img = pictures.objects.planeleft;
	}
	else
	{
		Objects.plane.img = pictures.objects.plane;
		Objects.plane.x = canvas.width * 0.39;
	}

	floor = {
		x: canvas.width * 0.5,
		y: canvas.height * .7,
		width: canvas.width * 0.5,
		height: canvas.height * 0.3,
		update: function(){
			//ground
			context.beginPath();
			context.fillStyle = "white";
			context.rect(this.x, this.y, this.width, this.height);
			context.stroke();
			context.fill();
			context.closePath();		
		}
	};	
	
	holes.push(new holeClass(0, 15));

	if (dir == "left"){
		Objects.plane.img = pictures.objects.planeleft;
	}
	else
	{
		Objects.plane.img = pictures.objects.plane;
		Objects.plane.x = canvas.width * 0.5;
	}
	Objects.plane.y = canvas.height * 0.6;
	
}
//LEVEL 22
else if (Level == 22){
	
	pictures.backgrounds.backgroundColor = "#acf";

	floor = {
		x: 0,
		y: canvas.height * .7,
		width: canvas.width,
		height: canvas.height * 0.3,
		update: function(){
			//ground
			context.beginPath();
			context.fillStyle = "white";
			context.rect(this.x, this.y, this.width, this.height);
			context.stroke();
			context.fill();
			context.closePath();		
		}
	};	

	holes.push(new holeClass(10, 4));	
	
}
//LEVEL 23
else if (Level == 23){
	
	pictures.backgrounds.backgroundColor = "#acf";

	floor = {
		x: 0,
		y: canvas.height * .7,
		width: canvas.width,
		height: canvas.height * 0.3,
		update: function(){
			//ground
			context.beginPath();
			context.fillStyle = "white";
			context.rect(this.x, this.y, this.width, this.height);
			context.stroke();
			context.fill();
			context.closePath();		
		}
	};		

	holes.push(new holeClass(4, 4), new holeClass(11, 5), new holeClass(18, 3));	
	
}
//LEVEL 24
else if (Level == 24){

	pictures.backgrounds.backgroundColor = "#acf";

	floor = {
		x: 0,
		y: canvas.height * .7,
		width: canvas.width,
		height: canvas.height * 0.3,
		update: function(){
			//ground
			context.beginPath();
			context.fillStyle = "white";
			context.rect(this.x, this.y, this.width, this.height);
			context.stroke();
			context.fill();
			context.closePath();		
		}
	};	

	holes.push(new holeClass(13, 5));
	
}
//LEVEL 25
else if (Level == 25){
	if (dir == "left"){
		player.y = gridWidth;
		player.x = canvas.width * 0.5;
	}

	Objects.rocket.x = canvas.width * 0.83;
	Objects.rocket.y = canvas.height * 0.42
	
	pictures.backgrounds.backgroundColor = "#acf";

	floor = {
		x: 0,
		y: canvas.height * .7,
		width: canvas.width,
		height: canvas.height * 0.3,
		update: function(){
			//ground
			context.beginPath();
			context.fillStyle = "white";
			context.rect(this.x, this.y, this.width, this.height);
			context.stroke();
			context.fill();
			context.closePath();		
		}
	};		
	
	
}
//LEVEL 26
else if (Level == 26){
	if (dir == "right"){
		player.y = gridWidth;
		player.x = canvas.width * 0.5;
	}
	pictures.backgrounds.backgroundColor = "black";
	
	Objects.rocket.x = canvas.width * 0.08;
	Objects.rocket.y = canvas.height * 0.51;	

	floor = {
		x: 0,
		y: canvas.height * .8,
		width: canvas.width,
		height: canvas.height * 0.2,
		update: function(){
			//ground
			context.beginPath();
			context.fillStyle = "lightgray";
			context.rect(this.x, this.y, this.width, this.height);
			context.stroke();
			context.fill();
			context.closePath();		
		}
	};	

	
}
//LEVEL 27
else if (Level == 27){

	pictures.backgrounds.backgroundColor = "black";
	floor = {
		x: 0,
		y: canvas.height * .8,
		width: canvas.width,
		height: canvas.height * 0.2,
		update: function(){
			//ground
			context.beginPath();
			context.fillStyle = "lightgray";
			context.rect(this.x, this.y, this.width, this.height);
			context.stroke();
			context.fill();
			context.closePath();		
		}
	};		
	
	
}
//LEVEL 28
else if (Level == 28){

	pictures.backgrounds.backgroundColor = "black";
	floor = {
		x: 0,
		y: canvas.height * .8,
		width: canvas.width,
		height: canvas.height * 0.2,
		update: function(){
			//ground
			context.beginPath();
			context.fillStyle = "lightgray";
			context.rect(this.x, this.y, this.width, this.height);
			context.stroke();
			context.fill();
			context.closePath();		
		}
	};	
	
}
//LEVEL 29
else if (Level == 29){

	pictures.backgrounds.backgroundColor = "black";
	floor = {
		x: 0,
		y: canvas.height * .8,
		width: canvas.width,
		height: canvas.height * 0.2,
		update: function(){
			//ground
			context.beginPath();
			context.fillStyle = "lightgray";
			context.rect(this.x, this.y, this.width, this.height);
			context.stroke();
			context.fill();
			context.closePath();		
		}
	};	
	
}
//LEVEL 30
else if (Level == 30){

	pictures.backgrounds.backgroundColor = "black";
	floor = {
		x: 0,
		y: canvas.height * .8,
		width: canvas.width,
		height: canvas.height * 0.2,
		update: function(){
			//ground
			context.beginPath();
			context.fillStyle = "lightgray";
			context.rect(this.x, this.y, this.width, this.height);
			context.stroke();
			context.fill();
			context.closePath();		
		}
	};	
	
}
	
};

