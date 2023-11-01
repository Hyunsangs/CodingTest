function solution(arr, idx) {
    var result = 0;
    
    for (let i = 0 ; i < arr.length ; i++) {
        
        if( arr[idx] === 1) {
            result = idx
            break
            console.log(result)
        } else if( arr[idx + i] === 1) {
            result = idx + i 
            break
            console.log(result)
        } else if ( arr.length === idx + i) {
            return -1
        } 
        
    }
    
    return result;
}