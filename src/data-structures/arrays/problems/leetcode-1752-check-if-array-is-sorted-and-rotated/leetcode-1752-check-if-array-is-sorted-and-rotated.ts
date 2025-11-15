export function isSortedAndRotated(nums: number[]): boolean {
  let count = 0;
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    if (nums[i] > nums[(i + 1) % n]) {
      count += 1;
    }
  }

  return count <= 1;
}
