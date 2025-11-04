export function shuffle(nums: number[], n: number): number[] {
  const j = n;
  let i = 0;
  const result: number[] = [];

  while (i < j) {
    result.push(nums[i]);
    result.push(nums[i + j]);

    i += 1;
  }
  return result;
}
