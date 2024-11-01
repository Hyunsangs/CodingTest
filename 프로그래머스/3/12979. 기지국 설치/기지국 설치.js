function solution(n, stations, w) {
    let cnt = 0;
    let start = 1;

    for (let i = 0; i < stations.length; i += 1) {
        cnt += Math.ceil((stations[i] - w - start) / (2 * w + 1));
        start = stations[i] + w + 1;
    }

    cnt += Math.ceil((n + 1 - start) / (2 * w + 1));

    return cnt;
}
