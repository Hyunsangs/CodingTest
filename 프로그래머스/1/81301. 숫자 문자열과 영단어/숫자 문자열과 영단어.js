function solution(s) {
    let dictionary = {
        'zero' : '0',
        'one' : '1',
        'two' : '2',
        'three' : '3',
        'four' : '4',
        'five' : '5',
        'six' : '6',
        'seven' : '7',
        'eight' : '8',
        'nine' : '9'
    };
    
    for ( let [ word, num ] of Object.entries(dictionary) ) {
        // 모든 일치 항목을 치환하기 위해 정규표현식 사용
         s = s.replace(new RegExp(word, 'g'), num); 
    }
    
    return Number(s)
}