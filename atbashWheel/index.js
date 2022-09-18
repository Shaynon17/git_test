function atbashWheel(text) {
    return text.replaceAll(' ', '_').replaceAll('a', 'H').replaceAll('b', 'I').replaceAll('c', 'J').replaceAll('d', 'K').replaceAll('e', 'L').replaceAll('f', 'M').replaceAll('g', 'N').replaceAll('h', 'O').replaceAll('i', 'P').replaceAll('j', 'Q').replaceAll('k', 'R').replaceAll('l', 'S').replaceAll('m', 'T').replaceAll('n', 'U').replaceAll('o', 'V').replaceAll('p', 'W').replaceAll('q', 'X').replaceAll('r', 'Y').replaceAll('s', 'Z').replaceAll('t', 'A').replaceAll('u', 'B').replaceAll('v', 'C').replaceAll('w', 'D').replaceAll('x', 'E').replaceAll('y', 'F').replaceAll('z', 'G')
}
//lowercase is the word uppercase is the codeword

//to run file go to cd /c/wamp64/atbashWheel then node index.js


console.log(atbashWheel('hi hi'))