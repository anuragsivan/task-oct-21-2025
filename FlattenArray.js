const flattenArray = (arr)=>{
    const flatten=[]
    arr.forEach((item)=>{
        if(Array.isArray(item)){
            flatten.push(...flattenArray(item))
        }else{
            flatten.push(item)
        }
    })
    return flatten
}
arr = [1,2,3,[4,[5,6,[7,8]]],9]

console.log(flattenArray(arr))



