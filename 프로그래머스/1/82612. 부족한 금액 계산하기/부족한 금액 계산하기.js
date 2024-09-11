function solution(price, money, count) {
    let sum = 0;
    let person = price;
    for (let i = 1; i <= count ; i++) {
        let curPrice = person * i;
        sum += curPrice;
        
    }
    const result = sum - money;
    return result < 0 ? 0 : result 
}