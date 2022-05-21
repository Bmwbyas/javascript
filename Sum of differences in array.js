let arr;
function sumOfDifferences(arr) {
 
if (arr.length == 1) {
        return 0;
      } else if (arr == []) {
        return [];
      } else
        for (let i = 0; i < arr.length; i++) {
          for (let j = 0; j < arr.length; j++) {
            if (arr[j] < arr[j + 1]) {
              let temp = arr[j];
              arr[j] = arr[j + 1];
              arr[j + 1] = temp;
            }
          }
        }
      let newArray = [];
      for (let i = 0; i < arr.length - 1; i++) {
        newArray[i] = arr[i] - arr[i + 1];
      }
      let sum = 0;
      for (let i = 0; i < newArray.length; i++) {
        sum += newArray[i];
      }
      // newArray.pop();
      return sum;
      // return array; 
}

