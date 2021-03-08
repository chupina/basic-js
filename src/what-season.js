const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(input) {
 let season = 'not a season';
 if (!input instanceof Date ||!input ) return 'Unable to determine the time of year!';
if(Object.prototype.toString.call(input) != "[object Date]") throw new Error();


  
if(input instanceof Date || new Date (input)){
  const mm =input.getMonth();
     switch(mm){
    case 0:
      season =  "winter";
      break;
      case 1:
        season = "winter";
      break;
      case 2:
        season = "spring";
      break;
      case 3:
        season = "spring";
      break;
      case 4:
        season = "spring";
      break;
      case 5:
        season = "summer";
      break;
      case 6:
        season = "summer";
      break;
      case 7:
        season = "summer";
      break;
      case 8:
      season = "fall";
      break;
      case 9:
        season = "fall";
      break;
      case 10:
        season = "fall";
      break;
      case 11:
        season = "winter";
      break;
      
  }
 
    
 return season;
 }
 
}