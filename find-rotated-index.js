function findRotatedIndex(arr, target) {
    let pivot = findPivot(arr);
    if (pivot === 0 || target < arr[0]) {
        return binarySearch(arr, pivot, arr.length - 1, target);
    }
    return binarySearch(arr, 0, pivot - 1, target);
}

function findPivot(arr) {
    if (arr[0] < arr[arr.length - 1]) return 0;
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] > arr[mid + 1]) return mid + 1;
        else if (arr[left] <= arr[mid]) left = mid + 1;
        else right = mid - 1;
    }
}

function binarySearch(arr, start, end, target) {
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] === target) return mid;
        else if (arr[mid] < target) start = mid + 1;
        else end = mid - 1;
    }
    return -1;
}

module.exports = findRotatedIndex;

