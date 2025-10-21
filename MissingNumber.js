function missingNumber(arr){
    sum = 0
    let length = arr.length+1
    // console.log(length)
    let total = (length*(length+1)/2)
    // console.log(total)
    for(let i=0; i<arr.length; i++){
        sum += arr[i]
        // console.log(sum)
    }
    let missingNum = total-sum
    return missingNum
        // 1,2,3,4,6
}
arr = [1,2,3,4,6,7,8]
console.log(missingNumber(arr))







