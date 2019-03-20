var Animation = window.requestAnimationFrame;
var canvas = document.getElementById("canvas");
canvas.width = window.innerWidth *.9;
canvas.height = canvas.width * .5;
var context = canvas.getContext("2d");
var gridWidth = canvas.width / 30;
var Level = 1;
var Score = 0;

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
	objects: {
		plane: new Image(),
		planeleft: new Image(),
		caveentrance: new Image(),
		caveexit: new Image(),
		boat: new Image(),
		boatright: new Image()
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
		this.objects.plane.src = "images/plane.png";
		this.objects.planeleft.src = "images/planeleft.png";
		this.objects.caveentrance.src = "images/caveentrance.png";
		this.objects.caveexit.src = "images/caveexit.png";
		this.objects.boat.src = "images/boat.png";
		this.objects.boatright.src = "images/boatright.png";
	},
	drawBackgrounds: function(pics){
		//draw sky
		context.beginPath();
		if (this.backgrounds.backgroundColor == "caveentrance"){
			var grd = context.createLinearGradient(0, 0, canvas.width * 0.23, 0);
			grd.addColorStop(0, "white");
			grd.addColorStop(1, "black");
			context.fillStyle = grd;
			context.fillRect(0, 0, canvas.width, canvas.height);			
		}
		else if (this.backgrounds.backgroundColor == "caveexit") {
			var grd = context.createLinearGradient(0, 0, canvas.width * 0.8, 0);
			grd.addColorStop(0, "black");
			grd.addColorStop(1, "white");		
			context.fillStyle = grd;
			context.fillRect(0, 0, canvas.width, canvas.height);			
		}
		else{
			context.fillStyle = this.backgrounds.backgroundColor;
			context.rect(0, 0, canvas.width, canvas.height);
			context.fill();
		}
		context.closePath();
		//draw backgrounds
		pics.forEach(function(pic){
			pic.draw();
		});
	}
};
pictures.setPics();

const gravity = gridWidth * 0.3;


var Objects = {
	plane: {
		img: pictures.objects.plane,
		x: canvas.width * 0.5,
		y: canvas.height * 0.6,
		width: gridWidth * 4,
		height: gridWidth * 1.5,
		draw: () => {
			context.drawImage(Objects.plane.img, Objects.plane.x, Objects.plane.y, Objects.plane.width, Objects.plane.height);			
		},
		update: () => {
			
			Objects.plane.draw();
		}
	},
	cave: {
		img: pictures.objects.caveentrance,
		x: canvas.width * 0.667,
		y: canvas.height * 0.27,
		width: gridWidth * 10,
		height: gridWidth * 8,
		draw: () => {
			context.drawImage(Objects.cave.img, Objects.cave.x, Objects.cave.y, Objects.cave.width, Objects.cave.height);			
		},
		update: () => {
			Objects.cave.draw();
		}
	},
	boat: {
		img: pictures.objects.boatright,
		x: canvas.width * 0.5,
		y: canvas.height * 0.63,
		width: gridWidth * 3.5,
		height: gridWidth * 2.5,
		draw: () => {
			context.drawImage(Objects.boat.img, Objects.boat.x, Objects.boat.y, Objects.boat.width, Objects.boat.height);			
		},
		update: () => {
			
			Objects.boat.draw();
		}
	}	
};


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
		context.font = "bold " + gridWidth + "pt sans-serif";
		context.strokeStyle = "black";
		context.fillStyle = "white";
		context.fillText("LEVEL: " + Level, canvas.width * 0.25, canvas.height * 0.1);
		context.strokeText("LEVEL: " + Level, canvas.width * 0.25, canvas.height * 0.1);
		context.fillText("SCORE: " + Score, canvas.width * 0.5, canvas.height * 0.1);
		context.strokeText("SCORE: " + Score, canvas.width * 0.5, canvas.height * 0.1);		
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
	floor.update();
	//other updates here
	if (Level == 20 || Level == 21)
	{
		Objects.plane.update();
	}
	if (Level == 10 || Level == 11)
	{
		Objects.boat.update();
	}
	if (Level == 5 || Level == 10)
	{
		Objects.cave.update();
	}	
	player.update();
	Animation(Update);
};

Update();
