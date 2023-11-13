function solution(num_list) {
    const result = num_list.reduce((acc, cur) => acc + cur, 0);
    
    return num_list.length >= 11 ? result : num_list.reduce((acc, cur) => acc * cur, 1);
}