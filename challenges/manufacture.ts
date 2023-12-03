function manufacture(gifts: string[], materials: string) {
  // Check if there are no gifts or materials
  if (gifts.length === 0 || !materials) return [];

  const results: string[] = [];
  gifts.forEach((gift) => {
    const item = gift.split("");
    // Check if all letters from the gift are available in materials
    const hasAllMaterials = item.every((el) => materials.indexOf(el) != -1);

    // If above condition is true, push the gift to the results arr
    if (hasAllMaterials) results.push(gift);
  });

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
