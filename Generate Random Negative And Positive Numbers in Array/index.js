var random = function () {
  let result = [];
  var length = Math.floor(Math.random() * 9999);
  for (let i = 0; i < length; i++) {
    let ranNum =
      Math.ceil(Math.random() * 9999) * (Math.round(Math.random()) ? 1 : -1);
    result[i] = ranNum;
  }
  return result;
};
var res = random();
console.log(res);

// get and set the inner text of the paragraph with an ID of content
setTimeout(() => {
  document.getElementById("content").innerHTML = JSON.stringify(res);
}, 2000);
