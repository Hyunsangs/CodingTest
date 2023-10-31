function solution(my_string) {
    let answer = Array(52).fill(0)
    
    for ( let i = 0 ; i < my_string.length ; i++){
      if(my_string.charCodeAt(i)>=65 && my_string.charCodeAt(i)<=90){
            answer[my_string.charCodeAt(i)-65]++;
        }else{
            answer[my_string.charCodeAt(i)-71]++;
        }
    }

    return answer;
}