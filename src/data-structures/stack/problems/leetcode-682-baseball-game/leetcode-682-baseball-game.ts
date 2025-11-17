export function calculatePoints(operations: string[]): number {
  const scores: number[] = [];
  let totalScore = 0;

  for (const operation of operations) {
    if (!Number.isNaN(Number(operation))) {
      const score = Number(operation);
      totalScore += score;
      scores.push(score);
      continue;
    }

    switch (operation) {
      case "+": {
        if (scores.length >= 2) {
          const lastTwoSum = scores.at(-1)! + scores.at(-2)!;
          totalScore += lastTwoSum;
          scores.push(lastTwoSum);
        }
        break;
      }
      case "C": {
        if (scores.length > 0) {
          const removedScore = scores.pop()!;
          totalScore -= removedScore;
        }
        break;
      }
      case "D":
        {
          const doubleScore = scores.at(-1)! * 2;
          totalScore += doubleScore;
          scores.push(doubleScore);
        }
        break;
      default:
        break;
    }
  }

  return totalScore;
}
