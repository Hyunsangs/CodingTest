function solution(my_string, alp) {
    
    const arr1 = [...my_string]
    
    for ( let i = 0 ; i < arr1.length ; i++) {
        if ( arr1[i] === alp) {
            arr1[i] = arr1[i].toUpperCase()
        } 
    }
    
    return arr1.join('')
}

// const solution=(s,a)=>s.replaceAll(a,a.toUpperCase())