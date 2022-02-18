function checkObj(obj, checkProp) {
  if (obj.hasOwnProperty(checkProp)) {
    console.log(obj, checkProp)
    return obj[checkProp];
  } else {
    return "Not Found";
  }
  // Only change code above this line
}