var canvas = document.getElementById('canvas_game');

var context;

canvas.addEventListener('hover', function() {
	// Specify 2d canvas type.
	context = this.getContext('2d');

	// Paint it black.
	context.fillStyle = 'black';
	context.rect(0, 0, 300, 300);
	context.fill();

	// Paint the starfield.
	stars();

	// Draw space ship.
	makeShip();
})

function stars(){
	for(var i = 0; i <= 50; i++){
		var x = Math.floor(Math.random() * 299);
		var y = Math.floor(Math.random() * 299);

		context.fillStyle = 'white';

		if(x < 30 || y < 30) {
			context.fillStyle = 'black';
		}

		context.beginPath();
		context.arc(x, y, 3, 0, Math.PI * 2, true);
		context.closePath();
		context.fill();
	}
}

function makeShip(){
	// Draw saucer bottom.
	context.beginPath();
	context.moveTo(28.4, 16.9);
	context.bezierCurveTo(28.4, 19.7, 22.9, 22.0, 16.0, 22.0);
	context.bezierCurveTo(9.1, 22.0, 3.6, 19.7, 3.6, 16.9);
	context.bezierCurveTo(3.6, 14.1, 9.1, 11.8, 16.0, 11.8);
	context.bezierCurveTo(22.9, 11.8, 28.4, 14.1, 28.4, 16.9);
	context.closePath();
	context.fillStyle = "rgb(222, 103, 0)";
	context.fill();

	// Draw saucer top.
	context.beginPath();
	context.moveTo(22.3, 12.0);
	context.bezierCurveTo(22.3, 13.3, 19.4, 14.3, 15.9, 14.3);
	context.bezierCurveTo(12.4, 14.3, 9.6, 13.3, 9.6, 12.0);
	context.bezierCurveTo(9.6, 10.8, 12.4, 9.7, 15.9, 9.7);
	context.bezierCurveTo(19.4, 9.7, 22.3, 10.8, 22.3, 12.0);
	context.closePath();
	context.fillStyle = "rgb(51, 190, 0)";
	context.fill();
}