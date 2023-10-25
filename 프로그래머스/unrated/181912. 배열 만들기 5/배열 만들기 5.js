function solution(intStrs, k, s, l) {
    let ret = []
    for ( let i = 0 ; i < intStrs.length ; i++) {
        let spl1 = intStrs[i].split('')
        let spl2 = spl1.splice(s , l)
        let num = Number(spl2.join(""))
        
        if ( num > k ) {
            ret.push(num)
        }
    }
    return ret;
}