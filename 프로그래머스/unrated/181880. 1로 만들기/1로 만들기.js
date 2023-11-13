function solution(num_list) {
   
    return num_list.reduce( (acc, cur) => acc + calculator(cur) , 0)
}

    const calculator = (n , count = 0) => {
        if ( n === 1 ) return count
        
        n = n % 2 === 0 ?  n / 2 : (n -1) / 2
        count ++
        
        return calculator ( n, count )
    }
    
    
/* 
function solution(num_list) {
    var answer = 0;
    num_list.forEach((num)=>{
        while(num !== 1){
            if(num%2 == 0){
                num = num/2
                answer = answer+1
            }else{
                num = (num-1)/2
                answer = answer+1
            }
        }
    })
    return answer;
}
*/
