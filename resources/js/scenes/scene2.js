var fondo1;

var texto1;
var texto2;

var puntos1=0;
var puntos2=0;
var ganador;

var sonidodisparo;

var gato_frente;
var gato_izquierda;
var gato_derecha;
var gato_espalda;
var derecha;
var izquierda;
var arriba;
var abajo;

var gato2_frente;
var gato2_izquierda;
var gato2_derecha;
var gato2_espalda;
var derecha2;
var izquierda2;
var arriba2;
var abajo2;
var disparo;
var disparo2;
var estado;
var estado2;

var balas_abajo;
var balas_arriba;
var balas_derecha;
var balas_izquierda;
var balas2_abajo;
var balas2_arriba;
var balas2_derecha;
var balas2_izquierda;

var personaje_perro;
var personaje_gato;
var fon_act;

var barras_a;
var barras_p;

var barras2_a;
var barras2_p;



class scene2 extends Phaser.Scene{
	constructor(){
		super({key: "scene2"});
	}
	eliminarBarras(){
		
	}
	preload(){
		this.load.image('palletel', 'resources/image/sprites/left_pallete.png');
		this.load.image('palleter', 'resources/image/sprites/right_pallete.png');
		this.load.image('pallete', 'resources/image/sprites/pallete.png');
		this.load.image('pallete2', 'resources/image/sprites/pallete2.png');
		this.load.image('fondo', 'resources/image/fondos/level1.png');
		this.load.image('fondo1', 'resources/image/fondos/level2.png');
		this.load.image('fondo2', 'resources/image/fondos/level3.png');
		this.load.audio('sonidodisparo', 'resources/sonidos/disparo.wav');
		this.load.image('bala_abajo', 'resources/image/sprites/bala_abajo.png');
		this.load.image('bala_arriba', 'resources/image/sprites/bala_arriba.png');
		this.load.image('bala_derecha', 'resources/image/sprites/bala_derecha.png');
		this.load.image('bala_izquierda', 'resources/image/sprites/bala_izquierda.png');
		this.load.json('animasiones','resources/js/anim/atlas_name_anim.json');
		this.load.atlas('atlas_name','resources/image/sprites/atlas_name.png','resources/js/anim/atlas_name_atlas.json')

	}
	actualizarTexto() {

        texto1.setText('Puntos: ' + puntos1);
        texto2.setText('Puntos: ' + puntos2);
    }
	create(){
		this.fon_act=Phaser.Math.Between(1,3);
		this.personaje_gato = Phaser.Math.Between(1, 2);
		this.personaje_perro = Phaser.Math.Between(1, 2);
		if (this.fon_act==1){
			fondo1 = this.add.sprite(550,300, 'fondo');
		}else{
			if(this.fon_act==2){
				fondo1 = this.add.sprite(550,300, 'fondo1');
			}else{
				fondo1 = this.add.sprite(550,300, 'fondo2');
			}
		}
	this.max_p=this.add.text(1000/2, 10, 'Limite \n100 Pts', {
            fontSize: '30px',
            fill: '#black'
        }).setDepth(0.1);

		texto1 = this.add.text(900, 10, '', {
            fontSize: '30px',
            fill: '#black'
        }).setDepth(0.1);
        // this.actualizarTexto();

       texto2 = this.add.text(40, 10, '', {
            fontSize: '30px',
            fill: '#black'
        }).setDepth(0.1);
        this.actualizarTexto();
        // this.actualizarTexto();

		this.barras_a=this.physics.add.group({
			defaultKey: 'pallete',
			maxSize:20
			
		});
		this.barras2_a=this.physics.add.group({
			defaultKey: 'pallete2',
			maxSize:20
			// 20
		});
		this.barras_p=this.physics.add.group({
			defaultKey: 'palleter',
			maxSize:40
			// 40
		});
		this.barras2_a.immovable=true;
		this.barras_p.immovable=true;
		this.barras2_p=this.physics.add.group({
			defaultKey: 'palletel',
			maxSize:40
		});
		
		// this.barras2_a = this.add.sprite(550,300, 'pallete');
		var z=0;
		for (var i = 0; i < 6; i++) {
			z+=1;
			
			for (var e =0; e < 3; e++) {
				var x=Phaser.Math.Between(0,1);
				if (x==1){
					var barra11=this.barras_a.get();
				}else{
					var barra11=this.barras2_a.get();
				}
				
				if (barra11) {
					
					barra11.setActive(true).setVisible(true);
					barra11.y=z*85;
					barra11.x=Phaser.Math.Between(85,1015);
					barra11.setScale(1);
					barra11.body.immovable=true;

					this.physics.add.overlap(barra11, this.barras_a, (barraEnColicion) => {
                    barraEnColicion.x = Phaser.Math.Between(85, 1000);
                	});
                	this.physics.add.overlap(barra11, this.barras2_a, (barraEnColicion) => {
                    barraEnColicion.x = Phaser.Math.Between(85, 1000);
                    });
                    this.physics.add.overlap(barra11, this.barras_p, (barraEnColicion) => {
                    barraEnColicion.x = Phaser.Math.Between(85, 1000);
                	});
                	this.physics.add.overlap(barra11, this.barras2_p, (barraEnColicion) => {
                    barraEnColicion.x = Phaser.Math.Between(85, 1000);
                    });

				}
			}
			
		}
		var z=0;
		for (var i = 0; i < 12; i++) {
			z+=1;
			
			for (var e =0; e < 3; e++) {
				var x=Phaser.Math.Between(0,1);
				if (x==1){
					var barra11=this.barras_p.get();
				}else{
					var barra11=this.barras2_p.get();
				}
				
				if (barra11) {
					
					barra11.setActive(true).setVisible(true);
					barra11.y=Phaser.Math.Between(85,585);
					barra11.x=z*85;
					barra11.setScale(1);
					barra11.body.immovable=true;

					this.physics.add.overlap(barra11, this.barras_a, (barraEnColicion) => {
                    barraEnColicion.y = Phaser.Math.Between(85, 500);
                	});
                	this.physics.add.overlap(barra11, this.barras2_a, (barraEnColicion) => {
                    barraEnColicion.y = Phaser.Math.Between(85, 500);
                    });
                    this.physics.add.overlap(barra11, this.barras_p, (barraEnColicion) => {
                    barraEnColicion.y = Phaser.Math.Between(85, 500);
                	});
                	this.physics.add.overlap(barra11, this.barras2_p, (barraEnColicion) => {
                    barraEnColicion.y = Phaser.Math.Between(85, 500);
                    });
				}
			}
			
		}



		
		this.sonidodisparo = this.sound.add('sonidodisparo');
		// VALAS PARA ABAJO
		var bala_down = new Phaser.Class({

		    Extends: Phaser.GameObjects.Image,

		    initialize:

		        function bala(scene) {
		            Phaser.GameObjects.Image.call(this, scene, 0, 0, 'bala_abajo');
		            // DIRECCION DE LAS VALAS
		            this.speed = Phaser.Math.GetSpeed(-400, 1);
		            // DIRECCION DE LAS VALAS
		        },

		    fire: function (x, y) {
		        this.setPosition(x, y);

		        this.setActive(true);
		        this.setVisible(true);
		    },

		    update: function (time, delta) {
		        this.y -= this.speed * delta;
		        // PARA DESAPARECER LAS VALAS
		        if (this.y > 550) {
		            this.setActive(false);
		            this.setVisible(false);
		        }
		    }

		});
		this.balas_abajo= this.physics.add.group({
			classType: bala_down,
            maxSize: 10,
            runChildUpdate: true
        });
        this.balas2_abajo= this.physics.add.group({
			classType: bala_down,
            maxSize: 10,
            runChildUpdate: true
        });
        // VALAS PARA ABAJO

        //VALAS PARA ARRIBA

        var bala_up = new Phaser.Class({

		    Extends: Phaser.GameObjects.Image,

		    initialize:

		        function bala(scene) {
		            Phaser.GameObjects.Image.call(this, scene, 0, 0, 'bala_arriba');
		            // DIRECCION DE LAS VALAS
		            this.speed = Phaser.Math.GetSpeed(400, 1);
		            // DIRECCION DE LAS VALAS
		        },

		    fire: function (x, y) {
		        this.setPosition(x, y);

		        this.setActive(true);
		        this.setVisible(true);
				
		    },

		    update: function (time, delta) {
		        this.y -= this.speed * delta;
		        // PARA DESAPARECER LAS VALAS
		        if (this.y < 50) {
		            this.setActive(false);
		            this.setVisible(false);
		        }
		    }

		});
		this.balas_arriba= this.physics.add.group({
			classType: bala_up,
            maxSize: 10,
            runChildUpdate: true
        });
        this.balas2_arriba= this.physics.add.group({
			classType: bala_up,
            maxSize: 10,
            runChildUpdate: true
        });

        //VALAS PARA ARRIBA




// VALAS PARA derecha
		var bala_righ = new Phaser.Class({

		    Extends: Phaser.GameObjects.Image,

		    initialize:

		        function bala(scene) {
		            Phaser.GameObjects.Image.call(this, scene, 0, 0, 'bala_derecha');
		            // DIRECCION DE LAS VALAS
		            this.speed = Phaser.Math.GetSpeed(-400, 1);
		            // DIRECCION DE LAS VALAS
		        },

		    fire: function (x, y) {
		        this.setPosition(x, y);

		        this.setActive(true);
		        this.setVisible(true);
		    },

		    update: function (time, delta) {
		        this.x -= this.speed * delta;
		        // PARA DESAPARECER LAS VALAS
		        if (this.x > 1050) {
		            this.setActive(false);
		            this.setVisible(false);
		        }
		    }

		});
		this.balas_derecha= this.physics.add.group({
			classType: bala_righ,
            maxSize: 10,
            runChildUpdate: true
        });
        this.balas2_derecha= this.physics.add.group({
			classType: bala_righ,
            maxSize: 10,
            runChildUpdate: true
        });
        // VALAS PARA derecha

        //VALAS PARA ARRIBA

        var bala_left = new Phaser.Class({

		    Extends: Phaser.GameObjects.Image,

		    initialize:

		        function bala(scene) {
		            Phaser.GameObjects.Image.call(this, scene, 0, 0, 'bala_izquierda');
		            // DIRECCION DE LAS VALAS
		            this.speed = Phaser.Math.GetSpeed(400, 1);
		            // DIRECCION DE LAS VALAS
		        },

		    fire: function (x, y) {
		        this.setPosition(x, y);

		        this.setActive(true);
		        this.setVisible(true);
		    },

		    update: function (time, delta) {
		        this.x -= this.speed * delta;
		        // PARA DESAPARECER LAS VALAS
		        if (this.x < 50) {
		            this.setActive(false);
		            this.setVisible(false);
		        }
		    }

		});
		this.balas_izquierda= this.physics.add.group({
			classType: bala_left,
            maxSize: 10,
            runChildUpdate: true
        });
        this.balas2_izquierda= this.physics.add.group({
			classType: bala_left,
            maxSize: 10,
            runChildUpdate: true
        });

        //VALAS PARA ARRIBA





		this.gato_anim=this.cache.json.get('animasiones');
		this.anims.fromJSON(this.gato_anim);

		// PLAYER1
		this.gato_frente=this.physics.add.sprite(this.game.config.width-30, this.game.config.height/2,'atlas_name').setScale(2);
		if  (this.personaje_gato==1){
			this.gato_frente.anims.play('c1_1');
		}else{
			this.gato_frente.anims.play('c2_1');
		}
		// this.gato_frente.anims.play('c2_1');
		this.gato_frente.setVisible(true);
		this.gato_frente.anims.stop();
		this.gato_frente.setCollideWorldBounds(true);
		this.gato_frente.immovable = true;

		this.gato_izquierda=this.physics.add.sprite(this.game.config.width-30, this.game.config.height/2,'atlas_name').setScale(2);
		this.gato_izquierda.setVisible(false);
		this.gato_izquierda.setCollideWorldBounds(true);


		this.gato_derecha=this.physics.add.sprite(this.game.config.width-30, this.game.config.height/2,'atlas_name').setScale(2);
		this.gato_derecha.setVisible(false);
		this.gato_derecha.setCollideWorldBounds(true);


		this.gato_espalda=this.physics.add.sprite(this.game.config.width-30, this.game.config.height/2,'atlas_name').setScale(2);
		this.gato_espalda.setVisible(false);
		this.gato_espalda.setCollideWorldBounds(true);

		this.derecha = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        this.izquierda = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        this.arriba = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        this.abajo = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        this.disparo= this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
		// PLAYER1

		// PLAYER2
		this.gato2_frente=this.physics.add.sprite(30, this.game.config.height/2,'atlas_name').setScale(2);
		if(this.personaje_perro==1){
			this.gato2_frente.anims.play('d1_1');
		}else{
			this.gato2_frente.anims.play('d2_1');
		}
		// this.gato2_frente.anims.play('d2_1');
		this.gato2_frente.setVisible(true);
		this.gato2_frente.anims.stop();
		this.gato2_frente.setCollideWorldBounds(true);
		this.gato2_frente.immovable = true;

		this.gato2_izquierda=this.physics.add.sprite(30, this.game.config.height/2,'atlas_name').setScale(2);
		this.gato2_izquierda.setVisible(false);
		this.gato2_izquierda.setCollideWorldBounds(true);


		this.gato2_derecha=this.physics.add.sprite(30, this.game.config.height/2,'atlas_name').setScale(2);
		this.gato2_derecha.setVisible(false);
		this.gato2_derecha.setCollideWorldBounds(true);


		this.gato2_espalda=this.physics.add.sprite(30, this.game.config.height/2,'atlas_name').setScale(2);
		this.gato2_espalda.setVisible(false);
		this.gato2_espalda.setCollideWorldBounds(true);

		this.derecha2 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.izquierda2 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.arriba2 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.abajo2 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.disparo2= this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);
		// PLAYER2	

		// FISICAS
		
		// this.barras2_a.move=false;
		// this.barras_p.move=false;
		this.physics.add.collider(this.gato_frente,this.barras_p,this.eliminarBarras,null,this);
		this.physics.add.collider(this.gato_frente,this.barras2_p,this.eliminarBarras,null,this);
		this.physics.add.collider(this.gato_frente,this.barras_a,this.eliminarBarras,null,this);
		this.physics.add.collider(this.gato_frente,this.barras2_a,this.eliminarBarras,null,this);
		this.physics.add.collider(this.gato_izquierda,this.barras_a,this.eliminarBarras,null,this);
		this.physics.add.collider(this.gato_izquierda,this.barras_p,this.eliminarBarras,null,this);
		this.physics.add.collider(this.gato_izquierda,this.barras2_p,this.eliminarBarras,null,this);
		this.physics.add.collider(this.gato_izquierda,this.barras2_a,this.eliminarBarras,null,this);
		this.physics.add.collider(this.gato_espalda,this.barras2_p,this.eliminarBarras,null,this);
		this.physics.add.collider(this.gato_espalda,this.barras_p,this.eliminarBarras,null,this);
		this.physics.add.collider(this.gato_espalda,this.barras2_a,this.eliminarBarras,null,this);
		this.physics.add.collider(this.gato_espalda,this.barras_a,this.eliminarBarras,null,this);
		this.physics.add.collider(this.gato_derecha,this.barras2_p,this.eliminarBarras,null,this);
		this.physics.add.collider(this.gato_derecha,this.barras_p,this.eliminarBarras,null,this);
		this.physics.add.collider(this.gato_derecha,this.barras2_a,this.eliminarBarras,null,this);
		this.physics.add.collider(this.gato_derecha,this.barras_a,this.eliminarBarras,null,this);

		this.physics.add.collider(this.gato2_frente,this.barras_p,this.eliminarBarras,null,this);
		this.physics.add.collider(this.gato2_frente,this.barras2_p,this.eliminarBarras,null,this);
		this.physics.add.collider(this.gato2_frente,this.barras_a,this.eliminarBarras,null,this);
		this.physics.add.collider(this.gato2_frente,this.barras2_a,this.eliminarBarras,null,this);
		this.physics.add.collider(this.gato2_izquierda,this.barras_a,this.eliminarBarras,null,this);
		this.physics.add.collider(this.gato2_izquierda,this.barras_p,this.eliminarBarras,null,this);
		this.physics.add.collider(this.gato2_izquierda,this.barras2_p,this.eliminarBarras,null,this);
		this.physics.add.collider(this.gato2_izquierda,this.barras2_a,this.eliminarBarras,null,this);
		this.physics.add.collider(this.gato2_espalda,this.barras2_p,this.eliminarBarras,null,this);
		this.physics.add.collider(this.gato2_espalda,this.barras_p,this.eliminarBarras,null,this);
		this.physics.add.collider(this.gato2_espalda,this.barras2_a,this.eliminarBarras,null,this);
		this.physics.add.collider(this.gato2_espalda,this.barras_a,this.eliminarBarras,null,this);
		this.physics.add.collider(this.gato2_derecha,this.barras2_p,this.eliminarBarras,null,this);
		this.physics.add.collider(this.gato2_derecha,this.barras_p,this.eliminarBarras,null,this);
		this.physics.add.collider(this.gato2_derecha,this.barras2_a,this.eliminarBarras,null,this);
		this.physics.add.collider(this.gato2_derecha,this.barras_a,this.eliminarBarras,null,this);

		//fisicas valas
		this.physics.add.overlap(this.balas_arriba,this.barras_p,this.valapared,null,this);
		this.physics.add.overlap(this.balas_arriba,this.barras2_p,this.valapared,null,this);
		this.physics.add.overlap(this.balas_arriba,this.barras_a,this.valapared,null,this);
		this.physics.add.overlap(this.balas_arriba,this.barras2_a,this.valapared,null,this);
		this.physics.add.overlap(this.balas_izquierda,this.barras_a,this.valapared,null,this);
		this.physics.add.overlap(this.balas_izquierda,this.barras_p,this.valapared,null,this);
		this.physics.add.overlap(this.balas_izquierda,this.barras2_p,this.valapared,null,this);
		this.physics.add.overlap(this.balas_izquierda,this.barras2_a,this.valapared,null,this);
		this.physics.add.overlap(this.balas_abajo,this.barras2_p,this.valapared,null,this);
		this.physics.add.overlap(this.balas_abajo,this.barras_p,this.valapared,null,this);
		this.physics.add.overlap(this.balas_abajo,this.barras2_a,this.valapared,null,this);
		this.physics.add.overlap(this.balas_abajo,this.barras_a,this.valapared,null,this);
		this.physics.add.overlap(this.balas_derecha,this.barras2_p,this.valapared,null,this);
		this.physics.add.overlap(this.balas_derecha,this.barras_p,this.valapared,null,this);
		this.physics.add.overlap(this.balas_derecha,this.barras2_a,this.valapared,null,this);
		this.physics.add.overlap(this.balas_derecha,this.barras_a,this.valapared,null,this);

		this.physics.add.overlap(this.balas2_arriba,this.barras_p,this.valapared,null,this);
		this.physics.add.overlap(this.balas2_arriba,this.barras2_p,this.valapared,null,this);
		this.physics.add.overlap(this.balas2_arriba,this.barras_a,this.valapared,null,this);
		this.physics.add.overlap(this.balas2_arriba,this.barras2_a,this.valapared,null,this);
		this.physics.add.overlap(this.balas2_izquierda,this.barras_a,this.valapared,null,this);
		this.physics.add.overlap(this.balas2_izquierda,this.barras_p,this.valapared,null,this);
		this.physics.add.overlap(this.balas2_izquierda,this.barras2_p,this.valapared,null,this);
		this.physics.add.overlap(this.balas2_izquierda,this.barras2_a,this.valapared,null,this);
		this.physics.add.overlap(this.balas2_abajo,this.barras2_p,this.valapared,null,this);
		this.physics.add.overlap(this.balas2_abajo,this.barras_p,this.valapared,null,this);
		this.physics.add.overlap(this.balas2_abajo,this.barras2_a,this.valapared,null,this);
		this.physics.add.overlap(this.balas2_abajo,this.barras_a,this.valapared,null,this);
		this.physics.add.overlap(this.balas2_derecha,this.barras2_p,this.valapared,null,this);
		this.physics.add.overlap(this.balas2_derecha,this.barras_p,this.valapared,null,this);
		this.physics.add.overlap(this.balas2_derecha,this.barras2_a,this.valapared,null,this);
		this.physics.add.overlap(this.balas2_derecha,this.barras_a,this.valapared,null,this);

		// fisicas2valas
		this.physics.add.overlap(this.balas_arriba,this.gato2_frente,this.valaperro,null,this);
		this.physics.add.overlap(this.balas_arriba,this.gato2_espalda,this.valaperro,null,this);
		this.physics.add.overlap(this.balas_arriba,this.gato2_izquierda,this.valaperro,null,this);
		this.physics.add.overlap(this.balas_arriba,this.gato2_derecha,this.valaperro,null,this);

		this.physics.add.overlap(this.balas_izquierda,this.gato2_frente,this.valaperro,null,this);
		this.physics.add.overlap(this.balas_izquierda,this.gato2_espalda,this.valaperro,null,this);
		this.physics.add.overlap(this.balas_izquierda,this.gato2_izquierda,this.valaperro,null,this);
		this.physics.add.overlap(this.balas_izquierda,this.gato2_derecha,this.valaperro,null,this);

		this.physics.add.overlap(this.balas_abajo,this.gato2_frente,this.valaperro,null,this);
		this.physics.add.overlap(this.balas_abajo,this.gato2_espalda,this.valaperro,null,this);
		this.physics.add.overlap(this.balas_abajo,this.gato2_izquierda,this.valaperro,null,this);
		this.physics.add.overlap(this.balas_abajo,this.gato2_derecha,this.valaperro,null,this);

		this.physics.add.overlap(this.balas_derecha,this.gato2_frente,this.valaperro,null,this);
		this.physics.add.overlap(this.balas_derecha,this.gato2_espalda,this.valaperro,null,this);
		this.physics.add.overlap(this.balas_derecha,this.gato2_izquierda,this.valaperro,null,this);
		this.physics.add.overlap(this.balas_derecha,this.gato2_derecha,this.valaperro,null,this);

		this.physics.add.overlap(this.balas2_arriba,this.gato_frente,this.valagato,null,this);
		this.physics.add.overlap(this.balas2_arriba,this.gato_espalda,this.valagato,null,this);
		this.physics.add.overlap(this.balas2_arriba,this.gato_izquierda,this.valagato,null,this);
		this.physics.add.overlap(this.balas2_arriba,this.gato_derecha,this.valagato,null,this);

		this.physics.add.overlap(this.balas2_izquierda,this.gato_frente,this.valagato,null,this);
		this.physics.add.overlap(this.balas2_izquierda,this.gato_espalda,this.valagato,null,this);
		this.physics.add.overlap(this.balas2_izquierda,this.gato_izquierda,this.valagato,null,this);
		this.physics.add.overlap(this.balas2_izquierda,this.gato_derecha,this.valagato,null,this);

		this.physics.add.overlap(this.balas2_abajo,this.gato_frente,this.valagato,null,this);
		this.physics.add.overlap(this.balas2_abajo,this.gato_espalda,this.valagato,null,this);
		this.physics.add.overlap(this.balas2_abajo,this.gato_izquierda,this.valagato,null,this);
		this.physics.add.overlap(this.balas2_abajo,this.gato_derecha,this.valagato,null,this);

		this.physics.add.overlap(this.balas2_derecha,this.gato_frente,this.valagato,null,this);
		this.physics.add.overlap(this.balas2_derecha,this.gato_espalda,this.valagato,null,this);
		this.physics.add.overlap(this.balas2_derecha,this.gato_izquierda,this.valagato,null,this);
		this.physics.add.overlap(this.balas2_derecha,this.gato_derecha,this.valagato,null,this);

		// this.physics.add.overlap(this.balas2_arriba,this.barras_p,this.valapared,null,this);
		// this.physics.add.overlap(this.balas2_arriba,this.barras2_p,this.valapared,null,this);
		// this.physics.add.overlap(this.balas2_arriba,this.barras_a,this.valapared,null,this);
		// this.physics.add.overlap(this.balas2_arriba,this.barras2_a,this.valapared,null,this);
		// this.physics.add.overlap(this.balas2_izquierda,this.barras_a,this.valapared,null,this);
		// this.physics.add.overlap(this.balas2_izquierda,this.barras_p,this.valapared,null,this);
		// this.physics.add.overlap(this.balas2_izquierda,this.barras2_p,this.valapared,null,this);
		// this.physics.add.overlap(this.balas2_izquierda,this.barras2_a,this.valapared,null,this);
		// this.physics.add.overlap(this.balas2_abajo,this.barras2_p,this.valapared,null,this);
		// this.physics.add.overlap(this.balas2_abajo,this.barras_p,this.valapared,null,this);
		// this.physics.add.overlap(this.balas2_abajo,this.barras2_a,this.valapared,null,this);
		// this.physics.add.overlap(this.balas2_abajo,this.barras_a,this.valapared,null,this);
		// this.physics.add.overlap(this.balas2_derecha,this.barras2_p,this.valapared,null,this);
		// this.physics.add.overlap(this.balas2_derecha,this.barras_p,this.valapared,null,this);
		// this.physics.add.overlap(this.balas2_derecha,this.barras2_a,this.valapared,null,this);
		// this.physics.add.overlap(this.balas2_derecha,this.barras_a,this.valapared,null,this);
	}
	finPartida() {
		if(puntos1 >=100){
            ganador = 'gatos';
        }else{
        	ganador='perros';
        }
        puntos1=0;
        puntos2=0;
        this.add.text(1100 / 2, 600 / 2, 'Fin de la partida.\n'+'Ganan los '+ganador, {
            fontSize: '50px',
            fill: 'red'
        }).setOrigin(0.5);
        this.scene.pause();
        setTimeout(() => {
            this.scene.stop();
            this.scene.start('main');
        }, 2000)
    }
	update(time,delta){
		if (puntos1>=100||puntos2>=100){
			this.finPartida()
		}
		// PLAYER1
		this.gato_derecha.body.setVelocityX(0);
		this.gato_izquierda.body.setVelocityX(0);
		this.gato_frente.body.setVelocityX(0);
		this.gato_espalda.body.setVelocityX(0);
		this.gato_derecha.body.setVelocityY(0);
		this.gato_izquierda.body.setVelocityY(0);
		this.gato_frente.body.setVelocityY(0);
		this.gato_espalda.body.setVelocityY(0);
        if (this.izquierda.isDown) {
        	this.estado=2;
        	if(this.personaje_gato==1){
        		this.gato_izquierda.anims.play('c1_2',true);
        	}else{
        		this.gato_izquierda.anims.play('c2_2',true);
        	}
        	// this.gato_izquierda.anims.play('c2_2',true);
        	this.gato_izquierda.setVisible(true);

            this.gato_izquierda.body.setVelocityX(-300);
            this.gato_derecha.body.setVelocityX(-300);
            this.gato_frente.body.setVelocityX(-300);
            this.gato_espalda.body.setVelocityX(-300);

            this.gato_derecha.setVisible(false);
            this.gato_frente.setVisible(false);
            this.gato_espalda.setVisible(false);
        }
        else if (this.derecha.isDown) {
        	this.estado=3;
        	if (this.personaje_gato==1) {
        		this.gato_derecha.anims.play('c1_3',true);
        	}else{
        		this.gato_derecha.anims.play('c2_3',true);
        	}
        	// this.gato_derecha.anims.play('c2_3',true);
        	this.gato_derecha.setVisible(true);

            this.gato_izquierda.body.setVelocityX(300);
            this.gato_derecha.body.setVelocityX(300);
            this.gato_frente.body.setVelocityX(300);
            this.gato_espalda.body.setVelocityX(300);

            this.gato_izquierda.setVisible(false);
            this.gato_frente.setVisible(false);
            this.gato_espalda.setVisible(false);

        }else if (this.arriba.isDown){
        	this.estado=4;
        	if (this.personaje_gato==1) {
        		this.gato_espalda.anims.play('c1_4',true);
        	}else{
        		this.gato_espalda.anims.play('c2_4',true);
        	}
        	// this.gato_espalda.anims.play('c2_4',true);
        	this.gato_espalda.setVisible(true);

            this.gato_izquierda.body.setVelocityY(-300);
            this.gato_derecha.body.setVelocityY(-300);
            this.gato_frente.body.setVelocityY(-300);
            this.gato_espalda.body.setVelocityY(-300);

            this.gato_izquierda.setVisible(false);
            this.gato_frente.setVisible(false);
            this.gato_derecha.setVisible(false);

        }else if (this.abajo.isDown){
        	this.estado=1;
        	if (this.personaje_gato==1){
        		this.gato_frente.anims.play('c1_1',true);
        	}else{
        		this.gato_frente.anims.play('c2_1',true);
        	}
        	// this.gato_frente.anims.play('c2_1',true);
        	this.gato_frente.setVisible(true);

            this.gato_izquierda.body.setVelocityY(300);
            this.gato_derecha.body.setVelocityY(300);
            this.gato_frente.body.setVelocityY(300);
            this.gato_espalda.body.setVelocityY(300);

            this.gato_izquierda.setVisible(false);
            this.gato_espalda.setVisible(false);
            this.gato_derecha.setVisible(false);
        }else{
        	this.gato_izquierda.anims.stop();
        	this.gato_derecha.anims.stop();
        	this.gato_espalda.anims.stop();
        	this.gato_frente .anims.stop();

        }
        // VALAS ABAJO
        if (this.disparo.isDown){
        	var vala =this.balas_abajo.get();
        	if(this.izquierda.isDown){
	        	if(this.abajo.isDown){
			    	if(vala){
			    		vala.fire(this.gato_izquierda.x,this.gato_izquierda.y);
			    		this.sonidodisparo.play();
			    	}
	        	}
        	}else{
        		if(this.derecha.isDown){
		        	if(this.abajo.isDown){
				    	if(vala){
				    		vala.fire(this.gato_derecha.x,this.gato_derecha.y);
				    		this.sonidodisparo.play();
				    	}
		        	}
        		}else{
	        		if(this.arriba.isDown){
	        			if(this.abajo.isDown){
					    	if(vala){
					    		vala.fire(this.gato_derecha.x,this.gato_derecha.y);
					    		this.sonidodisparo.play();
					    	}
			        	}
	        		}else{
	        			if(this.estado===1){
		        			if(vala){
						    	vala.fire(this.gato_frente.x,this.gato_frente.y);
						    	this.sonidodisparo.play();
						    }
	        			}
	        		}
        		}   	
        	}
        }
        // BALAS ABAJO
        // BALAS ARRIBA
        if (this.disparo.isDown){
        	var vala =this.balas_arriba.get();
        	if(this.izquierda.isDown){
	        	if(this.arriba.isDown){
			    	if(vala){
			    		vala.fire(this.gato_izquierda.x,this.gato_izquierda.y);
			    		this.sonidodisparo.play();
			    	}
	        	}
        	}else{
        		if(this.derecha.isDown){
		        	if(this.arriba.isDown){
				    	if(vala){
				    		vala.fire(this.gato_derecha.x,this.gato_derecha.y);
				    		this.sonidodisparo.play();
				    	}
		        	}
        		}else{
	        		if(this.abajo.isDown){
	        			if(this.arriba.isDown){
					    	if(vala){
					    		vala.fire(this.gato_espalda.x,this.gato_espalda.y);
					    		this.sonidodisparo.play();
					    	}
			        	}
	        		}else{
	        			if(this.estado===4){
		        			if(vala){
						    	vala.fire(this.gato_frente.x,this.gato_frente.y);
						    	this.sonidodisparo.play();
						    }
	        			}
	        		}
        		}   	
        	}
        }


        // BALAS ARRIBA
         // VALAS dercha
        if (this.disparo.isDown){
        	var vala =this.balas_derecha.get();
        	if(this.izquierda.isDown){
	        	if(this.derecha.isDown){
			    	if(vala){
			    		vala.fire(this.gato_izquierda.x,this.gato_izquierda.y);
			    		this.sonidodisparo.play();
			    	}
	        	}
        	}else{
        		if(this.abajo.isDown){
		        	if(this.derecha.isDown){
				    	if(vala){
				    		vala.fire(this.gato_frente.x,this.gato_frente.y);
				    		this.sonidodisparo.play();
				    	}
		        	}
        		}else{
	        		if(this.arriba.isDown){
	        			if(this.derecha.isDown){
					    	if(vala){
					    		vala.fire(this.gato_espalda.x,this.gato_espalda.y);
					    		this.sonidodisparo.play();
					    	}
			        	}
	        		}else{
	        			if(this.estado===3){
		        			if(vala){
						    	vala.fire(this.gato_frente.x,this.gato_frente.y);
						    	this.sonidodisparo.play();
						    }
	        			}
	        		}
        		}   	
        	}
        }
        // BALAS derecha

          // VALAS izquierda
        if (this.disparo.isDown){
        	var vala =this.balas_izquierda.get();
        	if(this.derecha.isDown){
	        	if(this.izquierda.isDown){
			    	if(vala){
			    		vala.fire(this.gato_izquierda.x,this.gato_izquierda.y);
			    		this.sonidodisparo.play();
			    	}
	        	}
        	}else{
        		if(this.abajo.isDown){
		        	if(this.izquierda.isDown){
				    	if(vala){
				    		vala.fire(this.gato_frente.x,this.gato_frente.y);
				    		this.sonidodisparo.play();
				    	}
		        	}
        		}else{
	        		if(this.arriba.isDown){
	        			if(this.izquierda.isDown){
					    	if(vala){
					    		vala.fire(this.gato_espalda.x,this.gato_espalda.y);
					    		this.sonidodisparo.play();
					    	}
			        	}
	        		}else{
	        			if(this.estado===2){
		        			if(vala){
						    	vala.fire(this.gato_frente.x,this.gato_frente.y);
						    	this.sonidodisparo.play();
						    }
	        			}
	        		}
        		}   	
        	}
        }
        // BALAS izquierda
    // PLAYER1


    // PLAYER2

		this.gato2_derecha.body.setVelocityX(0);
		this.gato2_izquierda.body.setVelocityX(0);
		this.gato2_frente.body.setVelocityX(0);
		this.gato2_espalda.body.setVelocityX(0);
		this.gato2_derecha.body.setVelocityY(0);
		this.gato2_izquierda.body.setVelocityY(0);
		this.gato2_frente.body.setVelocityY(0);
		this.gato2_espalda.body.setVelocityY(0);
        if (this.izquierda2.isDown) {
        	this.estado2=2;
        	if (this.personaje_perro==1) {
        		this.gato2_izquierda.anims.play('d1_2',true);
        	}else{
        		this.gato2_izquierda.anims.play('d2_2',true);
        	}
        	// this.gato2_izquierda.anims.play('d2_2',true);
        	this.gato2_izquierda.setVisible(true);

            this.gato2_izquierda.body.setVelocityX(-300);
            this.gato2_derecha.body.setVelocityX(-300);
            this.gato2_frente.body.setVelocityX(-300);
            this.gato2_espalda.body.setVelocityX(-300);

            this.gato2_derecha.setVisible(false);
            this.gato2_frente.setVisible(false);
            this.gato2_espalda.setVisible(false);
        }else if (this.derecha2.isDown) {
        	this.estado2=3;
        	if(this.personaje_perro==1){
        		this.gato2_derecha.anims.play('d1_3',true);
        	}else{
        		this.gato2_derecha.anims.play('d2_3',true);
        	}
        	// this.gato2_derecha.anims.play('d2_3',true);
        	this.gato2_derecha.setVisible(true);

            this.gato2_izquierda.body.setVelocityX(300);
            this.gato2_derecha.body.setVelocityX(300);
            this.gato2_frente.body.setVelocityX(300);
            this.gato2_espalda.body.setVelocityX(300);

            this.gato2_izquierda.setVisible(false);
            this.gato2_frente.setVisible(false);
            this.gato2_espalda.setVisible(false);

        }else if (this.arriba2.isDown){
        	this.estado2=4;
        	if(this.personaje_perro==1){
        		this.gato2_espalda.anims.play('d1_4',true);
        	}else{
        		this.gato2_espalda.anims.play('d2_4',true);
        	}
        	// this.gato2_espalda.anims.play('d2_4',true);
        	this.gato2_espalda.setVisible(true);

            this.gato2_izquierda.body.setVelocityY(-300);
            this.gato2_derecha.body.setVelocityY(-300);
            this.gato2_frente.body.setVelocityY(-300);
            this.gato2_espalda.body.setVelocityY(-300);

            this.gato2_izquierda.setVisible(false);
            this.gato2_frente.setVisible(false);
            this.gato2_derecha.setVisible(false);

        }else if (this.abajo2.isDown){
        	this.estado2=1;
        	if(this.personaje_perro==1){
        		this.gato2_frente.anims.play('d1_1',true);
        	}else{
        		this.gato2_frente.anims.play('d2_1',true);
        	}
        	// this.gato2_frente.anims.play('d2_1',true);
        	this.gato2_frente.setVisible(true);

            this.gato2_izquierda.body.setVelocityY(300);
            this.gato2_derecha.body.setVelocityY(300);
            this.gato2_frente.body.setVelocityY(300);
            this.gato2_espalda.body.setVelocityY(300);

            this.gato2_izquierda.setVisible(false);
            this.gato2_espalda.setVisible(false);
            this.gato2_derecha.setVisible(false);
        }else{
        	this.gato2_izquierda.anims.stop();
        	this.gato2_derecha.anims.stop();
        	this.gato2_espalda.anims.stop();
        	this.gato2_frente .anims.stop();
        }
         // VALAS ABAJO
        if (this.disparo2.isDown){
        	var vala =this.balas2_abajo.get();
        	if(this.izquierda2.isDown){
	        	if(this.abajo2.isDown){
			    	if(vala){
			    		vala.fire(this.gato2_izquierda.x,this.gato2_izquierda.y);
			    		this.sonidodisparo.play();
			    	}
	        	}
        	}else{
        		if(this.derecha2.isDown){
		        	if(this.abajo2.isDown){
				    	if(vala){
				    		vala.fire(this.gato2_derecha.x,this.gato2_derecha.y);
				    		this.sonidodisparo.play();
				    	}
		        	}
        		}else{
	        		if(this.arriba2.isDown){
	        			if(this.abajo2.isDown){
					    	if(vala){
					    		vala.fire(this.gato2_derecha.x,this.gato2_derecha.y);
					    		this.sonidodisparo.play();
					    	}
			        	}
	        		}else{
	        			if(this.estado2===1){
		        			if(vala){
						    	vala.fire(this.gato2_frente.x,this.gato2_frente.y);
						    	this.sonidodisparo.play();
						    }
	        			}
	        		}
        		}   	
        	}
        }
        // BALAS ABAJO
        // BALAS ARRIBA
        if (this.disparo2.isDown){
        	var vala =this.balas2_arriba.get();
        	if(this.izquierda2.isDown){
	        	if(this.arriba2.isDown){
			    	if(vala){
			    		vala.fire(this.gato2_izquierda.x,this.gato2_izquierda.y);
			    		this.sonidodisparo.play();
			    	}
	        	}
        	}else{
        		if(this.derecha2.isDown){
		        	if(this.arriba2.isDown){
				    	if(vala){
				    		vala.fire(this.gato2_derecha.x,this.gato2_derecha.y);
				    		this.sonidodisparo.play();
				    	}
		        	}
        		}else{
	        		if(this.abajo2.isDown){
	        			if(this.arriba2.isDown){
					    	if(vala){
					    		vala.fire(this.gato2_espalda.x,this.gato2_espalda.y);
					    		this.sonidodisparo.play();
					    	}
			        	}
	        		}else{
	        			if(this.estado2===4){
		        			if(vala){
						    	vala.fire(this.gato2_frente.x,this.gato2_frente.y);
						    	this.sonidodisparo.play();
						    }
	        			}
	        		}
        		}   	
        	}
        }


        // BALAS ARRIBA

          // VALAS dercha
        if (this.disparo2.isDown){
        	var vala =this.balas2_derecha.get();
        	if(this.izquierda2.isDown){
	        	if(this.derecha2.isDown){
			    	if(vala){
			    		vala.fire(this.gato2_izquierda.x,this.gato2_izquierda.y);
			    		this.sonidodisparo.play();
			    	}
	        	}
        	}else{
        		if(this.abajo2.isDown){
		        	if(this.derecha2.isDown){
				    	if(vala){
				    		vala.fire(this.gato2_frente.x,this.gato2_frente.y);
				    		this.sonidodisparo.play();
				    	}
		        	}
        		}else{
	        		if(this.arriba2.isDown){
	        			if(this.derecha2.isDown){
					    	if(vala){
					    		vala.fire(this.gato2_espalda.x,this.gato2_espalda.y);
					    		this.sonidodisparo.play();
					    	}
			        	}
	        		}else{
	        			if(this.estado2===3){
		        			if(vala){
						    	vala.fire(this.gato2_frente.x,this.gato2_frente.y);
						    	this.sonidodisparo.play();
						    }
	        			}
	        		}
        		}   	
        	}
        }
    // valas derecha

    // valas izquierda
    	 // VALAS izquierda
        if (this.disparo2.isDown){
        	var vala =this.balas2_izquierda.get();
        	if(this.derecha2.isDown){
	        	if(this.izquierda2.isDown){
			    	if(vala){
			    		vala.fire(this.gato_izquierda2.x,this.gato2_izquierda.y);
			    		this.sonidodisparo.play();
			    	}
	        	}
        	}else{
        		if(this.abajo2.isDown){
		        	if(this.izquierda2.isDown){
				    	if(vala){
				    		vala.fire(this.gato2_frente.x,this.gato2_frente.y);
				    		this.sonidodisparo.play();
				    	}
		        	}
        		}else{
	        		if(this.arriba2.isDown){
	        			if(this.izquierda2.isDown){
					    	if(vala){
					    		vala.fire(this.gato2_espalda.x,this.gato2_espalda.y);
					    		this.sonidodisparo.play();
					    	}
			        	}
	        		}else{
	        			if(this.estado2===2){
		        			if(vala){
						    	vala.fire(this.gato2_frente.x,this.gato2_frente.y);
						    	this.sonidodisparo.play();
						    }
	        			}
	        		}
        		}   	
        	}
        }
        // BALAS izquierda

	// PLAYER2
	}
	valapared(bala, pared) {
        if (bala.active && pared.active) {
            bala.setActive(false);
            bala.setVisible(false);
           
        }
    }
    valaperro(perro, bala) {
        if (bala.active && perro.active) {
            bala.setActive(false);
            bala.setVisible(false);
            puntos1+=2;
            if (puntos2>0){
            	puntos2-=1;
            } 
            this.actualizarTexto();
           
        }
    }
    valagato(gato, bala) {
        if (bala.active && gato.active) {
            bala.setActive(false);
            bala.setVisible(false);
            puntos2+=2;
            if (puntos1>0){
            	puntos1-=1;
            } 
            this.actualizarTexto();
           
        }
    }
}