//to run file go to cd /c/wamp64/atbashWheel then node index.js
function atbashWheel(text) {
    return text.replaceAll('a', 'H').replaceAll('b', 'I').replaceAll('c', 'J').replaceAll('d', 'K').replaceAll('e', 'L').replaceAll('f', 'M').replaceAll('g', 'N').replaceAll('h', 'O').replaceAll('i', 'P').replaceAll('j', 'Q').replaceAll('k', 'R').replaceAll('l', 'S').replaceAll('m', 'T').replaceAll('n', 'U').replaceAll('o', 'V').replaceAll('p', 'W').replaceAll('q', 'X').replaceAll('r', 'Y').replaceAll('s', 'Z').replaceAll('t', 'A').replaceAll('u', 'B').replaceAll('v', 'C').replaceAll('w', 'D').replaceAll('x', 'E').replaceAll('y', 'F').replaceAll('z', 'G')
}
//lowercase is the word uppercase is the codeword

function qwerty(text) {
    return text.replaceAll(' ','       ').replaceAll('a', '2-1 ').replaceAll('b', '3-5 ').replaceAll('c', '3-3 ').replaceAll('d', '2-3 ').replaceAll('e', '1-3 ').replaceAll('f', '2-4 ').replaceAll('g', '2-5 ').replaceAll('h', '2-6 ').replaceAll('i', '1-8 ').replaceAll('j', '2-7 ').replaceAll('k', '2-8 ').replaceAll('l', '2-9 ').replaceAll('m', '3-7 ').replaceAll('n', '3-6 ').replaceAll('o', '1-9 ').replaceAll('p', '1-10 ').replaceAll('q', '1-1 ').replaceAll('r', '1-4 ').replaceAll('s', '2-2 ').replaceAll('t', '1-5 ').replaceAll('u', '1-7 ').replaceAll('v', '3-4 ').replaceAll('w', '1-2 ').replaceAll('x', '3-2 ').replaceAll('y', '1-6 ').replaceAll('z', '3-1 ')
} 





console.log(atbashWheel('a'))
console.log(qwerty('hi how are you'))