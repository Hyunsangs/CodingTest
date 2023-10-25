function solution(my_string, index_list) {
    var answer = '';
    let newArr = my_string.split('')
   
    let resArr = []
    for ( let i = 0 ; i < index_list.length ; i ++) {
        resArr += newArr[index_list[i]]
        
        
    }
    return resArr
   
}