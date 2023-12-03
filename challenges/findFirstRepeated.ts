function findFirstRepeated(gifts: number[]) {
  const store: Record<number, number[]> = {};

  gifts.forEach((gift, idx) => {
    if (!store[gift]) {
      store[gift] = [];
    }

    store[gift].push(idx);
  });

  // Check if has zero occurrences
  if (Object.values(store).length === gifts.length) return -1;

  let lowestKey: number = -1;
  let lowestIdx = 99999;
  Object.entries(store).forEach(([key, value]) => {
    if (lowestIdx > value[1]) {
      lowestIdx = value[1];
      lowestKey = parseInt(key);
    }
  });

  return lowestKey;
}

// Sample cases
const giftIds = [2, 1, 3, 5, 3, 2];
const firstRepeatedId = findFirstRepeated(giftIds);
console.log(firstRepeatedId); // 3
// Even though 2 and 3 are repeated
// 3 appears second time first

const giftIds2 = [1, 2, 3, 4];
const firstRepeatedId2 = findFirstRepeated(giftIds2);
console.log(firstRepeatedId2); // -1
// It is -1 since no number is repeated

const giftIds3 = [5, 1, 5, 1];
const firstRepeatedId3 = findFirstRepeated(giftIds3);
console.log(firstRepeatedId3); // 5
