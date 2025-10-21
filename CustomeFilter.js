function myFilter(filter) {
  const result = [];

  for (let i =0; i< filter.length; i++) {
    if (filter[i] > 10) {
      result.push(filter[i]);
    }
  }
  return result;
}
const number =[5,8,6,2,10,78,25,15,20,30]
const NumberFilter= myFilter(number)


console.log(NumberFilter)