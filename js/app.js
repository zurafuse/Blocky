var Animation = window.requestAnimationFrame;
var canvas = document.getElementById("canvas");
canvas.width = window.innerWidth *.9;
canvas.height = canvas.width * .5;
var context = canvas.getContext("2d");
var gridWidth = canvas.width / 30;
var Level = 1;

var pictures = {
	backgrounds: {
		backgroundColor: "#acf",
		cloud1: new Image(),
		cloud2: new Image(),
		hill1: new Image(),
		hill2: new Image(),
		hill3: new Image(),
		cactus: new Image(),
		mushroom: new Image(),
		palm: new Image(),
		tree: new Image()
	},
	setPics: function(){
		this.backgrounds.cloud1.src = "images/cloud1.png";
		this.backgrounds.cloud2.src = "images/cloud2.png";
		this.backgrounds.hill1.src = "images/hill1.png";
		this.backgrounds.hill2.src = "images/hill2.png";
		this.backgrounds.hill3.src = "images/hill3.png";
		this.backgrounds.cactus.src = "images/cactus.png";
		this.backgrounds.mushroom.src = "images/mushroom1.png";
		this.backgrounds.palm.src = "images/palm.png";
		this.backgrounds.tree.src = "images/tree.png";
	},
	drawBackgrounds: function(pics){
		//draw sky
		context.beginPath();
		context.fillStyle = this.backgrounds.backgroundColor;
		context.rect(0, 0, canvas.width, canvas.height);
		context.fill();
		context.closePath();
		//draw backgrounds
		pics.forEach(function(pic){
			pic.draw();
		});
	}
};
pictures.setPics();

const gravity = gridWidth * 0.3;

var background = function(img, x, y, width, height){
	this.img = img;
	this.x = x * gridWidth;
	this.y = y * gridWidth;
	this.width = width * gridWidth;
	this.height = height * gridWidth;
};
background.prototype.draw = function(){
	context.drawImage(this.img, this.x, this.y, this.width, this.height);
};

var backgrounds = [];

backgrounds.push(new background(pictures.backgrounds.hill1, 9, 8, 2, 4), new background(pictures.backgrounds.hill1, 17, 6, 3, 6));
backgrounds.push(new background(pictures.backgrounds.cloud1, 6, 3, 2, 1), new background(pictures.backgrounds.palm, 6, 8, 2, 4),
				new background(pictures.backgrounds.mushroom, 12, 11, 1, 1), new background (pictures.backgrounds.cloud1, 17, 6, 2, 1),
				new background(pictures.backgrounds.tree, 23, 8, 3, 4));


var floor = {
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

var player = {
	x: 90,
	y: 20,
	force: 0,
	width: gridWidth,
	height: gridWidth,
	jump: true,
	jumpTrigger: false,
	controller: {
		right: false,
		left: false
	},
	speed: canvas.width * .005,
	move: function(){
		//control movements
		if (this.controller.right == true){
			if (this.x + this.width * 0.3 < canvas.width){
				this.x+=this.speed;
			}
			else{
				if (Level != 30){
					newLevel("right");
				}
			}
		}
		else if (this.controller.left == true){
			if (this.x + (this.width * 0.7) > 0){
				this.x-=this.speed; 
			}
			else{
				if (Level != 1){
					newLevel("left");
				}
			}
		}
	},
	update: function(){
		//decrease force gradually if you are jumping or start falling
		//if force increments below 0, correct it to 0 so you stop falling.
		if (this.force > 0){
			this.force-= gridWidth * 0.02;
		}
		else{
			this.force = 0;
		}
		
		this.move();
		//gravity
		if (this.y + this.height < floor.y){
			this.y+=(gravity - this.force);
		}
		else{
			if (this.jumpTrigger == false){
				this.jump = false;
				this.y = floor.y - this.height;
			}
			else{
				this.y+=(gravity - this.force);
			}
		}
		
		context.beginPath();
		context.fillStyle = "red";
		context.rect(this.x, this.y, this.width, this.height);
		context.stroke();
		context.fill();
		context.closePath();
		
		//display Level text at top
		context.font = "bold " + gridWidth + "pt Ariel";
		context.strokeStyle = "black";
		context.fillStyle = "white";
		context.fillText("LEVEL: " + Level, canvas.width * 0.33, canvas.height * 0.1);
		context.strokeText("LEVEL: " + Level, canvas.width * 0.33, canvas.height * 0.1);
	}
};

document.addEventListener("keydown", function(key){
	if (key.keyCode == 39){
		player.controller.right = true;
		player.controller.left = false;
	}
	else if (key.keyCode == 37){
		player.controller.right = false;
		player.controller.left = true;
	}
	else if (key.keyCode == 38){
		if (player.jump == false){
			player.jump = true;
			player.force = gridWidth * 0.8;
			player.jumpTrigger = true;
			setTimeout(function(){player.jumpTrigger = false;}, 200);
		}
	}
});
document.addEventListener("keyup", function(key){
	if (key.keyCode == 39){
		player.controller.right = false;		
	}
	else if (key.keyCode == 37){
		player.controller.left = false;		
	}	
});

var Update = function(){
	context.clearRect(0, 0, canvas.width, canvas.height);
	pictures.drawBackgrounds(backgrounds);
	player.update();
	floor.update();
	Animation(Update);
};

Update();
