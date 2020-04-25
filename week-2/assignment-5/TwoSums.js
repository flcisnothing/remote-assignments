// Assignment 5: Algorithm Practice (Advanced Optional)

// method 1:
// function twoSum(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
// }

// method 2:
function twoSum(nums, target) {
  const indexList = {};
  for (let i = 0; i < nums.length; i++) {
    if (indexList[String(nums[i])] || indexList[String(nums[i])] === 0) {
      // for the case that the number appears twice, for example, twoSum([3, 3], 6)
      indexList[String(nums[i])] = [indexList[String(nums[i])], i];
    } else {
      indexList[String(nums[i])] = i;
    }
  }
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    const complementIndex = indexList[String(complement)];
    if (complement === nums[i]) {
      if (Array.isArray(complementIndex)) {
        // The number has appeared twice as two different elements
        return complementIndex;
      } else {
        // The same element cannot be used twice
        continue;
      }
    }
    if (complementIndex || complementIndex === 0) {
      return [i, complementIndex];
    }
  }
}

console.log(twoSum([2, 7, 4, 3], 9));
console.log(twoSum([1, 3, 4, 9, -5, 11], 6));
console.log(twoSum([3, 3], 6));
console.log(twoSum([1, 3, 4, 2], 6));
