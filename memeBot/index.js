//import the robotjs library
//i need to make sure im in the instagrambot directory C:\wamp64\www\InstagramBot> then run node index.js for this to run
// need to be in this directiroy in the terminal /c/wamp64/www to commit
//make a follower bot

let robot = require('robotjs');

function main() {
    // console.log('starting... ');
    robot.moveMouse(710, 746); //change to the internet icon for the meme bot
    robot.mouseClick();
    sleep(2000);
    robot.moveMouse(557, 50);
    robot.mouseClick();
    robot.typeString('instagram.com');
    robot.keyTap('enter');
    robot.moveMouseSmooth(637, 100);
    sleep(2000);
    robot.mouseClick();
    sleep(3000);
    robot.typeString('#witchesofinstagram'); /* this is where the hashtag or SEO keyword goes */ // #witchesofinstagram //change to a meme tag
    sleep(2000);
    robot.moveMouseSmooth(637, 175);
    robot.mouseClick();
    sleep(4000)
    robot.moveMouseSmooth(1355, 718)
    let count = 0
    while (count < 15 ) {
        robot.mouseClick();
        count++
    }
    sleep(2000);
    robot.moveMouseSmooth(350, 300);
    sleep(2000)
    robot.mouseClick();
    sleep(2000) //this line should get to the first picture
    robot.mouseClick();
    robot.mouseClick();
    sleep(2000) //this line will get to teh first picture and like it



    let number_of_loops = 0;
    while (number_of_loops < randomNumOfLikes(60, 70)) /* change the numbers here for how many times to loop*/ {
    robot.keyTap('right')
    sleep(randomSleepTime(2000, 8000)) //The bot will be on each picture for a random amount of time to be less detectable
    robot.mouseClick();
    robot.mouseClick();
    sleep(2000)
    number_of_loops = number_of_loops + 1
}
    console.log('done');
}

//This will generate a random number so the bot likes a random amount of pictures each time to avoid patterns
function randomNumOfLikes (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function sleep(ms) {
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms)
}

// This will generate a random amount of time for the mouse to sleep 
function randomSleepTime(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
} 

main();
