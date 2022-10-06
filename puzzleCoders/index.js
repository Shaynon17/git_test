//to run file go to cd /c/wamp64/atbashWheel then node index.js
function atbashWheel(text) {
    return text.replaceAll(' ', '  ').replaceAll('a', 'H').replaceAll('b', 'I').replaceAll('c', 'J').replaceAll('d', 'K').replaceAll('e', 'L').replaceAll('f', 'M').replaceAll('g', 'N').replaceAll('h', 'O').replaceAll('i', 'P').replaceAll('j', 'Q').replaceAll('k', 'R').replaceAll('l', 'S').replaceAll('m', 'T').replaceAll('n', 'U').replaceAll('o', 'V').replaceAll('p', 'W').replaceAll('q', 'X').replaceAll('r', 'Y').replaceAll('s', 'Z').replaceAll('t', 'A').replaceAll('u', 'B').replaceAll('v', 'C').replaceAll('w', 'D').replaceAll('x', 'E').replaceAll('y', 'F').replaceAll('z', 'G')
}
//lowercase is the word uppercase is the codeword


//must be in lowercase for it to work
function qwerty(text) {
    return text.replaceAll(' ','       ').replaceAll('a', '2-1  ').replaceAll('b', '3-5  ').replaceAll('c', '3-3  ').replaceAll('d', '2-3  ').replaceAll('e', '1-3  ').replaceAll('f', '2-4  ').replaceAll('g', '2-5  ').replaceAll('h', '2-6  ').replaceAll('i', '1-8  ').replaceAll('j', '2-7  ').replaceAll('k', '2-8  ').replaceAll('l', '2-9  ').replaceAll('m', '3-7  ').replaceAll('n', '3-6  ').replaceAll('o', '1-9  ').replaceAll('p', '1-10  ').replaceAll('q', '1-1  ').replaceAll('r', '1-4  ').replaceAll('s', '2-2  ').replaceAll('t', '1-5  ').replaceAll('u', '1-7  ').replaceAll('v', '3-4  ').replaceAll('w', '1-2  ').replaceAll('x', '3-2  ').replaceAll('y', '1-6  ').replaceAll('z', '3-1  ')
} 

function text(text) {
    return text.replaceAll(' ', '       ').replaceAll('a', '2  ').replaceAll('b', '2-2  ').replaceAll('c', '2-2-2  ').replaceAll('d', '3  ').replaceAll('e', '3-3  ').replaceAll('f', '3-3-3  ').replaceAll('g', '4  ').replaceAll('h', '4-4  ').replaceAll('i', '4-4-4  ').replaceAll('j', '5  ').replaceAll('k', '5-5  ').replaceAll('l', '5-5-5  ').replaceAll('m', '6  ').replaceAll('n', '6-6  ').replaceAll('o', '6-6-6  ').replaceAll('p', '7  ').replaceAll('q', '7-7  ').replaceAll('r', '7-7-7  ').replaceAll('s', '7-7-7-7  ').replaceAll('t', '8  ').replaceAll('u', '8-8  ').replaceAll('v', '8-8-8  ').replaceAll('w', '9  ').replaceAll('x', '9-9  ').replaceAll('y', '9-9-9  ').replaceAll('z', '9-9-9-9  ')
} 

function morseCode(text) {
    return text.replaceAll(' ', '       ').replaceAll('a', '*-  ').replaceAll('b', '-***  ').replaceAll('c', '-*-*  ').replaceAll('d', '-**  ').replaceAll('e', '*  ').replaceAll('f', '**-*  ').replaceAll('g', '--*  ').replaceAll('h', '****  ').replaceAll('i', '**  ').replaceAll('j', '*---  ').replaceAll('k', '-*-  ').replaceAll('l', '*-**  ').replaceAll('m', '--  ').replaceAll('n', '-*  ').replaceAll('o', '---  ').replaceAll('p', '*--*  ').replaceAll('q', '--*-  ').replaceAll('r', '*-*  ').replaceAll('s', '***  ').replaceAll('t', '-  ').replaceAll('u', '**-  ').replaceAll('v', '***-  ').replaceAll('w', '*--  ').replaceAll('x', '-**-  ').replaceAll('y', '-*--  ').replaceAll('z', '--**  ')
} 

//need to do a morse code one


// console.log(atbashWheel('inside the garden'))
// console.log(qwerty('behind the couch'))
// console.log(text('under the kitchen table'))
console.log(morseCode('hello how are you'))