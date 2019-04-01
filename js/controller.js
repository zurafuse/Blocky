document.addEventListener("keydown", function(key){
	isMobile = false;
	if (key.keyCode == 39){
		player.controller.right = true;
		player.dir = "right";
		player.controller.left = false;
	}
	else if (key.keyCode == 37){
		player.controller.right = false;
		player.dir = "left";
		player.controller.left = true;
	}
	else if (key.keyCode == 38 && player.fall == false){
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

//Create the UI object.
var BlockUI = {
	x: 0,
	y: 0,
	joyStick: 
	{
		left: {},
		right: {},
		up: {},
		down: {}
	},
	draw: function()
	{
		context.globalAlpha = 0.6;

			context.fillStyle = "purple";
			//draw joy stick for mobile devices
			//left
			context.beginPath();
			context.moveTo(this.joyStick.left.x, this.joyStick.left.y);
			context.lineTo(this.joyStick.left.x + this.joyStick.left.width, this.joyStick.left.y - (this.joyStick.left.height * 0.5));
			context.lineTo(this.joyStick.left.x + this.joyStick.left.width, this.joyStick.left.y + (this.joyStick.left.height * 0.5));
			context.fill();
			//right
			context.beginPath();
			context.moveTo(this.joyStick.right.x, this.joyStick.right.y);
			context.lineTo(this.joyStick.right.x, this.joyStick.right.y - (this.joyStick.right.height * 0.5));
			context.lineTo(this.joyStick.right.x + this.joyStick.right.width, this.joyStick.right.y);
			context.lineTo(this.joyStick.right.x, this.joyStick.right.y + (this.joyStick.right.height * 0.5));		
			context.fill();
			//up
			context.beginPath();
			context.moveTo(this.joyStick.up.x, this.joyStick.up.y);
			context.lineTo(this.joyStick.up.x + (this.joyStick.up.width * 0.5), this.joyStick.up.y + this.joyStick.up.height);
			context.lineTo(this.joyStick.up.x - (this.joyStick.up.width * 0.5), this.joyStick.up.y + this.joyStick.up.height);
			context.fill();
		
		context.globalAlpha = 1;
	}
};
BlockUI.joyStick.left.x = gridWidth * 2;
BlockUI.joyStick.left.y = gridWidth * 13;
BlockUI.joyStick.left.width = gridWidth * 2;
BlockUI.joyStick.left.height = gridWidth * 2;

BlockUI.joyStick.right.x = gridWidth * 7;
BlockUI.joyStick.right.y = gridWidth * 13;
BlockUI.joyStick.right.width = gridWidth * 2;
BlockUI.joyStick.right.height = gridWidth * 2;

BlockUI.joyStick.up.x = gridWidth * 26;
BlockUI.joyStick.up.y = gridWidth * 12;
BlockUI.joyStick.up.width = gridWidth * 2;
BlockUI.joyStick.up.height = gridWidth * 2;

// touch event handlers
// Set up touch events for mobile, etc
// touch event handlers
// Set up touch events for mobile, etc

	window.addEventListener("touchstart", function (e) {
		isMobile = true;
		getTouchPos(canvas, e);
	}, false);
	
	window.addEventListener("touchend", function (e) {
	endTouchPos(canvas, e);
	}, false);
	
	window.addEventListener("touchmove", function (e) {
	moveTouchPos(canvas, e);
	}, false);


// Get the position of a touch relative to the canvas
function getTouchPos(canvasDom, touchEvent) {
	if (isMobile == true)
	{
		for (i in touchEvent.touches)
		{	
			var thisXPos = touchEvent.touches[i].clientX;
			var thisYPos = touchEvent.touches[i].clientY;
		
				//Listen for the user touching the arrow keys 
			if (thisXPos < BlockUI.joyStick.left.x + (BlockUI.joyStick.left.width * 1.3) && thisXPos > BlockUI.joyStick.left.x * 0.7 &&
				thisYPos > BlockUI.joyStick.left.y - (BlockUI.joyStick.left.height * 0.7) && thisYPos < BlockUI.joyStick.left.y + (BlockUI.joyStick.left.height * 0.7))
			{
				player.controller.right = false;
				player.controller.left = true;
				player.dir = "left";
			}
			
			if (thisXPos < BlockUI.joyStick.right.x + (BlockUI.joyStick.right.width * 1.3) && thisXPos > BlockUI.joyStick.right.x * 0.7 &&
				thisYPos > BlockUI.joyStick.right.y - (BlockUI.joyStick.right.height * 0.7) && thisYPos < BlockUI.joyStick.right.y + (BlockUI.joyStick.right.height * 0.7))
			{
				player.controller.right = true;
				player.controller.left = false;
				player.dir = "right";
				
			}
			
			if (thisXPos < BlockUI.joyStick.up.x + (BlockUI.joyStick.up.width * 0.8) && thisXPos > BlockUI.joyStick.up.x - (BlockUI.joyStick.up.width * 0.8) &&
				thisYPos > BlockUI.joyStick.up.y * 0.8 && thisYPos < BlockUI.joyStick.up.y + (BlockUI.joyStick.up.height * 1.2))
			{
				if (player.jump == false){
					player.jump = true;
					player.force = gridWidth * 0.8;
					player.jumpTrigger = true;
					setTimeout(function(){player.jumpTrigger = false;}, 200);
				}
				
			}
			
			
		}
	}
}
	
function endTouchPos(canvasDom, touchEvent) {
	if (isMobile == true)
	{	
		for (i in touchEvent.changedTouches)
		{	
			var thisXPos = touchEvent.changedTouches[i].clientX;
			var thisYPos = touchEvent.changedTouches[i].clientY;
		
			if (thisXPos < BlockUI.joyStick.left.x + (BlockUI.joyStick.left.width * 1.3) && thisXPos > BlockUI.joyStick.left.x * 0.7 &&
				thisYPos > BlockUI.joyStick.left.y - (BlockUI.joyStick.left.height * 0.7) && thisYPos < BlockUI.joyStick.left.y + (BlockUI.joyStick.left.height * 0.7))
			{
				player.controller.left = false;
			}
			
			if (thisXPos < BlockUI.joyStick.right.x + (BlockUI.joyStick.right.width * 1.3) && thisXPos > BlockUI.joyStick.right.x * 0.7 &&
				thisYPos > BlockUI.joyStick.right.y - (BlockUI.joyStick.right.height * 0.7) && thisYPos < BlockUI.joyStick.right.y + (BlockUI.joyStick.right.height * 0.7))
			{
				player.controller.right = false;
			}
			
			if (thisXPos < BlockUI.joyStick.up.x + (BlockUI.joyStick.up.width * 0.8) && thisXPos > BlockUI.joyStick.up.x - (BlockUI.joyStick.up.width * 0.8) &&
				thisYPos > BlockUI.joyStick.up.y * 0.8 && thisYPos < BlockUI.joyStick.up.y + (BlockUI.joyStick.up.height * 1.2))
			{
				if (player.jump == false){
					player.jump = true;
					player.force = gridWidth * 0.8;
					player.jumpTrigger = true;
					setTimeout(function(){player.jumpTrigger = false;}, 200);
				}
			}
			
		}
	}
}

function moveTouchPos(canvasDom, touchEvent) {
	if (isMobile == true)
	{	
		for (i in touchEvent.changedTouches)
		{	
			var thisXPos = touchEvent.changedTouches[i].clientX;
			var thisYPos = touchEvent.changedTouches[i].clientY;
		
			if (thisXPos < BlockUI.joyStick.left.x + (BlockUI.joyStick.left.width * 1.3) && thisXPos > BlockUI.joyStick.left.x * 0.7 &&
				thisYPos > BlockUI.joyStick.left.y - (BlockUI.joyStick.left.height * 0.7) && thisYPos < BlockUI.joyStick.left.y + (BlockUI.joyStick.left.height * 0.7))
			{
				player.controller.left = false;
			}
			
			if (thisXPos < BlockUI.joyStick.right.x + (BlockUI.joyStick.right.width * 1.3) && thisXPos > BlockUI.joyStick.right.x * 0.7 &&
				thisYPos > BlockUI.joyStick.right.y - (BlockUI.joyStick.right.height * 0.7) && thisYPos < BlockUI.joyStick.right.y + (BlockUI.joyStick.right.height * 0.7))
			{
				player.controller.right = false;
			}
			
			if (thisXPos < BlockUI.joyStick.up.x + (BlockUI.joyStick.up.width * 0.8) && thisXPos > BlockUI.joyStick.up.x - (BlockUI.joyStick.up.width * 0.8) &&
				thisYPos > BlockUI.joyStick.up.y * 0.8 && thisYPos < BlockUI.joyStick.up.y + (BlockUI.joyStick.up.height * 1.2))
			{
				if (player.jump == false){
					player.jump = true;
					player.force = gridWidth * 0.8;
					player.jumpTrigger = true;
					setTimeout(function(){player.jumpTrigger = false;}, 200);
				}
			}
			
			
		}
	}
}
