function knightMoves(start, end) {
  const directions = [[2, 1], [2, -1], [-2, 1], [-2, -1],
  [1, 2], [1, -2], [-1, 2], [-1, -2]];

  const queue = [[start, [start]]];
  const visited = new Set();
  visited.add(start.toString());

  console.log(`Starting BFS, from ${JSON.stringify(start)} to ${JSON.stringify(end)}.`);

  while (queue.length > 0) {
    const [[x, y], path] = queue.shift();
    console.log(`Exploring position: ${JSON.stringify([x, y])} at path: ${JSON.stringify(path)}.`);

    if (x === end[0] && y === end[1]) return path;

    for (const [dx, dy] of directions) {
      const newX = x + dx;
      const newY = y + dy;
      const newPos = [newX, newY];

      if (isValidMove(newX, newY) && !visited.has(newPos.toString())) {
        visited.add(newPos.toString());
        queue.push([newPos, [...path, newPos]]);
        console.log("-------------");
        console.log(`Adding position: ${JSON.stringify(newPos)} to the queue, with path: ${JSON.stringify(path)}.`);
      }
    }
  }

  return -1; // if knight is out of bounds or cannot be found
}

function isValidMove(x, y) {
  return x >= 0 && x < 8 && y >= 0 & y < 8;
}


const knightTravail = knightMoves([0,0], [7,7]);
console.log(`\nPath Taken: ${JSON.stringify(knightTravail)}`);
console.log(`Path Length: ${knightTravail.length - 1}\n`);
