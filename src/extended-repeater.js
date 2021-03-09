const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if ( str === undefined) return "";
  let addStr = options.addition;
  let addRep = options.additionRepeatTimes;
  let addSep = options.additionSeparator;

  let strRep = options.repeatTimes;
  let sep = options.separator;

  let makeAddition = function (str, repeat, separator = "|") {
      if( str === undefined)return "";   
      let string = str;
       
    if (repeat) {
      for (let i = 1; i < repeat; i++) {
        string += separator + str;
       
      }
     
    } 
    return string;
  };
 
  let partAddition = makeAddition(addStr, addRep, addSep);
  let result = function(str1, str2 = "", repeat, separator = '+'){
        let strConcat = str1 + str2;
        let string = strConcat ;
        if(repeat){
        for(i=1;i<repeat;i++){
        string += separator + strConcat;
        }
        
        }
        return string
  }

  return result(str, partAddition, strRep, sep);
};
