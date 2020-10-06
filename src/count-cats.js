const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
   const cats = [];
  for (let part of backyard){
   cats.push(...part.filter(cat=>cat=="^^"));
    } 
   return cats.length;
};
