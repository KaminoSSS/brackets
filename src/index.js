module.exports = function check(str, bracketsConfig) {
  const openBr = [];
  for (i = 0; i < bracketsConfig.length; i++) {
    openBr.push(bracketsConfig[i][0]);
  }
  const closeBr = [];
  for (i = 0; i < bracketsConfig.length; i++) {
    closeBr.push(bracketsConfig[i][1]);
  }
  const bracketsPair = {};
  for (i = 0; i < bracketsConfig.length; i++) {
    let key = bracketsConfig[i][1];
    bracketsPair[key] = bracketsConfig[i][0];
  }
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    const currentEl = str[i];
    if (openBr.includes(currentEl)) {
      if (
        closeBr.includes(currentEl) &&
        stack[stack.length - 1] === currentEl
      ) {
        stack.pop();
      } else {
        stack.push(currentEl);
      }
    } else {
      if (stack.length === 0) {
        return false;
        console.log("if (stack.length === 0)");
      }
      let topElement = stack[stack.length - 1];
      if (bracketsPair[currentEl] === topElement) {
        stack.pop();
      } else {
        return false;
        console.log("topElement");
      }
    }
  }
  return stack.length === 0;
};
