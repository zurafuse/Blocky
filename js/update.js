var Update = function(){
	if (window.innerWidth < window.innerHeight)
	{
		Events.rotateScreen();
	}
	else
	{	if (screenTurned == true)
		{
			screenTurned = false;
			location.reload();
		}
		canvas.width = originalWidth;
		canvas.height = originalHeight;	
		context.clearRect(0, 0, canvas.width, canvas.height);
		pictures.drawBackgrounds(backgrounds);
		pictures.drawGems(gems);
		floor.update();
		holeUpdates();
		//other updates here
		if (Events.win == true)
		{
			Events.winner();		
		}
		if (Events.die == true)
		{
			Events.gameover();		
		}
		if (Events.boatevent == true)
		{
			Events.boat();
		}
		if (Events.planeevent == true)
		{
			Events.plane();
		}
		if (Events.rocketevent == true)
		{
			Events.rocket();
		}
		if (isMobile == true)
		{
			BlockUI.draw();
		}
		//Level updates here
		if (Level == 1)
		{
			Objects.sign.update();
		}
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
		if (Level == 15)
		{
			Objects.mountain.update();
		}
		if (Level == 25 || Level == 26)
		{
			Objects.rocket.update();
		}
		if (player.flag == false && Level == 30)
		{
			Objects.flag.update();
		}
		if (player.flag == true)
		{
			Objects.flagicon.update();
		}
		player.update();
	}
	Animation(Update);	
};