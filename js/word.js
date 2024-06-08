const word = 'SaMsung'
let convertedWord = ''
for(let i = 0; i <word.length; i+=1){
    console.log(word[i]);
    if (word[i] === word[i].toUpperCase()){
        convertedWord += word[i].toLowerCase();
    } else{
        convertedWord += word[i].toLocaleUpperCase()
    }
}

console.log(convertedWord);