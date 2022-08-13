//import the robotjs library
//i need to make sure im in the instagrambot directory C:\wamp64\www\InstagramBot> then run node index.js for this to run
// need to be in this directiroy in the terminal /c/wamp64/www to commit

let robot = require('robotjs');

function main() {
    // console.log('starting... ');
    robot.moveMouse(710, 746);
    robot.mouseClick();
    sleep(2000);
    robot.moveMouse(557, 50);
    robot.mouseClick();
    robot.typeString('instagram.com');
    robot.keyTap('enter');
    robot.moveMouse(637, 100);
    sleep(2000);
    robot.mouseClick();
    sleep(3000);
    robot.typeString('#witchesofinstagram'); /* this is where the hashtag or SEO keyword goes */
    sleep(2000);
    robot.moveMouse(637, 175);
    robot.mouseClick();
    sleep(4000)
    robot.moveMouse(1355, 718)
    robot.mouseClick();
    robot.mouseClick();
    robot.mouseClick();
    robot.mouseClick();
    robot.mouseClick();
    robot.mouseClick();
    robot.mouseClick();
    robot.mouseClick();
    robot.mouseClick();
    robot.mouseClick();
    robot.mouseClick();
    robot.mouseClick();
    robot.mouseClick();
    robot.mouseClick();
    robot.mouseClick();
    sleep(2000);
    robot.moveMouse(350, 300);
    sleep(2000)
    robot.mouseClick();
    sleep(2000) //this line should get to the first picture
    robot.mouseClick();
    robot.mouseClick();
    sleep(2000) //this line will get to teh first picture and like it

    let number_of_loops = 0;
    while (number_of_loops < 50) /* change the number here for how many times to loop*/ {
    robot.keyTap('right')
    sleep(2000)
    robot.mouseClick();
    robot.mouseClick();
    sleep(2000)
    number_of_loops = number_of_loops + 1
}
//     console.log('done');
}


function sleep(ms) {
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms)
}

main();