// let imp = ['username', 'description', 'duration', 'date'];
// const comp = ['date', 'description', 'duration', 'usernam'];
// const res = imp.sort();
// // const nam = res.every();
// // const com = comp.every();
// console.log(JSON.stringify(res) === JSON.stringify(comp));

//let arr = [[1, 2, 3, 4], [4, 100, 5, 12], [200, 15, 2, 13], [2000, 201, 10000, 9]];
//let arr = [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]];
//let arr = [[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]];
//let arr = [[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]];
//let arr = [[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]];

// function getLargestValues(arr){
//     //let num = -Infinity;
//     result = [];
//     for(let i = 0; i < arr.length; i++) {
//         console.log('i', i);
//         let num = arr[i][0];
//         for(let j = 0; j < arr[i].length; j++) {
//             console.log('j', j);
//             if(arr[i][j] > num) {
//                 num = arr[i][j];
//             }    
//         }
//         console.log('NUM', arr[i], num);
//         result.push(num);
//     }
//     console.log(Array.isArray(result));
//     return result;
// }

// console.log(getLargestValues(arr));
// let a = [5,6,7];
// let b = [3,6,10];
// let a = [17,28,30];
// let b = [99,16,8];
// function compareTriplets(a, b) {
//     if (a.length !== 3 || b.length !== 3){
//         return 'The arrays must have three integers separated by commas each';
//     }
//     let result = [0, 0];
//     let arrLength = Math.max(a.length, b.length);
//     for(let i= 0; i < arrLength; i++) {
//             if(a[i] > b[i]) {
//                  result[0] += 1;
//             }
//             if(b[i] > a[i]) {
//                 result[1] += 1;
//             }
//     }
//     return result;
// }

// console.log(compareTriplets(a, b));

// function confirmEnding(str, target) {
//     let newString = str.split('').reverse();
//     newString[0] === target ? true : false;
//   }
  
//   console.log(confirmEnding("Bastian", "n"));

let start = new Date().getTime();
function largest(arr) {
    let first = 0;
    let last = arr.length - 1;
    let himid = Math.floor((first + last) / 2);
    let lomid = himid - 1;
    let max = arr[0];
    let counter = 0;

    while (first < lomid) {
        counter++;
        if (arr[lomid] > max) {
            max = arr[lomid];
        } else if (arr[first] > max) {
            max = arr[first];
        }
        first++;
        lomid--;
    }

    while (himid < last) {
        counter++;
        if (arr[himid] > max) {
            max = arr[himid];
        } else if (arr[last] > max) {
            max = arr[last];
        }
        himid++;
        last--;
    }
    console.log(`length of array = ${arr.length} \nnumber of iterations = ${counter}`);

    return max;
}

let end = new Date().getTime();
let time = end - start;
console.log('Execution time: ' + time);
console.log(largest([1, 2, 3, 4, 5, 6, 1, 7, 8, 9, 10, 1, 2, 300000000, 4, 5, 6, 50, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 50, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 50, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 50, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 100, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 1, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 50, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 50, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 50, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 50, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 100, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 1, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 50, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 50, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 50, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 50, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 100, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 1, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 50, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 50, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 50, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 50, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 1000, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 1, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 50, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 50, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 50, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 50, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 100, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 1, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 50, 70000, 8, 9, 10, 1, 2, 3, 4, 5, 6, 50, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 50, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 50, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 100, 7, 8, 9, 10]));