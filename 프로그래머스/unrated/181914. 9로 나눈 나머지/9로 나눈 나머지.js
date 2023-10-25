function solution(number) {
    let newArr = number.split('')
    let num = Number(number)
    
    const res = newArr.reduce((acc, strNum) => acc + parseInt(strNum), 0);
    
    if( res < 9 ) {
        return res
    } else {
        return res % 9
    }
   
    
    
    
}