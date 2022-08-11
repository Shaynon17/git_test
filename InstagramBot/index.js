//import the robotjs library
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
    robot.typeString('balloon animals');
    sleep(2000);
    robot.moveMouse(637, 175);
    robot.mouseClick();
    sleep(4000)
    robot.moveMouse(350, 300);
    robot.mouseClick();
    sleep(2000)
    // robot.mouseClick([left], [true])
    robot.mouseClick()
    robot.mouseClick()
    sleep(2000)
    //above is to get to the first picture, loop below

let number_of_loops = 0;
while (number_of_loops < 10) {
    robot.moveMouse(1320, 385)
    robot.mouseClick();
    sleep(2000)
    robot.moveMouse(300, 350)
    sleep(2000)
    robot.mouseClick();
    robot.mouseClick();
    sleep(2000)
    number_of_loops = number_of_loops + 1
}
    console.log('done');
}


function sleep(ms) {
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms)
}

main();