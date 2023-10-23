function solution(arr, queries) {
    let result = [];
    for(let i = 0; i < queries.length; i++) {
        let [start, end, k] = queries[i];
        
        let minVal;
        for(let j = start; j <= end; j++) {
            if(arr[j] > k && (minVal === undefined || arr[j] < minVal)) {
                minVal = arr[j];
            }
        }
        result.push(minVal === undefined ? -1 : minVal);
    }
    return result;
}
