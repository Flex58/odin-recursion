const mergeSort = (arr) => {
    let length = arr.length
    if (length > 1) {
        let half = Math.ceil(length / 2)

        let left = arr.slice(0, half)
        let right = arr.slice(half, length)
        
        let sortedLeft =  mergeSort(left)
        let sortedRight = mergeSort(right)
        
        return merge(sortedLeft, sortedRight, sortedLeft.length, sortedRight.length)
        
    }
    else {
        return arr
    }

}

const merge = (A, B, m ,n) => {
    let C = []
    let i = 0, j = 0, k = 0
    while (i < m && j < n) {
        if (A[i] < B[j]) {
            C[k++] = A[i++]
        } else {
            C[k++] = B[j++] 
        }
    }
    for (; i < m; i++) {
        C[k++] =  A[i] 
    }
    for (; j < n; j++) {
        C[k++] = B[j]
    }

    return C
}

const arr = [3, 2, 1, 13, 8, 5, 0, 1]
const arr2 = [105, 79, 100, 110, 15]
console.log(mergeSort(arr));
console.log(mergeSort(arr2))
