function multiply(...nums) {
  let total = nums.reduce((x, y) => x * y);
  console.log(total);
}

multiply(1, 2, 3, 4, 5);
