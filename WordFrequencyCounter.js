// count =0
// function WordCount(string){
//     result = {}
//     copy = string.trim().split(/\s+/)
//             copy.forEach((item)=>{
//                 if (item == item){
//                     count++
//                 }
//             })
//     return count
// }
// console.log(WordCount('Hello there How Are You Doing'))




function countWords(str) {
    let count = {};
    let sentence = str.toLowerCase();
    // console.log("Sentence In LowerCase:",sentence)

    let words = sentence.split(/\s+/);
    // console.log("Sentence split into words",words)
    words.forEach(word => {
        word = word.replace(/[^\w\s]|_/g, "");
        // console.log("Removed Punchuations:",word)
        if (count[word]) {
            count[word]++;
        } else {
            count[word] = 1;
        }
    });
    
    return wordCount;
}
str = "Hello Hello WOrld World"
console.log(countWords(str)) 
// console.log(str)
