export function getConcatenation(nums: number[]): number[] {
  const n: number = nums.length;
  const result: number[] = new Array(2 * nums.length);

  for (let i = 0; i < n; i++) {
    result[i] = nums[i];
    result[i + n] = nums[i];
  }

  return result;
}
