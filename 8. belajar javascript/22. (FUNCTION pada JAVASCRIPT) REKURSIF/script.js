/* function tampilAngka(n) {
    if(n === 0) return;
    console.log(n);
    return tampilAngka(n-1)
}

tampilAngka(10); */

/* function faktorial(n) {
    if (n === 0) return 1;
    return n * faktorial(n-1);
}

console.log(faktorial(3)); */

/* function countDown(n) {
  console.log(n);

  if (n == 0) {
    console.log("stop");
  } else {
    countDown(n - 1);
  }
}

countDown(5); */

/* let bubbleSort = (inputArr) => {
  let len = inputArr.length;
  for (let i = 0; i < len; i++) {
      for (let j = 0; j < len; j++) {
          if (inputArr[j] > inputArr[j + 1]) {
              let tmp = inputArr[j];
              inputArr[j] = inputArr[j + 1];
              inputArr[j + 1] = tmp;
          }
      }
  }
  return inputArr;
};

console.log(bubbleSort([1,5,4,6,3,2])) */
// 1,5,4,6,3,2
// 1,4,5,6,3,2
// 1,4,5,3,6,2
// 1,4,5,3,2,6

// 1,4,5,3,2,6
// 1,4,5,3,2,6
// 1,4,3,5,2,6
// 1,4,3,2,5,6

// 1,4,3,2,5,6
// 1,3,4,2,5,6
// 1,3,2,4,5,6
// 1,3,2,4,5,6

// 1,3,2,4,5,6
// 1,2,3,4,5,6

function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  } else {
    const pivot = arr[0];

    const less = [];
    const greater = [];

    for (i = 0; i < arr.length; i++) {
      if (arr[i] < arr[0]) {
        less.push(arr[i]);
      } else if (arr[i] > arr[0]) {
        greater.push(arr[i]);
      }
    }
    let recursion = quickSort(less) + [pivot] + quickSort(greater);

    let convertedArray = [...recursion];

    let result = [];

    for (i = 0; i < convertedArray.length; i++) {
      if (convertedArray[i] !== ",") {
        result.push(convertedArray[i]);
      }
    }

    let fixResult = result.map((e) => parseInt(e));
    return fixResult;
  }
}

console.log(quickSort([2, 3, 1]));
