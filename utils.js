// utils.js

// This utility function checks if a given position is within the maze bounds
function isInBounds(maze, position) {
  const [x, y] = position;
  return x >= 0 && y >= 0 && x < maze.length && y < maze[0].length;
}

// This utility function checks if a given position is walkable (not a wall)
function isWalkable(maze, position) {
  const [x, y] = position;
  return isInBounds(maze, position) && maze[x][y] === 0;
}

// This utility function gets the neighbors of a given position in the maze
function getNeighbors(position) {
  const [x, y] = position;
  // Define the four possible movements (up, right, down, left)
  const directions = [
    [x - 1, y], // up
    [x, y + 1], // right
    [x + 1, y], // down
    [x, y - 1], // left
  ];
  return directions;
}

module.exports = {
  isInBounds,
  isWalkable,
  getNeighbors,
};
