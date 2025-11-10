export function smallestElement(nums: number[]): number {
  let smallest: number = nums[0];

  for (const num of nums) {
    if (num < smallest) {
      smallest = num;
    }
  }

  return smallest;
}
