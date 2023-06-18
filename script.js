function threeSum(arr, target) {
// write your code here
	let closestSum = Infinity;
  let minDiff = Infinity;
	
	for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        const sum = nums[i] + nums[j] + nums[k];
        const diff = Math.abs(sum - target);

        if (diff < minDiff) {
          minDiff = diff;
          closestSum = sum;
        }
      }
    }
  }

  return closestSum;
}  
}

module.exports = threeSum;
