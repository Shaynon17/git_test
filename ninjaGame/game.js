// const { Phaser } = require("./phaser.min");

const game = new Phaser.Game(800, 600, Phaser.AUTO, '', {
    preload: preload,
    creat: create,
    update: update
})

function preload () {
    //Here we want to preload ALL assesets the game needs such as images and art, images, sprite
}
function create () {}
function update () {}