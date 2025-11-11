export function moveZeroes(nums: number[]): number[] {
  let k = 0;
  let temp = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      temp = nums[k];
      nums[k] = nums[i];
      nums[i] = temp;
      k += 1;
    }
  }

  return nums;
}
