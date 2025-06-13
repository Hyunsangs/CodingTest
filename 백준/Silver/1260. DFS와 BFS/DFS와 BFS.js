const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [n, m, v] = input.shift().split(" ").map(Number);
const graph = Array.from({ length: n + 1 }, () => []);

for (let i = 0; i < m; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

for (let i = 1; i <= n; i++) {
  graph[i].sort((a, b) => a - b);
}

let visited = Array(n + 1).fill(false);

let dfsResult = [];
let bfsResult = [];

function dfs(node) {
  visited[node] = true;
  dfsResult.push(node);

  for (let next of graph[node]) {
    if (!visited[next]) {
      dfs(next);
    }
  }
}

function bfs(start) {
  let queue = [start];
  visited[start] = true;

  while (queue.length) {
    const node = queue.shift();
    bfsResult.push(node);

    for (let next of graph[node]) {
      if (!visited[next]) {
        visited[next] = true;
        queue.push(next);
      }
    }
  }
}

dfs(v);
visited.fill(false);
bfs(v);

console.log(dfsResult.join(" "));
console.log(bfsResult.join(" "));
