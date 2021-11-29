function findMin(array) {
  let min = array[0];
  for (let i = 0; i < array.length; i = i + 1) {
    const currentElement = array[i];
    if (currentElement < min) {
      min = currentElement;
    }
  }
  return min;
}

const array = [2, 10, 1, 8, 7];

console.log(findMin(array));
