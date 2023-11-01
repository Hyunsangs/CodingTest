function solution(arr, idx) {
    var result = 0;
    
    for (let i = idx ; i < arr.length ; i++) {
        
        if ( arr[i] == 1) {
            return i
        }
        
    }
    
    return -1
}