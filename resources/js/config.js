var backgroundColor = "black"

var level = 1;

const config = {
	width: 1100,
	height: 600,
	parent: "container",
	pixelART: true,
	type: Phaser.CANVAS,
	backgroundColor: backgroundColor,
	physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
	scene: [main_principal,main,main2,history,scene1,scene2,scene3]
}

new Phaser.Game(config);