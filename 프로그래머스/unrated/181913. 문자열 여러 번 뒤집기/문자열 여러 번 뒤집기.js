function solution(my_string, queries) {
    let result = ''
    let splArr = my_string.split('')
   
    for (let i = 0 ; i < queries.length ; i++ ){
        const [ s, e ] = queries[i]
        let num = e - s
        result = splArr.slice(s, e+1).reverse()
        splArr.splice(s, num + 1)
        splArr.splice(s,0, ...result)
    }
    return splArr.join('')
   
}