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