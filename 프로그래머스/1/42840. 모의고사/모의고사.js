function solution(answers) {
    let one = [1,2,3,4,5];
    let two = [ 2,1,2,3, 2,4,2,5]; 
    let three = [ 3,3 , 1,1 , 2,2, 4,4 , 5,5] // 3 -> 1 -> 2 -> 4 -> 5
    
    let people = {
        1 : 0,
        2 : 0,
        3 : 0,
    }
    
    for ( let i = 0 ; i < answers.length ; i++ ) {
        //수포자 1
        if ( i >= one.length ) {
            if( answers[i] ===  one[i % one.length] ) {
                people[1]++
            }
        } else {
            if( answers[i] ===  one[i] ) {
                people[1]++
            }
        }
        //수포자 2
         if ( i >= two.length ) {
            if( answers[i] === two[i % two.length] ) {
                people[2]++
            }
        } else {
            if( answers[i] ===  two[i] ) {
                people[2]++
            }
        }
        //수포자 3
        
         if ( i >= three.length ) {
            if( answers[i] ===  three[i % three.length] ) {
                people[3]++
            }
        } else {
            if( answers[i] ===  three[i] ) {
                people[3]++
            }
        }
    }
    
    let maxKeys = [];
    let maxValue = -Infinity;
    
    for (const [key, value] of Object.entries(people)) {
        if (value > maxValue) {
            maxValue = value;
            maxKeys = [key];
        } else if (value === maxValue) {
            maxKeys.push(key);
        }
    }

    return maxKeys.map(Number);
    
}