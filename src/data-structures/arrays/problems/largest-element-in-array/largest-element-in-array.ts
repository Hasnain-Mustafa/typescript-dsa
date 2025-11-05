export function largestElement(nums: number[]): number {
  let largest: number = nums[0];

  for (const num of nums) {
    if (num > largest) {
      largest = num;
    }
  }

  return largest;
}
