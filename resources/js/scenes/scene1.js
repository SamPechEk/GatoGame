var fondo;
class scene1 extends Phaser.Scene{
	constructor(){
		super({key: "scene1"});
	}
	preload(){
		this.load.image('fondo', 'resources/image/fondos/level1.png');

	}
	create(){
		fondo = this.add.sprite(550,300, 'fondo');
		var texto = this.add.text(this.game.config.width/2, this.game.config.height/2,'NIVEL'+level, {font: '40px Courier',fill: '#ffffff'}).setOrigin(0.5).setInteractive();
		texto.on('pointerdown', () => {
       	level++;
        this.scene.start('main');
        });
	}
	update(time,delta){

	}
}