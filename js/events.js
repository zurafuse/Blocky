var Events = {
	die: false,
	win: false,
	boatevent: false,
	planeevent: false,
	rocketevent: false,
	gameover: () => {
		
	},
	winner: () => {
		//display Winner text
		context.font = "bold " + gridWidth + "pt sans-serif";
		context.strokeStyle = "black";
		context.fillStyle = "white";
		context.fillText("CONGRATULATIONS! YOU WON!!", canvas.width * 0.25, canvas.height * 0.3);		
	},
	boat: () => {
		
	},
	plane: () => {
		
	},
	rocket: () => {
		
	}
};