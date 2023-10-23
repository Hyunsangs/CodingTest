function solution(arr, queries) {
    
    for (let i = 0; i < queries.length ; i++) {
        let [start, end] = queries[i]
        let temp = arr[start]
        arr[start] = arr[end]
        arr[end] = temp
    }
    return arr;
}
/*
function solution(arr, queries) {
    queries.forEach( ([a,b]) => {
        [arr[a],arr[b]] = [arr[b],arr[a]];
    })
    return arr;
}
*/