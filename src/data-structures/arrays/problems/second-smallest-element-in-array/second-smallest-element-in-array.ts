export function secondSmallest(nums: number[]): number {
  let smallest = nums[0];
  let second_smallest = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < smallest) {
      second_smallest = smallest;
      smallest = nums[i];
    }
  }

  return second_smallest;
}
