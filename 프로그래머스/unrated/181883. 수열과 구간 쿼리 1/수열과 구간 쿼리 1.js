function solution(arr, queries) {
   
   return queries.reduce( (acc , cur ) => {
       console.log(cur)
       const [ from , to ] = cur
       console.log(from, to)
       for ( let i = from ; i <= to ; i++ ) {
           acc[i] +=1
       }
       
       return acc
   }, arr)
        
    

    
}