class main_principal extends Phaser.Scene{
	constructor(){
		super({key: "main_principal", active: true});
	}
	preload(){

	}
	create(){
		
		var texto = this.add.text(this.game.config.width/2, this.game.config.height/2,'INICIAR HISTORIA', {font: '40px Courier',fill: '#ffffff'}).setOrigin(0.5).setInteractive();
        texto.on('pointerdown', () => {
            this.scene.start('history');
        });
        var texto2 = this.add.text(this.game.config.width/2, 400,'INICIAR VS', {font: '40px Courier',fill: '#ffffff'}).setOrigin(0.5).setInteractive();
        texto.on('pointerdown', () => {
            this.scene.start('main2');
        });

	}
	update(time,delta){

	}
}