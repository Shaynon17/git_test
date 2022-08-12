
// const game = new Phaser.Game(800, 600, Phaser.AUTO, '', {
//     preload: preload,
//     create: create,
//     update: update
// })
var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload() {
    // this.load.setBaseURL('http://localhost:80/ninja'); 
    //Here we want to preload ALL assesets the game needs such as images and art, images, sprite
    // game.load.image('sky', 'assets/sky.png')
    // this.load.image('sky', sky);
    this.load.setBaseURL('http://labs.phaser.io');

    this.load.image('sky', 'assets/skies/space3.png');
    this.load.image('logo', 'assets/sprites/phaser3-logo.png');
    this.load.image('red', 'assets/particles/red.png');
}

// function create() {
//     // game.physics.startSystem(Phaser.Physics.ARCADE)
//     game.add.image(400, 300, 'sky')
//     // game.add.sprite(0, 0, 'sky')
// }

function create() {
    this.add.image(400, 300, 'sky');

    var particles = this.add.particles('red');

    var emitter = particles.createEmitter({
        speed: 100,
        scale: { start: 1, end: 0 },
        blendMode: 'ADD'
    });

    var logo = this.physics.add.image(400, 100, 'logo');

    logo.setVelocity(100, 200);
    logo.setBounce(1, 1);
    logo.setCollideWorldBounds(true);

    emitter.startFollow(logo);
}

function update() { }