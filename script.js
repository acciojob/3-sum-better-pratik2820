// function threeSum(arr, target) {
// write your code here
	function threeSumClosest(arr, target) {
  nums.sort((a, b) => a - b); // Sort the array in ascending order
  let closestSum = Infinity;

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
        closestSum = sum;
      }

      if (sum === target) {
        return sum; // Exact match found, return the sum immediately
      } else if (sum < target) {
        left++; // Increment left pointer for a larger value
      } else {
        right--; // Decrement right pointer for a smaller value
      }
    }
  }

  return closestSum;
}

  
// }

module.exports = threeSum;
