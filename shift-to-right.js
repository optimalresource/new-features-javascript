function shiftToRight(nums, k) {
  if (k > nums.length) {
    throw "You can't rotate more than the length of the given array";
  }
  const newArr = [];
  let concatArr = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums.length - i > k) {
      newArr[i] = nums[i];
    }

    if (nums.length - i <= k) {
      concatArr.push(nums[i]);
    }
  }

  for (let i = concatArr.length - 1; i >= 0; i--) {
    newArr.unshift(concatArr[i]);
  }

  return newArr;
}

console.log(shiftToRight([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 9));
