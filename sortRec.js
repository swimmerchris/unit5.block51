function merge(arrayA, arrayB) {
    let merged = []

    const newArray = arrayA.concat(arrayB)
    merged = newArray.sort((a, b) => {
        return a - b
    })
    return merged;
}


// function merge(arrayA, arrayB) {
//     // pointer test
//     const merged = []
//     let pointerA = 0;
//     let pointerB = 0;
//     for (let i = 0; i < arrayA.length + arrayB.length; i++) {
//         if (pointerA > arrayA.length - 1) {
//             merged[i] = arrayB[pointerB];
//             pointerB++;
//         } else if (pointerB > arrayB.length - 1) {
//             merged[i] = arrayA[pointerA];
//             pointerA++;
//         } else {
//             if (arrayA[pointerA] > arrayB[pointerB]) {
//                 merged[i] = arrayB[pointerB];
//                 pointerB++
//             } else {
//                 merged[i] = arrayA[pointerA];
//                 pointerA++
//             }
//         }
//     }

//     return merged;
// }

function mergeArrays(array) {
    let center = array.length / 2;
    let left = array.slice(0, center)
    let right = array.slice(center)

    if (left.length > 1) {
        left = mergeArrays(left);

    }
    if (right.length > 1) {
        right = mergeArrays(right);

    }
    return merge(left, right)
}

const test = [13, 27, 5, 18, 7, 3, 9, 22, 16, 56]
console.log(mergeArrays(test))



