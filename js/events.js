var Events = {
	die: false,
	win: false,
	boatevent: false,
	planeevent: false,
	rocketevent: false,
	gameover: () => {
		//display Game Over text
		context.font = "bold " + gridWidth + "pt sans-serif";
		context.strokeStyle = "black";
		context.fillStyle = "white";
		context.fillText("GAME OVER!", canvas.width * 0.35, canvas.height * 0.3);			
	},
	winner: () => {
		//display Winner text
		context.font = "bold " + gridWidth + "pt sans-serif";
		context.strokeStyle = "black";
		context.fillStyle = "white";
		context.fillText("CONGRATULATIONS! YOU WON!!", canvas.width * 0.15, canvas.height * 0.3);		
	},
	boat: () => {
		if (Objects.boat.img == pictures.objects.boatright)
		{
			Objects.boat.x += player.speed;
			if (Level == 10)
			{
				if (Objects.boat.x > canvas.width)
				{
					newLevel("right");
					Objects.boat.x = 0 - Objects.boat.width;
				}
			}
			else
			{
				if (Objects.boat.x > canvas.width * 0.42)
				{
					Events.boatevent = false;
					player.x = canvas.width * 0.55;
					player.locked = false;
					Objects.boat.locked = true;
				}			
			}
		}
		else
		{
			Objects.boat.x -= player.speed;
			if (Level == 11)
			{
				if (Objects.boat.x + Objects.boat.width < 0)
				{
					newLevel("left");
					Objects.boat.x = canvas.width;
				}
			}
			else
			{
				if (Objects.boat.x < canvas.width * 0.42)
				{
					Events.boatevent = false;
					player.x = canvas.width * 0.45;
					player.locked = false;
					Objects.boat.locked = true;
				}			
			}
		}
		
		
	},
	plane: () => {
		if (Objects.plane.img == pictures.objects.plane)
		{
			Objects.plane.x += player.speed;
			if (Level == 20)
			{
				if (Objects.plane.x > canvas.width)
				{
					newLevel("right");
					Objects.plane.x = 0 - Objects.plane.width;
				}
			}
			else
			{
				if (Objects.plane.x > canvas.width * 0.48)
				{
					Events.planeevent = false;
					player.x = canvas.width * 0.55;
					player.locked = false;
					Objects.plane.locked = true;
				}			
			}
		}
		else
		{
			Objects.plane.x -= player.speed;
			if (Level == 21)
			{
				if (Objects.plane.x + Objects.plane.width < 0)
				{
					newLevel("left");
					Objects.plane.x = canvas.width;
				}
			}
			else
			{
				if (Objects.plane.x < canvas.width * 0.4)
				{
					Events.planeevent = false;
					player.x = canvas.width * 0.45;
					player.locked = false;
					Objects.plane.locked = true;
				}			
			}
		}
				
	},
	rocket: () => {
		
		Objects.rocket.y-=player.speed;
		if (Objects.rocket.y + Objects.rocket.height < 0)
		{
			Events.rocketevent = false;
			player.locked = false;
			if (Level == 26)
			{
				newLevel("left");
			}
			else
			{
				newLevel("right");
			}
		}			
		
	}
};