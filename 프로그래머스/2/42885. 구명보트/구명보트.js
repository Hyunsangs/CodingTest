function solution(people, limit) {
    
    const sortPeople = people.sort((a,b) => a-b);
    
    let left = 0;
    let right = people.length - 1;
    let boats = 0;
    while ( left <= right ) {
        if ( sortPeople[left] + sortPeople[right] <= limit) {
            left++
        }
        right--
        boats++
    }
    
    return boats;
  
    

   
}