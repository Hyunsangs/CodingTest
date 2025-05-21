const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const [n, m] = input[0].split(" ").map(Number);
const maze = input.slice(1).map((line) => line.split("").map(Number));

const queue = [[0, 0]];
const visited = Array.from({ length: n }, () => Array(m).fill(false));

visited[0][0] = true;

while (queue.length) {
  const [x, y] = queue.shift();

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (
      nx >= 0 &&
      nx < n &&
      ny >= 0 &&
      ny < m &&
      maze[nx][ny] === 1 &&
      !visited[nx][ny]
    ) {
      visited[nx][ny] = true;
      maze[nx][ny] = maze[x][y] + 1;
      queue.push([nx, ny]);
    }
  }
}

console.log(maze[n - 1][m - 1]);
