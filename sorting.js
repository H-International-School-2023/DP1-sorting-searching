
function selectionSort(array) {
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
};

function bubbleSort(array) {
  for (let i = 0; i < array.length; i = i + 1) {
    for (let j = 0; j < array.length - i - 1; j = j + 1) {
      if (array[j] > array[j + 1]) {
        const tmp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tmp;
      }
    }
  }
}

const array = [10, 2, 1, 8, 7];

bubbleSort(array);
console.log(array);
