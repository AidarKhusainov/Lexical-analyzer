let arrKeyword = require('./arrays'),
    fs = require('fs'),
    fileContent = fs.readFileSync('len_cube.js', 'utf8').split("\n");

if(fileContent[0] === '' && fileContent.length === 1) {
    console.log("Файл пустой");
    return;
}

let identifier              = new Map(),
    keyword                 = new Map(arrKeyword),
    separator               = new Map(),
    constant                = new Map(),
    alphabet                = [],                   // Array of the alphabet A-Z,a-z
    next                    = '',                   // The string we are analyzing
    current                 = '',                   // Current word or letter
    output                  = '',
    constantBetweenQuotes   = '',
    isConstantBetweenQuotes = false,
    counterKeyword          = 0,
    counterSeparator        = 0,
    counterIdentifier       = 0,
    counterConstants        = 0;
    
[...Array(26).keys()].map(i => alphabet.push(String.fromCharCode(i + 97)));
[...Array(26).keys()].map(i => alphabet.push(String.fromCharCode(i + 65)));

for (let index in fileContent) {
    next = fileContent[index].toString();

    for (let i = 0; i < next.length; i++) {
        current += next[i];

        if((!isAlphabet(next[i]) || !isAlphabet(next[i + 1])) && current !== "") {

            if(keyword.has(current) && !isConstantBetweenQuotes) {
                
                addKeyword(current);

            } else if(next[i-1] === '(' && current[0] === '"') {  // Checking constants between quotes
                
                isConstantBetweenQuotes = true;
                addSeparator(current);

            } else if(isConstantBetweenQuotes && next[i+1] === '"') {
                
                isConstantBetweenQuotes = false;
                constantBetweenQuotes += `${current}`;
                addConstant(constantBetweenQuotes);
                constantBetweenQuotes = '';

            } else if(isConstantBetweenQuotes) {

                constantBetweenQuotes += `${current}`;

            } else if(isDigital(current)) {

                addConstant(current);

            } else if(current.trim().length === 1 && !isAlphabet(current[0])) {    // Separators

                addSeparator(current);

            } else if (current.trim().length) {

                addIdentifier(current);
            }
            current = '';
        }
    }
    output += '\n';
}

console.log('Таблица ключевых слов (10)')
keyword.forEach(outputTable);

console.log('\nТаблица разделителей (20)')
separator.forEach(outputTable);

console.log('\nТаблица идентификаторов (30)')
identifier.forEach(outputTable);

console.log('\nТаблица констант (40)')
constant.forEach(outputTable);

console.log('\nДескрипторный код\n', output);

function addKeyword(current) {
    if(!keyword.has(current)) {
        keyword.set(current, counterKeyword);
        counterKeyword++;
    }
    output += `(10, ${keyword.get(current)})`;
}

function addSeparator(current) {
    if(!separator.has(current)) {
        separator.set(current, counterSeparator);
        counterSeparator++;
    }
    output += `(20, ${separator.get(current)})`;
}

function addIdentifier(current) {
    if(!identifier.has(current)) {
        identifier.set(current, counterIdentifier);
        counterIdentifier++;
    }
    output += `(30, ${identifier.get(current)})`;
}

function addConstant(current) {
    if(!constant.has(current)) {
        constant.set(current, counterConstants);
        counterConstants++;
    }
    output += `(40, ${constant.get(current)})`;
}

function isAlphabet(string) {
    return string.length === 1 ? alphabet.includes(string[0]) : console.error('String is too long');
}

function isDigital(string) {
    return !isNaN(parseInt(string));
}

function outputTable(value, key) {
    console.log(`${value}\t${key}`);
}

