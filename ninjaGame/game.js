
// const game = new Phaser.Game(800, 600, Phaser.AUTO, '', {
//     preload: preload,
//     create: create,
//     update: update
// })
// http://localhost/ninjaGame/ (CAP this to browser to access the game)
// /c/wamp64/www then git push
// committing before i change a LOT of code
var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var player;
var platforms;
var cursors;

var game = new Phaser.Game(config);

function preload() {
    this.load.image('sky', 'assets/newSky.png')
    this.load.image('ground', 'assets/platform.png')
    this.load.image('myground', 'assets/myplatform.png')

    this.load.spritesheet('dude', 'assets/dude.png', { frameWidth: 32, frameHeight: 48 })
    // this.load.image('myGround', 'assets/myplatform.png')
}

function create() {
    // game.physics.startSystem(Phaser.Physics.ARCADE) //this line of code breaks the game
   this.add.image(400, 300, 'sky')
    platforms = this.physics.add.staticGroup();


    platforms.create(400, 568, 'ground').setScale(2).refreshBody();
    platforms.create(400, 450, 'myground'); //middle bottom platform
    // platforms.create(400, 450, 'ground');
    platforms.create(175, 300, 'myground'); //middle left platform
    platforms.create(650, 300, 'myground'); // middle right platform
    platforms.create(400, 150, 'myground'); // middle right platform


    player = this.physics.add.sprite(400, 300, 'dude');

    player.setBounce(0.2); // how much bounce the character had
    player.setCollideWorldBounds(true);

    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'turn',
        frames: [{ key: 'dude', frame: 4 }],
        frameRate: 20
    });

    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1
    });


    this.physics.add.collider(player, platforms);

    cursors = this.input.keyboard.createCursorKeys();

    

}


function update() { 
    cursors = this.input.keyboard.createCursorKeys();


    if (cursors.left.isDown) {
        player.setVelocityX(-160);

        player.anims.play('left', true);
    }
    else if (cursors.right.isDown) {
        player.setVelocityX(160);

        player.anims.play('right', true);
    }
    else {
        player.setVelocityX(0);

        player.anims.play('turn');
    }

    if (cursors.up.isDown && player.body.touching.down) {
        player.setVelocityY(-330);
    }
}