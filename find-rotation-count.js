function findRotationCount(arr) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    // This condition checks if we've found the pivot
    if (mid < high && arr[mid] > arr[mid + 1]) {
      return mid + 1;
    }

    // This condition checks if we're on the right track to find the pivot
    if (mid > low && arr[mid] < arr[mid - 1]) {
      return mid;
    }

    // Decide which side of the array to search
    if (arr[low] <= arr[mid]) {
      // left side is sorted, so pivot is on right
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return 0; // if no rotations have occurred
}

module.exports = findRotationCount;
