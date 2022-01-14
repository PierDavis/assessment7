const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}

function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}

function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}

const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);

// How long does it take to double every number in a given 
// array? 


// // Try it with first function
// perf.start();                     // Starts timer
// doublerAppend(extraLargeArray);
// let resultsAppend = perf.stop();  // Stops timer and save time results

let resultsTable = []

function measurePerformance(dataSet, dataSetName) {
    perf.start();                     // Starts timer
    doublerAppend(dataSet);
    let resultsAppend = perf.stop();  // Stops timer and save time results

// // Try it with second function
// perf.start();
// doublerInsert(extraLargeArray);
// let resultsInsert = perf.stop();

    perf.start();
    doublerInsert(dataSet);
    let resultsInsert = perf.stop();

    resultsTable.push({
        [dataSetName]: {'resultsInsert': resultsInsert.preciseWords, 
                'resultsAppend': resultsAppend.preciseWords}})

}

measurePerformance(tinyArray, 'tinyArray');
measurePerformance(smallArray, 'smallArray');
measurePerformance(mediumArray, 'mediumArray');
measurePerformance(largeArray, 'largeArray');
measurePerformance(extraLargeArray, 'extraLargeArray');


console.log('resultsTable', resultsTable)


console.log('Results for the extraLargeArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);