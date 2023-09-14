var fondo2;
class scene3 extends Phaser.Scene{
	constructor(){
		super({key: "scene3"});
	}
	preload(){
		this.load.image('fondo2', 'resources/image/fondos/level3.png');
	}
	create(){
		// fondo2 = this.add.sprite(550,300, 'fondo2');
		var texto = this.add.text(this.game.config.width/2, this.game.config.height/2,'NIVEL'+level, {font: '40px Courier',fill: '#ffffff'}).setOrigin(0.5).setInteractive();
		texto.on('pointerdown', () => {
       	// level++;
        this.scene.start('main');
        });
	}
	update(time,delta){

	}
}