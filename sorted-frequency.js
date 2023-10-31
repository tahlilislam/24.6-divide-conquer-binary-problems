function sortedFrequency(arr, target) {
  let firstOccurence = findFirstIdx(arr, target);
  let lastOccurence = findlastIdx(arr, target);
  if (firstOccurence === -1) return -1;
  return lastOccurence - firstOccurence + 1;
}

function findFirstIdx(arr, target) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;
  while (leftIdx <= rightIdx) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    let middleVal = arr[middleIdx];
    if (
      middleVal === target &&
      (middleIdx === 0 || arr[middleIdx - 1] !== target)
    ) {
      return middleIdx;
    } else if (middleVal < target) {
      leftIdx = middleIdx + 1;
    } else {
      rightIdx = middleIdx - 1;
    }
  }
  return -1;
}
function findlastIdx(arr, target) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;
  while (leftIdx <= rightIdx) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    let middleVal = arr[middleIdx];
    if (
      middleVal === target &&
      (middleIdx === arr.length - 1 || arr[middleIdx + 1] !== target)
    ) {
      return middleIdx;
    } else if (middleVal <= target) {
      leftIdx = middleIdx + 1;
    } else {
      rightIdx = middleIdx - 1;
    }
  }
  return -1;
}

module.exports = sortedFrequency;
