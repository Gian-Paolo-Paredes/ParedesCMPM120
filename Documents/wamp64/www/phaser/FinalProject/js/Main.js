var game;
var armada;
var Play;
var i=0;
//intial load
window.onload = function () {
	game = new Phaser.Game(1000,600,Phaser.AUTO);
	game.state.add('Load', Load);
	game.state.add('Play', Play);
	game.state.start('Load');
}
//load state for assets
var Load = function(game){};
Load.prototype = {
	preload: function (){
		//load images
		console.log('Load: preload');
		game.load.path = '../ParedesArmada/Assets/';
		this.load.image('Space','Space.jpg');
		this.load.image('Ships', 'Ship.png')
		
	},
	create: function() {
		console.log('Play: create');	
		game.state.start('Play');
	},
	update: function(){
		
	}
};
//play function
var Play = function(game){};
Play.prototype = {
	preload: function (){
		console.log('Preload');
	},
	create: function (){
			console.log('play');
			this.add.image(0,0,'Space');

			// make multiple
			for (i=0; i<50;i++){
			armada = new Armada(game,'Ships');
			game.add.existing(armada);

			}
		}
};