function solution(todo_list, finished) {
    
    let result = []
    for (let i = 0 ; i < finished.length ; i++) {
        
        if( String(finished[i]) === "false" ) {
            result.push(todo_list[i])
        } 
    }
    return result
}