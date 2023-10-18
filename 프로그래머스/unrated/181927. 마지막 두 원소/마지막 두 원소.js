function solution(num_list) {
    let resNum = 0;
    
    
    if (num_list[ num_list.length - 1 ] > num_list[num_list.length - 2]) {
        resNum = num_list[ num_list.length - 1 ] - num_list[ num_list.length - 2]
        num_list.push(resNum);
    } else if (num_list[ num_list.length - 1 ] <= num_list[num_list.length - 2]) {
        resNum = num_list[ num_list.length - 1] * 2
        num_list.push(resNum);
    }
    
    
        
    
    
    return num_list;
}