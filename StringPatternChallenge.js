// function patternChalleenge(limit){
    // let num = 65
// for (let i = 0; i < limit; i++) {
//   console.log(limit.slice(0, i + 1));
// }
// for (let i = 1; i < limit.length; i++) {
//   console.log(limit.slice(i));
// }
// }
// console.log(patternChalleenge(6))



// console.log(String.fromCharCode(65))

function printPyramid(limit) {
    let num = 65

    for (let i = 0; i < limit; i++) {
        let Pyramid = ''
        for (let j = 0; j <= i; j++) {
            Pyramid += String.fromCharCode(num + i);
        }
        console.log(Pyramid)
    }
}

printPyramid(90)

