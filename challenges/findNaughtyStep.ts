function findNaughtyStep(original: string, modified: string) {
  if (original === modified) return "";

  if (!original) return modified ? modified : "";

  if (!modified) return "";

  const hasExtra = original.length > modified.length;

  if (hasExtra) {
    return [...original].find((item, idx) => item != [...modified][idx]);
  } else {
    return [...modified].find((item, idx) => item != [...original][idx]);
  }
}

// Sample cases
const original = "abcd";
const modified = "abcdef";
console.log(findNaughtyStep(original, modified)); // 'e'

const original2 = "stepfor";
const modified2 = "stepor";
console.log(findNaughtyStep(original2, modified2)); // 'f'

const original3 = "abcde";
const modified3 = "abcde";
console.log(findNaughtyStep(original3, modified3)); // ''

console.log(findNaughtyStep("abcd", "abccd")); // 'c'
console.log(findNaughtyStep("stepor", "stepfor")); // 'f'
console.log(findNaughtyStep("xxxx", "xxoxx")); // 'o'
console.log(findNaughtyStep("", "xxxxx")); // 'xxxxx'
console.log(findNaughtyStep("xxx", "xx")); // 'x'
console.log(findNaughtyStep("xxxxx", "")); // ''
console.log(findNaughtyStep("", "")); // ''
console.log(findNaughtyStep("abcdf", "abce")); // 'd'
console.log(findNaughtyStep("abcdef", "abcd")); // 'e'
console.log(findNaughtyStep("abcd", "abcdef")); // 'e'
console.log(findNaughtyStep("abcd", "bcd")); // 'a'
console.log(findNaughtyStep("abcde", "bcd")); // 'a'
console.log(findNaughtyStep("abd", "abcd")); // 'c'
console.log(findNaughtyStep("abd", "abcde")); // 'c'
console.log(findNaughtyStep("abc", "abc0e")); // '0'
console.log(findNaughtyStep("abcde", "fghij")); // 'f'
console.log(findNaughtyStep("fghij", "abcde")); // 'a'
console.log(findNaughtyStep("a", "a")); // ''
console.log(findNaughtyStep("a", "")); // ''
console.log(findNaughtyStep("b", "ab")); // 'a'
