// 双边循环法
function partition(arr, startIndex, endIndex) {
  const temp = arr[startIndex];
  let left = startIndex;
  let right = endIndex;

  while (left !== right) {
    while (left < right && arr[right] > temp) {
      right--;
    }

    while (left < right && arr[left] <= temp) {
      left++;
    }

    if (left < right) {
      const p = arr[left];
      arr[left] = arr[right];
      arr[right] = p;
    }
  }

  arr[startIndex] = arr[left];
  arr[left] = temp;

  return left;
}

// 单边循环法
function _partition(arr, startIndex, endIndex) {
  const p = arr[startIndex];
  let mark = startIndex;

  for (let index = startIndex + 1; index <= endIndex; index++) {
    if (arr[index] <= p) {
      ++mark;
      const temp = arr[mark];
      arr[mark] = arr[index];
      arr[index] = temp;
    }
  }

  arr[startIndex] = arr[mark];
  arr[mark] = p;

  return mark;
}

const arr = [3, 4, 6, 2, 77, 33, 1, 4, 52, 43, 7];

function quickSort(arr, startIndex, endIndex) {
  if (startIndex >= endIndex) return;
  const index = partition(arr, startIndex, endIndex);
  quickSort(arr, startIndex, index - 1);
  quickSort(arr, index + 1, endIndex);
}

quickSort(arr, 0, arr.length - 1);
console.log('arr:', arr);

const _arr = [3, 4, 6, 2, 77, 33, 1, 4, 52, 43, 7];

function _quickSort(arr, startIndex, endIndex) {
  if (startIndex >= endIndex) return;
  const index = _partition(arr, startIndex, endIndex);
  _quickSort(arr, startIndex, index - 1);
  _quickSort(arr, index + 1, endIndex);
}

_quickSort(_arr, 0, arr.length - 1);

console.log('_arr:', _arr);
