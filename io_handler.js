// io_handler.js

const fs = require('fs');
const { shortestPath } = require('./maze');

// This function reads the input from stdin and returns the maze and start/end points
function readInput() {
  // Read the input from stdin
  const input = fs.readFileSync(process.stdin.fd, 'utf-8').trim().split('\n');
  
  // Extract the dimensions of the maze
  const [n, m] = input.shift().split(' ').map(Number);
  
  // Initialize the maze with the given dimensions
  const maze = new Array(n);
  
  // Fill the maze with the input data
  for (let i = 0; i < n; i++) {
    maze[i] = input.shift().split(' ').map(Number);
  }
  
  // Extract the start and end points
  const start = input.shift().split(' ').map(Number);
  const end = input.shift().split(' ').map(Number);
  
  return { maze, start, end };
}

// This function writes the output to stdout
function writeOutput(result) {
  process.stdout.write(result.toString());
}

// Main function to handle the IO operations
function main() {
  // Read the input data
  const { maze, start, end } = readInput();
  
  // Find the shortest path in the maze
  const result = shortestPath(maze, start, end);
  
  // Write the result to stdout
  writeOutput(result);
}

// Execute the main function
main();

module.exports = {
  readInput,
  writeOutput,
};
