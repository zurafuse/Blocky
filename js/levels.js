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

if (Level == 1){
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

else if (Level == 2){
	
}

else if (Level == 3){
	
}

else if (Level == 4){
	
}

else if (Level == 5){
	
}

else if (Level == 6){
	
}

else if (Level == 7){
	
}

else if (Level == 8){
	
}

else if (Level == 9){
	
}

else if (Level == 10){
	
}

else if (Level == 11){
	
}

else if (Level == 12){
	
}

else if (Level == 13){
	
}

else if (Level == 14){
	
}

else if (Level == 15){
	
}

else if (Level == 16){
	
}

else if (Level == 17){
	
}

else if (Level == 18){
	
}

else if (Level == 19){
	
}	

else if (Level == 20){
	
}

else if (Level == 21){
	
}

else if (Level == 22){
	
}

else if (Level == 23){
	
}

else if (Level == 24){
	
}

else if (Level == 25){
	
}

else if (Level == 26){
	
}

else if (Level == 27){
	
}

else if (Level == 28){
	
}

else if (Level == 29){
	
}

else if (Level == 30){
	
}
	
};

