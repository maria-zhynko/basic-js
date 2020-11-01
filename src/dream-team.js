const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam( members ) {
  if (!Array.isArray(members)) {
    return false;
  }

  let name=[];

  for(let i=0;i<members.length;i++){
    if(typeof members[i]==='string'){
      name.push(members[i].trim().substring(0, 1).toUpperCase());
    }
  }
  name=name.sort();
  name=name.join('');
  return name;
};
