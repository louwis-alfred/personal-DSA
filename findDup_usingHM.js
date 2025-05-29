/* 
Question: You are given an array of numbers. You need to return the first number that appears more than once.
*/

const nums = [4, 5, 6, 3, 2, 4, 7];

operation = (nums) => {
  duplicate_num = {}
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in duplicate_num) {
      return nums[i];
    }
    duplicate_num[nums[i]] = true;
  }

  return null;
}

const result = operation(nums);
console.log(`First duplicate: ${result}`)

