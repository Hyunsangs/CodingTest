function solution(brown, yellow) {

    let size = brown + yellow;
    let maxRow = brown / 2 - 1;
    let minCol = 3;
    
    while( true ) {
        if ( maxRow * minCol === size) {
            return [ maxRow, minCol]
        } else {
            maxRow--
            minCol++
        }
    }
    
}