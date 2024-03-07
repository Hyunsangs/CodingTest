function solution(my_string) {
    let arr = my_string.split('');
    let result = [];
    for ( let i = 0 ; i < arr.length; i++ ){
        if ( !isNaN(arr[i]) ) {
            result.push(parseInt(arr[i]))
        }
    }
    return result.sort()
}