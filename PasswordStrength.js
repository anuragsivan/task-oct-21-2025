function checkPass(str){
   if(str.length < 6) {
      return "Weak"
   }else if(str.length >=6 && (/\d/.test(str))){
      return "Medium"
   }else if(str.length>= 8 && /[a-z]/.test(str) && /[A-Z]/.test(str) && /\d/.test(str)){
      return "Strong"
   }else{
      return "Weak"
   }
}
console.log(checkPass("god@Karma#111"))