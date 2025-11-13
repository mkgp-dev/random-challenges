/*
(November 13, 2025) Can You Reach the Exit?
You are given a 2D grid where each cell is one of:
  '.' - empty space (you can walk here)
  '#' - wall (you cannot walk here)
  '@' - starting position
  'E' - exit

You can move up, down, left, right (no diagonals), and you cannot move outside the grid.

Usage/Result:
can_reach_exit([
    "@..",
    ".#E",
    "..."
])
=> true
can_reach_exit([
    "@#E"
])
=> false
can_reach_exit([
    "@.#.",
    "..#E",
    "####"
])
=> false
can_reach_exit([
    "@...",
    ".###",
    "...E"
])
=> true
*/

const findStartPosn = (board, rows, columns) => {
  let start = null;
  for(let r = 0; r < rows; r++) {
    for(let c = 0; c < columns; c++) {
      if (board[r][c] === '@') {
        start = [r, c];
        break;
      }
    }
    if (start) break;
  }

  return start;
};

const generatePath = (parent, end) => {
  const path = [];
  let curr = end;

  while (curr !== null) {
    path.push(curr);
    curr = parent[curr.toString()];
  }

  return path.reverse();
}

const findExit = (start, board, rows, columns) => {
  const queue = [start];
  const visited = new Set([start.toString()]);
  const parent = { [start]: null };
  const directions = [
    [1, 0], [-1, 0],
    [0, 1], [0, -1]
  ];

  while (queue.length > 0) {
    const [r, c] = queue.shift();
    if (board[r][c] === 'E') return generatePath(parent, [r, c]);

    for (const [row, col] of directions) {
      const nextRow = r + row;
      const nextCol = c + col;

      if (nextRow < 0 || nextRow >= rows || nextCol < 0 || nextCol >= columns) continue;
      if (board[nextRow][nextCol] === '#') continue;

      const key = `${nextRow},${nextCol}`;
      if (!visited.has(key)) {
        visited.add(key);
        queue.push([nextRow, nextCol]);
        parent[key] = [r, c];
      }
    }
  }

  return null;
};

const can_reach_exit = (grid) => {
  const rows = grid.length;
  const columns = grid[0].length;

  const board = grid.map(row => row.split(''));
  const start = findStartPosn(board, rows, columns);

  // remove "!== null" to check its path
  return findExit(start, board, rows, columns) !== null;
};
