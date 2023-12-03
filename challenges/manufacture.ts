function manufacture(gifts: string[], materials: string) {
  const _materials: string[] = materials.split("");
  const results: string[] = [];

  for (const gift of gifts) {
    const word = gift.split("");
    if (!word.some((item) => !_materials.includes(item))) results.push(gift);
  }

  return results;
}

const gifts = ["tren", "oso", "pelota"];
const materials = "tronesa";

console.log(manufacture(gifts, materials)); // ["tren", "oso"]

const gifts2 = ["juego", "puzzle"];
const materials2 = "jlepuz";

console.log(manufacture(gifts2, materials2)); // ["puzzle"]

const gifts3 = ["libro", "ps5"];
const materials3 = "psli";

console.log(manufacture(gifts3, materials3)); // []
