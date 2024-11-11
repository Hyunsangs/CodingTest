function solution(storey) {
  let answer = 0;

  while (storey > 0) {
    let remainNum = storey % 10;
    let nextNum = Math.floor(storey / 10) % 10;

    if (remainNum  > 5 || (remainNum  === 5 && nextNum  >= 5)) {
      answer  += 10 - remainNum ;
      storey = Math.floor(storey / 10) + 1;
    } else {
      answer  += remainNum ;
      storey = Math.floor(storey / 10);
    }
  }

  return answer;
}