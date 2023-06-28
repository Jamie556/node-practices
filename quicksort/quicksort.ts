class Sort {
  static quickSort(arr: number[]): number[]{
    if (arr.length <= 1) {
      return arr;
    }
    const pivotIndex = Math.floor(arr.length / 2);
    const pivot = arr.splice(pivotIndex, 1)[0]
    const left: number[] = [];
    const right: number[] = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    return Sort.quickSort(left).concat([pivot], Sort.quickSort(right));
  }
}

function test() {
  const arr = [3, 5, 2, 1, 6, 2, 4, 4];
  console.log(Sort.quickSort(arr));
}

test();
