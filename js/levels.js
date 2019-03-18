var newLevel = (dir) => {
	if (dir == "left"){
		Level--;
		player.x = canvas.width - player.width;
	}
	else if (dir == "right"){
		Level++;
		player.x = 0;
	}
	
	backgrounds = [];
//LEVEL 1
if (Level == 1){
	pictures.backgrounds.backgroundColor = "#acf";
	
	backgrounds.push(new background(pictures.backgrounds.hill1, 9, 8, 2, 4), new background(pictures.backgrounds.hill1, 17, 6, 3, 6));
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


	
}
//LEVEL 17
else if (Level == 17){

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
//LEVEL 18
else if (Level == 18){
	
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
	
	if (dir == "left"){
		Objects.plane.img = pictures.objects.planeleft;
	}
	else
	{
		Objects.plane.img = pictures.objects.plane;
	}
	Objects.plane.x = canvas.width * 0.37;
	Objects.plane.y = canvas.height * 0.5;
	
}
//LEVEL 21
else if (Level == 21){

	pictures.backgrounds.backgroundColor = "#acf";

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

	if (dir == "left"){
		Objects.plane.img = pictures.objects.planeleft;
	}
	else
	{
		Objects.plane.img = pictures.objects.plane;
	}
	Objects.plane.x = canvas.width * 0.5;
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

	
}
//LEVEL 25
else if (Level == 25){
	if (dir == "left"){
		player.y = gridWidth;
		player.x = canvas.width * 0.6;
	}	
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
		player.x = canvas.width * 0.1;
	}
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
//LEVEL 27
else if (Level == 27){
	
}
//LEVEL 28
else if (Level == 28){
	
}
//LEVEL 29
else if (Level == 29){
	
}
//LEVEL 30
else if (Level == 30){
	
}
	
};

