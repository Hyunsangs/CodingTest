function solution(m, n, puddles) {
    let arr = Array.from(Array(n+1), () => Array(m+1).fill(0)) 
    if(puddles.length > 0) puddles.forEach(([col, row]) => arr[row][col] = -1) 

    const getRoute = (row, col) => {
        if(row > n || col > m || arr[row][col] === -1) return 0 
        if(row === n && col === m) return 1  
        if(arr[row][col] !== 0) return arr[row][col]  
        else return arr[row][col] = (getRoute(row+1, col) + getRoute(row, col+1)) % 1000000007;
    }
    
    return getRoute(1,1);
}
