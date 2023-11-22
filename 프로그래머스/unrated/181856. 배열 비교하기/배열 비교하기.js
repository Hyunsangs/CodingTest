function solution(arr1, arr2) {
    const len1 = arr1.length
    const len2 = arr2.length
    let total1 = 0
    let total2 = 0
    if ( len1 > len2 ) {
        return 1
    } else if ( len1 < len2) {
        return -1
    } else if (len1 === len2) {
        arr1.forEach(i => {
            total1 += i
        })
        arr2.forEach(i => {
            total2 += i
        })        
            if ( total1 > total2) {
                return 1
            } else if ( total1 < total2) {
                return -1
            } else if ( total1 === total2){
                return 0
            }
    }
}