const CustomError = require("../extensions/custom-error");

module.exports = function transform( arr ) {
  if (!Array.isArray(arr)) {
    throw new CustomError("Error");
  }

  let a = [];
  for (let i = 0; i < arr.length; i++) {
      if(arr[i]=== `--discard-next`){
        if (arr[i + 2] === '--discard-prev' || arr[i + 2] === '--double-prev')
          i++;
        if (i < arr.length - 1) i++;
      }
      else if(arr[i]=== `--discard-prev`){
        if (i > 0)
        a.pop();
      }
      else if(arr[i]=== `--double-next`){
        if(i<arr.length-1)
        a.push(arr[i+1]);
      }
      else if(arr[i]=== `--double-prev`){
        if (i > 0)
        a.push(arr[i-1]);
      }
      else{
        a.push(arr[i]);
      }
  
  }
  return a;
};
