function countZeroes(arr) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;

  //1st check: is the middle value 1? --if so continue to increase index until u find 0;
  //-anything to the left wont be a 0 since its sorted with 1's at 1st
  // 2nd check: is middle value 0? Is it our first 0? -- if so we need to continue until we find the rest of the 0s
  // 3rd check: its not the first 0
  while (leftIdx <= rightIdx) {
    // find the middle value
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    let middleVal = arr[middleIdx];
    if (middleVal === 1) {
      leftIdx = middleIdx + 1;
    }
    //cheking to find 1st 0...it can be either at index of 0 or start after a 1;
    //if we hit the 1st 0, we can deduce that the rest of the arr will also be a 0
    else if (middleVal === 0 && (middleIdx === 0 || arr[middleIdx - 1] === 1)) {
      // so we include middle indext which is the index of 1st 0
      return arr.length - middleIdx;
    }
    // We need to shift our window to the left since its not the first 0
    else {
      rightIdx = middleIdx - 1;
    }
  }
  return 0;
}
countZeroes([1,1,1,1,0,0]) // 2
countZeroes([1,0,0,0,0]) // 4
countZeroes([0,0,0]) // 3
countZeroes([1,1,1,1]) // 0

module.exports = countZeroes;
