export function linearSearch(nums: number[], num: number): number {
  let index = -1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === num) {
      index = i;
    }
  }

  return index;
}
