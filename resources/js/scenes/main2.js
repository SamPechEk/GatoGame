class main2 extends Phaser.Scene{
	constructor(){
		super({key: "main2"});
	}
	preload(){

	}
	create(){
		
		var texto = this.add.text(this.game.config.width/2, this.game.config.height/2,'INICIAR', {font: '40px Courier',fill: '#ffffff'}).setOrigin(0.5).setInteractive();
        texto.on('pointerdown', () => {
            this.scene.start('history');
        });

	}
	update(time,delta){

	}
}