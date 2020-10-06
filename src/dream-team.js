const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  return  members.map(member=> typeof member == 'string'? member.trim().charAt(0).toUpperCase():"").sort().join('')
};
