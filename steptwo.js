// let nums = [2, 4]; {
//     addToZero([]);
   
// }

function unique(string) {
    for(let i = 0; i < string.length; i++)
    for(let h = i + 1; h < string.length; h++)
        if(string[i] == string[h])
            return false;
    return true;
}

let Pangram = (string) =>
    new Set(string.toLowerCase().match(/[a-z]/g)).size ===26;

console.log(Pangram("The Quick Brown Fox Jumps Over The Lazy Dog"));

function find_longest_word(string) {
    let array = string.match(/\w[a-z]{0,}/gi);
    let result = array[0];

    for(let x = 1; x < array.length; x++) {
        if(result.length < array[x].length){
        result = array[x];
        }
    }
    return result;
}
console.log(find_longest_word('This is a string'));