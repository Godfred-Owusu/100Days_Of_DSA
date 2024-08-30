var twoSum = function (nums, target) {
  let objectArr = {};
  for (let i = 0; i < nums.length; i++) {
    // difference between the current value and the target
    const diff = target - nums[i];
    // check if the difference(key) is in the object
    if (diff in objectArr) {
      // return the value of the of the that key
      return [objectArr[diff], i];
      // else push it into the object
    } else objectArr[nums[i]] = i;
  }
};

// https://leetcode.com/problems/two-sum/
