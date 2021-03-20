let nums = [-1, 0, 1, 2, -1, -4];
var threeSum = function (nums) {
  let finalRes = [];
  //   let obj = {};

  for (let i = 0; i < nums.length; i++) {
    j = 1;
    k = 2;
    while (j <= nums.length && k <= nums.length) {
      if (nums[i] + nums[i + j] + nums[i + k] == 0) {
        // if (
        //   obj[o + nums[i]][0] != undefined &&
        //   obj[o + nums[i + j]][1] != undefined &&
        //   obj[o + nums[i + k]][2] != undefined &&
        //   obj[o + nums[i]][0] +
        //     obj[o + nums[i + j]][1] +
        //     obj[o + nums[i + k]][2] ==
        //     0
        // )
        //   continue;
        // else {
        //   obj[o + nums[i]][0] = true;
        //   obj[o + nums[i + j]][1] = true;
        //   obj[o + nums[i + k]][2] = true;
        finalRes.push([nums[i], nums[i + j], nums[i + k]]);
        // }
      }
      j += 1;
      k += 1;
    }
  }
  return finalRes;
};
console.log(threeSum(nums));
