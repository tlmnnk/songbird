export function getRandomIntInRange(mini, maxi) {
  const min = Math.ceil(mini);
  const max = Math.floor(maxi);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Fisher-Yates shuffle
export function arrayShuffle(oldArray) {
  const array = oldArray.slice(0); // shallow copy
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
    // swap elements array[i] and array[j]
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}