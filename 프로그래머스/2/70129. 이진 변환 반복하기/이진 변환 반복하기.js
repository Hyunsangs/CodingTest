function solution(s) {
    let conversionCount = 0;
    let removeZeroCnt = 0;
    
    while ( s !== '1' ) {
        conversionCount++
        
        let zeroRemove = s.split('0').length - 1;
        removeZeroCnt += zeroRemove;
        
        let binary = s.replace(/0/g, '').length;
        s = binary.toString(2);
        
    }
    
    return [ conversionCount, removeZeroCnt]
    
    return removeZeroCnt
}