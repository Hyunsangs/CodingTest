function solution(arr, intervals) {
    
    
    const [ [a1,b1] , [a2,b2]]  = intervals
    
    let arr1 = arr.slice(a1, b1+1)
    let arr2 = arr.slice(a2, b2+1)
    
    return [...arr1, ...arr2]
    
    
   
   
    
    
}