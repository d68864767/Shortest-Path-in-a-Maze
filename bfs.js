// bfs.js

// Import necessary utility functions
const { isInBounds, isWalkable, getNeighbors } = require('./utils');

// This function finds the shortest path in a maze using Breadth-First Search
function shortestPath(maze, start, end) {
  // Initialize the queue with the starting position and initial distance of 0
  const queue = [[start, 0]];
  // Create a visited set to keep track of visited positions
  const visited = new Set();
  // Mark the starting position as visited
  visited.add(start.toString());

  // While there are positions to process in the queue
  while (queue.length > 0) {
    // Dequeue the next position and distance from the queue
    const [[x, y], distance] = queue.shift();

    // If the current position is the end, return the distance
    if (x === end[0] && y === end[1]) {
      return distance;
    }

    // Get the neighbors of the current position
    const neighbors = getNeighbors([x, y]);

    // Iterate over each neighbor
    for (const [nextX, nextY] of neighbors) {
      // If the neighbor is walkable and not yet visited
      if (isWalkable(maze, [nextX, nextY]) && !visited.has([nextX, nextY].toString())) {
        // Mark the neighbor as visited
        visited.add([nextX, nextY].toString());
        // Enqueue the neighbor with the incremented distance
        queue.push([[nextX, nextY], distance + 1]);
      }
    }
  }

  // If no path is found, return -1
  return -1;
}

module.exports = {
  shortestPath,
};
