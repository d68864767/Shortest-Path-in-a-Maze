// tests.js

const { shortestPath } = require('./maze');

// Test cases for the shortestPath function
function runTests() {
  const testCases = [
    {
      maze: [
        [0, 0, 0, 1, 0],
        [1, 1, 0, 1, 0],
        [0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1],
        [0, 0, 0, 0, 0]
      ],
      start: [0, 0],
      end: [4, 4],
      expected: 8
    },
    {
      maze: [
        [0, 1, 0],
        [0, 1, 0],
        [0, 0, 0]
      ],
      start: [0, 0],
      end: [2, 2],
      expected: 4
    },
    {
      maze: [
        [0, 1],
        [1, 0]
      ],
      start: [0, 0],
      end: [1, 1],
      expected: -1
    }
  ];

  testCases.forEach((testCase, index) => {
    const { maze, start, end, expected } = testCase;
    const result = shortestPath(maze, start, end);
    if (result === expected) {
      console.log(`Test case ${index + 1}: Passed`);
    } else {
      console.error(`Test case ${index + 1}: Failed (Expected ${expected}, got ${result})`);
    }
  });
}

// Run the tests
runTests();
