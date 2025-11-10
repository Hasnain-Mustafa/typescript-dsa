// The extra space solution

// export function rotateArrayByK(nums: number[], k: number): number[] {
//   const n = nums.length;
//   const temp: number[] = [];

//   for (let i = 0; i < nums.length; i++) {
//     temp[(i + k) % n] = nums[i];
//   }

//   for (let i = 0; i < nums.length; i++) {
//     nums[i] = temp[i];
//   }

//   return nums;
// }

// Constant space solution

export function rotateArrayByK(nums: number[], k: number): number[] {
  const n = nums.length;

  function reverse(left: number, right: number) {
    let l = left;
    let r = right;
    let temp = 0;

    while (l < r) {
      temp = nums[l];
      nums[l] = nums[r];
      nums[r] = temp;

      l += 1;
      r -= 1;
    }
  }

  reverse(0, nums.length - 1);
  reverse(0, (k % n) - 1);
  reverse(k % n, nums.length - 1);

  return nums;
}
