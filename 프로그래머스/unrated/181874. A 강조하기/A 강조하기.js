function solution(myString) {
    
    const arr1 = [...myString]
    
    for ( let i = 0 ; i < arr1.length ; i ++) {
        if ( arr1[i] === "a") {
            arr1[i] = arr1[i].toUpperCase()
            
        } else if ( arr1[i] === "A" ) {
            continue;
        } else {
            arr1[i] = arr1[i].toLowerCase()
        }
    }
    return arr1.join('')
    
    
}