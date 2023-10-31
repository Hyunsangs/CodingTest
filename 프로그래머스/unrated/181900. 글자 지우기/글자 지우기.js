function solution(my_string, indices) {
    indices.sort((a, b) => b - a);
    

    for (let i = 0; i < indices.length; i++) {
        const index = indices[i];
        my_string = my_string.slice(0, index) + my_string.slice(index + 1);
        console.log(my_string)
    }
    
    return my_string;
}