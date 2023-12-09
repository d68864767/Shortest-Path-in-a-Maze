// main.js

// Import the IO handler functions
const { readInput, writeOutput } = require('./io_handler');

// This function is the entry point of the program
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
