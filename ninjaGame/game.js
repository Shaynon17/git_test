
// const game = new Phaser.Game(800, 600, Phaser.AUTO, '', {
//     preload: preload,
//     create: create,
//     update: update
// })
// http://localhost/ninjaGame/ (CAP this to browser to access the game)
// /c/wamp64/www then git push
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
    this.load.image('sky', 'assets/sky.png')
    this.load.image('ground', 'assets/ground.png')
}

function create() {
    // game.physics.startSystem(Phaser.Physics.ARCADE) //this line of code breaks the game
    this.add.image(400, 300, 'sky')
    // this.add.image(200, 200, 'ground')
    platforms = this.add.group()
    platforms.enableBody = true

    let ground = platforms.create(0, this.world.height - 64, 'ground')
    ground.scale.setTo(2, 2)
    ground.body.immovable = true

    let ledge = platforms.create(400, 450, 'ground')
    ledge.body.immovable = true

    ledge = platforms.create(-75, 350, 'ground')
    ledge.body.immovable = true
}


function update() { }