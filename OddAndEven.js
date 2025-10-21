function EvenOdd(arr){
    Even =[]
    Odd =[]
    arr.forEach((item)=>{
        if((item % 2) ===0){
            Even.push(item)
        }else{
            Odd.push(item)
        }
    })
    return [...Even,...Odd]
}
arr = [1,2,3,4,5,6,7,8,9]
console.log(EvenOdd(arr))
