let nums = [2, 7, 11, 15];
var twoSum = function (nums, target) {
  var memo = [...nums];

  for (let i = 0; i < nums.length; i++) {
    var remainder = target - nums[i];
    if (memo.includes(remainder) && memo.indexOf(remainder) != i) {
      return [i, memo.indexOf(remainder)];
    }
  }
  throw "No two sum solution";
};
console.log(twoSum(nums, 9));
