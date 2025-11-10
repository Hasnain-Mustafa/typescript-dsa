export function secondLargest(nums: number[]): number {
  let largest = nums[0];
  let second_largest = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > largest) {
      second_largest = largest;
      largest = nums[i];
    }
  }

  return second_largest;
}
