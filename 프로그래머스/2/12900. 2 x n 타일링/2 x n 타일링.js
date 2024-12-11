function solution(n) {
    const MOD = 1000000007;

    if (n === 1) return 1; // 길이가 1일 경우
    if (n === 2) return 2; // 길이가 2일 경우

    let dp1 = 1; // n-2에 해당하는 값
    let dp2 = 2; // n-1에 해당하는 값

    for (let i = 3; i <= n; i++) {
        const current = (dp1 + dp2) % MOD;
        dp1 = dp2;
        dp2 = current;
    }

    return dp2;
}
