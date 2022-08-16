
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
var stars;
var bombs;
var platforms;
var cursors;
var score = 0;
var gameOver = false;
var scoreText;

var game = new Phaser.Game(config);

function preload() {
    this.load.image('sky', 'assets/newSky.png')
    this.load.image('ground', 'assets/platform.png')
    this.load.image('myground', 'assets/myplatform.png')
    this.load.image('star', 'assets/star.png');
    this.load.image('bomb', 'assets/bomb.png');
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
    platforms.create(625, 300, 'myground'); // middle right platform
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



    cursors = this.input.keyboard.createCursorKeys();

    stars = this.physics.add.group({
        key: 'star',
        repeat: 11,
        setXY: { x: 12, y: 0, stepX: 70 }
    });

    stars.children.iterate(function (child) {

        child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));

    });

    bombs = this.physics.add.group();

    this.physics.add.collider(player, platforms);
    this.physics.add.collider(stars, platforms);
    this.physics.add.collider(bombs, platforms);
    this.physics.add.overlap(player, stars, collectStar, null, this);
    this.physics.add.collider(player, bombs, hitBomb, null, this);

    scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });
//     fizzTest = this.add.text(40, 40, fizzBuzz(), { fontSize: '32px', fill: '#000' });
//    function word()  {
//     return 'test'
//    }
//     function fizzBuzz() {
//         if (scoreText === 3) {
//             return scoreText.setText('Score: ' + 'fizz')
//         } else {
//             return "test"
//         }
//     }
}


function update() { 
    cursors = this.input.keyboard.createCursorKeys();


    if (gameOver) {
        return;
    }

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

function collectStar(player, star) {
    star.disableBody(true, true);
    score += 1;
    if (score === 3) {
        scoreText.setText('Score: ' + 'fizz');
    } else {
        scoreText.setText('Score: ' + score);
    }
    if (stars.countActive(true) === 0) {
        //  A new batch of stars to collect
        stars.children.iterate(function (child) {

            child.enableBody(true, child.x, 0, true, true);

        });

        var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);

        var bomb = bombs.create(x, 16, 'bomb');
        bomb.setBounce(1);
        bomb.setCollideWorldBounds(true);
        bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);

    }
}

function hitBomb(player, bomb) {
    this.physics.pause();

    player.setTint(0xff0000);

    player.anims.play('turn');

    gameOver = true;
}

function isDivisibleBy(score, num) {
    return (score % num === 0)
}

