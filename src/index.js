const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    const SYMBAL_TABLE = {
        '10': '.',
        '11': '-'
    };
    let res = '';
    expr.split('**********').map(element => {
  
        for (let index = 0; index < element.length; index = index + 10) {
            
            let encodedLetter = element.substring(index, index + 10);
            let decodedStr = '';
            
            for (let index = 0; index < encodedLetter.length; index = index + 2) {
                
                let substrSymbal = encodedLetter.substring(index, index + 2);
                
                if (substrSymbal !== "00") {
                    decodedStr += SYMBAL_TABLE[substrSymbal];                 
                };

            };

            res += MORSE_TABLE[decodedStr];

        };

        res += ' ';
          
    });

    return res.trim();

}

module.exports = {
    decode
}