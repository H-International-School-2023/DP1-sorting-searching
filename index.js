const array = [2, 10, 1, 8, 7];

for (let i = 0; i < array.length; i = i + 1) {
  let min = array[i];
  let minPosition = i;
  for (let j = i; j < array.length; j = j + 1) {
    const currentElement = array[j];
    if (currentElement < min) {
      min = currentElement;
      minPosition = j;
    }
  }
  const tmp = array[i];
  array[i] = min;
  array[minPosition] = tmp;
}

console.log(array);