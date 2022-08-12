// const { Phaser } = require("./phaser.min");

import sky from '/assets/sky.png'

const game = new Phaser.Game(800, 600, Phaser.AUTO, '', {
    preload: preload,
    create: create,
    update: update
})

function preload() {
    //Here we want to preload ALL assesets the game needs such as images and art, images, sprite
    // game.load.image('sky', 'sky.png')
    this.load.image('sky', sky);
}

function create() {
    // game.physics.startSystem(Phaser.Physics.ARCADE)
    this.add.image(400, 300, 'sky')
    // game.add.sprite(0, 0, 'sky')
}

function update() { }