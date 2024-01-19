const arr = [8, 9, 10, 44, 1, 2, 5, 7, 11];

const minHeap = [];
const k = 5;

for (let i = 0; i < k; i++) {
  minHeap.push(arr[i]);
  up(minHeap);
}

for (let i = k; i < arr.length; i++) {
  if (arr[i] > minHeap[0]) {
    minHeap[0] = arr[i];
    down(minHeap);
  }
}

console.log('minHeap: ', minHeap);

// 上浮
function up(arr) {
  let child = arr.length - 1;
  let parent = Math.floor((child - 1) / 2);
  while (parent >= 0 && arr[child] < arr[parent]) {
    [arr[parent], arr[child]] = [arr[child], arr[parent]];
    child = parent;
    parent = Math.floor((child - 1) / 2);
  }
}

// 下沉
function down(arr) {
  let parent = 0;
  let child = parent * 2 + 1;
  if (arr[child] > arr[child + 1]) {
    child = child + 1;
  }
  while (child < arr.length && arr[parent] > arr[child]) {
    [arr[parent], arr[child]] = [arr[child], arr[parent]];
    parent = child;
    child = parent * 2 + 1;
    if (arr[child] > arr[child + 1]) {
      child = child + 1;
    }
  }
}

//推出堆顶元素
function pop(arr) {
  const top = arr[0];
  arr[0] = arr[arr.length - 1];
  arr.pop();
  down(arr);
  return top;
}

const sortArr = [];

const l = minHeap.length;

for (let i = 0; i < l; i++) {
  sortArr.push(pop(minHeap));
}

console.log('sortArr: ', sortArr);
