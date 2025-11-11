//Brute appraoch O(n * n)

// export function missingNumber(nums: number[]): number {
//   for (let i = 0; i <= nums.length; i++) {
//     let flag = 0;
//     for (let j = 0; j < nums.length; j++) {
//       if (nums[j] === i) {
//         flag = 1;
//         break;
//       }
//     }
//     if (flag === 0) {
//       return i;
//     }
//   }
//   return -1;
// }

//Better approach using Set O(n + n) Time + O(n) Space

// export function missingNumber(nums: number[]): number {
//   const set = new Set(nums);

//   for (let i = 0; i <= nums.length; i++) {
//     if (!set.has(i)) {
//       return i;
//     }
//   }

//   return -1;
// }

//Optimal Approach (Sum and Total Difference) O(n) Time with O(1) Space

// export function missingNumber(nums: number[]): number {
//   let sum = 0;
//   const n = nums.length;
//   const total = (n * (n + 1)) / 2;

//   for (let i = 0; i < nums.length; i++) {
//     sum = sum + nums[i];
//   }

//   return total - sum;
// }

//Optimal Approach (XOR) O(n) Time with O(1) Space

export function missingNumber(nums: number[]): number {
  let xor = nums.length;

  for (let i = 0; i < nums.length; i++) {
    xor = xor ^ i ^ nums[i];
  }

  return xor;
}
