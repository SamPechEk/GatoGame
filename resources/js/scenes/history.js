class history extends Phaser.Scene{
	constructor(){
		super({key: "history"});
	}
	preload(){

	}
	create(){
		var texto = this.add.text(this.game.config.width/2, this.game.config.height/2,'Historia', {font: '40px Courier',fill: '#ffffff'}).setOrigin(0.5).setInteractive();
		texto.on('pointerdown', () => {
        	this.scene.start('scene1');
        });
	}
	update(time,delta){


	}
}