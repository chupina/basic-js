const CustomError = require("../extensions/custom-error");

module.exports = function transform(array) {
  if(!Array.isArray(array))throw new Error;
  
  const arr = [...array];
  const resArr = [];
  for (let i=0; i<arr.length; i++){
       switch(arr[i]){
      case "--double-next":
       if(!(i == arr.length-1)){
         resArr.push(arr[i+1]);
      }
      break;

      case '--double-prev':
        if(!i==0){
          let prevEl = resArr[resArr.length-1]
          resArr.push(prevEl); 
         } 
      break;
      case "--discard-next":
        if(!(i == arr.length-1)){
          resArr.push('deleted');
          i++;
        } 
      break;
      case "--discard-prev":
        if(!i==0){
          resArr.pop(); 
         }    
      break;
      default:
        resArr.push(arr[i]);
    }
  }
 return resArr.filter(el=> el!== "deleted");
};
