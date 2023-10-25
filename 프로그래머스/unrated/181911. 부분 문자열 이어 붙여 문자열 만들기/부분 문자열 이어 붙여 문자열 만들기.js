function solution(my_strings, parts) {
    var answer = '';
    
    for (let i = 0 ; i < parts.length ; i++) {

        let arr1 = my_strings[i].split('')
        const [ s, e ] = parts[i]
       
        let arr2 = arr1.slice(s, e+1).join('');
        
        answer += arr2
        
        
        
    }
    
    return answer;
}