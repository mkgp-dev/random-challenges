/*
(October 23, 2025) Dependable Jobs Schedule
You’re given a number of jobs and a list of dependencies.
Each job is labeled from 0 to jobs - 1.
Each dependency [a, b] means job a can only start after job b is finished.

Return true if all jobs can be finished, or false if there’s a circular dependency.

Test cases:
finishAll(2, [[1, 0]])
=> true
finishAll(2, [[1, 0], [0, 1]])
=> false
finishAll(3, [[1, 0], [2, 1]])
=> true
finishAll(1, [])
=> true
finishAll(11, [[6, 10], [4, 3], [9, 2], [2, 3], [6, 1], [2, 8], [10, 1], [10, 2], [5, 3], [0, 10], [7, 4], [6, 1]])
=> true
*/

const kahnalgo = (V, edges) => {
  // i was told to use Kahn's algorithm, just modified a bit
  // https://www.geeksforgeeks.org/dsa/topological-sorting-indegree-based-solution/
  let graph = Array.from({ length: V }, () => []);
  let indeg = Array(V).fill(0);
  let queue = [];
  let prcss = 0;

  // build edges
  for (let [u, v] of edges) {
    graph[v].push(u);
    indeg[u]++;
  }

  // setup queue to process
  for (let i = 0; i < V; i++) {
    if (indeg[i] == 0) queue.push(i);
  }

  // process the cycle
  while (prcss < queue.length) {
    let u = queue[prcss++];
    for (let v of graph[u]) {
      indeg[v]--;
      if (indeg[v] == 0) queue.push(v);
    }
  }

  // return boolean
  return Boolean(prcss == V);
};

const finishAll = (a, b) => {
  return kahnalgo(a, b);
};
