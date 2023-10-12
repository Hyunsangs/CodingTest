function solution(num_list) {
   
    num1 = 1;
    num2 = 0;
    for ( let i = 0 ; i < num_list.length ; i++){
        num1 *= num_list[i] 
        num2 += num_list[i]
    }
    num2 = num2**2;
    
   if(num1 < num2) {
        return 1
   } else {
        return 0
   }
   
    
    
    
}