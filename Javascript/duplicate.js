// duplicate([1, 2, 3, 4, 5]); // [1,2,3,4,5,1,2,3,4,5]

function duplicate(arr){
    return arr.concat(arr)
}

duplicate([1, 2, 3, 4, 5])