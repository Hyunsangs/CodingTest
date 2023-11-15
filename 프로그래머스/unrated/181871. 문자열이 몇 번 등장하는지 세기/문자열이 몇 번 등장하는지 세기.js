function solution(myString, pat) {
    let arr1 = []
    
    for ( let i = 0 ; i < myString.length ; i ++) {
        arr1.push(myString.slice(i, i+pat.length))
    }
    return arr1.filter( a => a === pat).length
    
}