var Animation = window.requestAnimationFrame;
var canvas = document.getElementById("canvas");
canvas.width = window.innerWidth * 0.9;
canvas.height = canvas.width * 0.5;
var originalWidth = window.innerWidth * 0.9;
var originalHeight = canvas.width * 0.5;
var screenTurned = false;
var gridWidth = canvas.width / 30;
var isMobile = true;
if (window.innerWidth < window.innerHeight)
{	
	screenTurned = true;
}
var context = canvas.getContext("2d");
var Level = 1;
var Score = 0;

var pictures = {
	rotate: new Image(),
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
		tree: new Image(),
		house: new Image()
	},
	objects: {
		plane: new Image(),
		planeleft: new Image(),
		caveentrance: new Image(),
		caveexit: new Image(),
		boat: new Image(),
		boatright: new Image(),
		mountainside: new Image(),
		rocket: new Image(),
		flag: new Image(),
		flagicon: new Image(),
		gems: new Image(),
		sign: new Image()
	},
	setPics: function(){
		this.rotate.src = "images/rotate.png";
		this.backgrounds.cloud1.src = "images/cloud1.png";
		this.backgrounds.cloud2.src = "images/cloud2.png";
		this.backgrounds.hill1.src = "images/hill1.png";
		this.backgrounds.hill2.src = "images/hill2.png";
		this.backgrounds.hill3.src = "images/hill3.png";
		this.backgrounds.cactus.src = "images/cactus.png";
		this.backgrounds.mushroom.src = "images/mushroom1.png";
		this.backgrounds.palm.src = "images/palm.png";
		this.backgrounds.tree.src = "images/tree.png";
		this.backgrounds.house.src = "images/house.png";
		this.objects.plane.src = "images/plane.png";
		this.objects.planeleft.src = "images/planeleft.png";
		this.objects.caveentrance.src = "images/caveentrance.png";
		this.objects.caveexit.src = "images/caveexit.png";
		this.objects.boat.src = "images/boat.png";
		this.objects.boatright.src = "images/boatright.png";
		this.objects.mountainside.src = "images/mountainside.png";
		this.objects.rocket.src = "images/rocket.png";
		this.objects.flag.src = "images/flag.png";
		this.objects.flagicon.src = "images/flagicon.png";
		this.objects.gems.src = "images/gems.png";
		this.objects.sign.src = "images/sign.png";
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
	}, 
	drawGems: function(pics){
		//draw gems
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
		locked: false,
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
		locked: false,
		draw: () => {
			context.drawImage(Objects.boat.img, Objects.boat.x, Objects.boat.y, Objects.boat.width, Objects.boat.height);			
		},
		update: () => {
			
			Objects.boat.draw();
		}
	},
	mountain: {
		img: pictures.objects.mountainside,
		x: canvas.width * 0.5,
		y: 0,
		width: canvas.width * 0.5,
		height: canvas.height * 0.8,
		draw: () => {
			context.drawImage(Objects.mountain.img, Objects.mountain.x, Objects.mountain.y, Objects.mountain.width, Objects.mountain.height);			
		},
		update: () => {
			
			Objects.mountain.draw();
		}
	},
	rocket: {
		img: pictures.objects.rocket,
		x: canvas.width * 0.83,
		y: canvas.height * 0.42,
		width: gridWidth * 3,
		height: gridWidth * 4.5,
		locked: false,
		draw: () => {
			context.drawImage(Objects.rocket.img, Objects.rocket.x, Objects.rocket.y, Objects.rocket.width, Objects.rocket.height);			
		},
		update: () => {
			
			Objects.rocket.draw();
		}
	},
	flag: {
		img: pictures.objects.flag,
		x: canvas.width * 0.5,
		y: canvas.height * 0.51,
		width: gridWidth * 3,
		height: gridWidth * 4.5,
		draw: () => {
			context.drawImage(Objects.flag.img, Objects.flag.x, Objects.flag.y, Objects.flag.width, Objects.flag.height);			
		},
		update: () => {
			if (player.collision(Objects.flag))
			{
				score+=50;
				player.flag = true;
			}
			Objects.flag.draw();
		}
	},
	flagicon: {
		img: pictures.objects.flagicon,
		x: canvas.width * 0.88,
		y: canvas.height * 0.02,
		width: gridWidth * 2,
		height: gridWidth * 2,
		draw: () => {
			context.drawImage(Objects.flagicon.img, Objects.flagicon.x, Objects.flagicon.y, Objects.flagicon.width, Objects.flagicon.height);			
		},
		update: () => {
			
			Objects.flagicon.draw();
		}
	},
	house: {
		x: gridWidth * 1,
		y: gridWidth * 7,
		width: gridWidth * 8,
		height: gridWidth * 5
	},
	sign: {
		img:pictures.objects.sign,
		x: gridWidth * 1.67,
		y: gridWidth * 2,
		width: gridWidth * 7,
		height: gridWidth * 5,
		draw: () => {
			context.drawImage(Objects.sign.img, Objects.sign.x, Objects.sign.y, Objects.sign.width, Objects.sign.height);			
		},
		update: () => {
			Objects.sign.draw();
		}
	}
};

var holeClass = function(x, width, color){
	//by default, a hole is the same color as the background.
	if (color == "undefined" || color == null)
	{
		this.color = pictures.backgrounds.backgroundColor;
	}
	else
	{
		this.color = color;
	}
	this.x = x * gridWidth;
	this.y = floor.y - (canvas.height * 0.004);
	this.width = width * gridWidth;
	this.height = floor.height + (canvas.height * 0.01);
	this.draw = () => {
			context.beginPath();
			context.fillStyle = this.color;
			context.rect(this.x, this.y, this.width, this.height);
			context.fill();
			context.closePath();		
	};
	this.update = () => {
		this.draw();
		if (player.x >= this.x && player.x + player.width < this.x + this.width && player.y + player.height > this.y)
		{
			if (player.locked == false)
			{
				player.fall = true;
			}
		}
	};
};

var holes = [];

var holeUpdates = () => {
	for (var i = 0; i < holes.length; i++){
		holes[i].update();
	}
};


//background class
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

backgrounds.push(new background(pictures.backgrounds.house, 1, 7, 8, 5), new background(pictures.backgrounds.hill1, 9, 8, 2, 4), new background(pictures.backgrounds.hill1, 17, 6, 3, 6));
backgrounds.push(new background(pictures.backgrounds.cloud1, 6, 3, 2, 1), new background(pictures.backgrounds.palm, 6, 8, 2, 4),
				new background(pictures.backgrounds.mushroom, 12, 11, 1, 1), new background (pictures.backgrounds.cloud1, 17, 6, 2, 1),
				new background(pictures.backgrounds.tree, 23, 8, 3, 4));

				
//gem class
var gemClass = function(color, x, y, width, height){
	this.img = pictures.objects.gems;
	this.swidth = 144;
	this.sheight = 144;
	this.x = x * gridWidth;
	this.y = y * gridWidth;
	this.width = width * gridWidth;
	this.height = height * gridWidth;
	switch (color){
		case "yellow":
			this.sx = 0;
			this.sy = 0;
			break;
		case "red":
			this.sx = 145;
			this.sy = 0;
			break;
		case "green":
			this.sx = 289;
			this.sy = 0;
			break;
		case "blue":
			this.sx = 433;
			this.sy = 0;
			break;
		case "hazel":
			this.sx = 577;
			this.sy = 0;
			break;
		case "purple":
			this.sx = 0;
			this.sy = 145;
			break;
		case "pink":
			this.sx = 145;
			this.sy = 145;
			break;
		case "white":
			this.sx = 289;
			this.sy = 145;
			break;
		case "orange":
			this.sx = 433;
			this.sy = 145;
			break;
		case "rainbow":
			this.sx = 577;
			this.sy = 145;
			break;			
	}
};
gemClass.prototype.draw = function(){
	context.drawImage(this.img, this.sx, this.sy, this.swidth, this.sheight, this.x, this.y, this.width, this.height);
};

gems = [];
		

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
	fall: false,
	flag: false,
	locked: false,
	dir: "right",
	controller: {
		right: false,
		left: false
	},
	speed: canvas.width * .005,
	collision: (obj) => {
		if (player.x + player.width > obj.x && player.x < obj.x + obj.width && player.y + player.height > obj.y && 
			player.y < obj.y + obj.height)
		{
			return true;
		}
		else
		{
			return false;
		}
	},
	move: function(){
		if (this.locked == false){
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
		}
	},
	die: function() {
		player.locked = true;
		Events.die = true;
		player.flag = false;
		setTimeout(() => {restart();}, 2000);		
	},
	draw: function() {
			//draw player
			context.beginPath();
			context.fillStyle = "lightgray";
			context.rect(this.x, this.y, this.width, this.height);
			context.stroke();
			context.fill();
			context.closePath();
			if (player.dir == "right")
			{
				//draw eye
				context.beginPath();
				context.arc(this.x + (this.width * 0.74), this.y + (this.height * 0.25), (this.width * 0.18), 0, 2 * Math.PI);
				context.fillStyle = "white";
				context.fill();
				context.stroke();
				//draw pupil
				context.beginPath();
				context.arc(this.x + (this.width * 0.81), this.y + (this.height * 0.25), (this.width * 0.1), 0, 2 * Math.PI);
				context.fillStyle = "black";
				context.fill();
				//draw smile
				context.beginPath();
				context.arc(this.x + (this.width * 0.82), this.y + (this.height * 0.55), (this.width * 0.2), 0.5, Math.PI);
				context.stroke();				
			}
			else
			{
				//draw eye
				context.beginPath();
				context.arc(this.x + (this.width * 0.27), this.y + (this.height * 0.25), (this.width * 0.18), 0, 2 * Math.PI);
				context.fillStyle = "white";
				context.fill();
				context.stroke();
				//draw pupil
				context.beginPath();
				context.arc(this.x + (this.width * 0.2), this.y + (this.height * 0.25), (this.width * 0.1), 0, 2 * Math.PI);
				context.fillStyle = "black";
				context.fill();
				//draw smile
				context.beginPath();
				context.arc(this.x + (this.width * 0.18), this.y + (this.height * 0.55), (this.width * 0.2), 0, Math.PI * 0.8);
				context.stroke();				
			}
	},
	update: function(){
		//win
		if (player.flag == true && player.collision(Objects.house) == true && Level == 1)
		{
			player.locked = true;
			Events.win = true;
			player.flag = false;
			setTimeout(() => {restart();}, 2000);
		}
		//boat
		if ((Level == 10 || Level == 11 ) && player.collision(Objects.boat) && Objects.boat.locked == false)
		{
			player.locked = true;
			Events.boatevent = true;
		}
		//plane
		if ((Level == 20 || Level == 21 ) && player.collision(Objects.plane) && Objects.plane.locked == false)
		{
			player.locked = true;
			Events.planeevent = true;
		}
		//rocket
		if ((Level == 25 || Level == 26 ) && player.collision(Objects.rocket))
		{
			player.locked = true;
			Events.rocketevent = true;
		}
		//gem collection
		for (var i = 0; i < gems.length; i++)
		{
			if (player.collision(gems[i]))
			{
				Score+=10;
				gems.splice(i, 1);
			}
		}			
		//decrease force gradually if you are jumping or start falling
		//if force increments below 0, correct it to 0 so you stop falling.
		if (this.force > 0){
			this.force-= gridWidth * 0.02;
		}
		else{
			this.force = 0;
		}
		
		if (this.locked == false){
			this.move();
			//gravity
			if (this.y + this.height < floor.y){
				this.y+=(gravity - this.force);
			}
			else{
				if (this.jumpTrigger == false && this.fall == false){
					this.jump = false;
					this.y = floor.y - this.height;
				}
				else{
					if (this.fall == false)
					{
						this.y+=(gravity - this.force);
					}
				}
			}
			//fall down hole
			if (this.fall == true)
			{
				this.y+=(gravity - this.force);
			}
			if (this.y > canvas.height){
				player.die();
			}
		}
		//draw player
		if (this.locked != true)
		{
			this.draw();
		}		
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


var restart = () => {
	Events.win = false;
	Events.die = false;
	player.locked = false;
	player.fall = false;
	player.flag = false;
	score = 0;
	backgrounds = [];
	Level = 0;
	newLevel("right");
	player.x = 90;
	player.y = 20;		
};
