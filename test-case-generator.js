var random = function () {
  let result = [];
  var length = Math.floor(Math.random() * 999999);
  for (let i = 0; i < length; i++) {
    let ranNum =
      Math.ceil(Math.random() * 999999) * (Math.round(Math.random()) ? 1 : -1);
    result[i] = ranNum;
  }
  return result;
};
console.log(random());
