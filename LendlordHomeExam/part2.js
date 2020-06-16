/* =============== Question 1 =============== */

// 1.1
const sentence = 'Make America Great Again';
const word = 'Great';
sentence.includes(word);


// 1.2
const sentence = 'Make America Great Again';
const words = sentence.split(' ');
words.find(e => e == 'Great')


// 1.3
var str = "Make America Great Again"; 
var res = str.match(/Great/);


/* =============== Question 2 =============== */

const str = 'Donald John Trump';
const newStr = str.substring(7, 12);


/* =============== Question 3 =============== */

const sentence = 'Donald John Trump';
const words = sentence.split(' ');
let index = words.indexOf('John');
words[index] = 'J.';
words.unshift('President');
words.join(' ');

/* =============== Question 4 =============== */

function regexFind(str){
    return str.match(/\d*[.]?\d+/g)
}

function regexFind2(str){
    return str.match(/[A-Z][A-Z]\d{6}/g)
}




