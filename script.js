/** @format */

// Factoralize



// Declare the function factorialize
function factorialize(n) {
  // Initialize the result to 1
  let result = 1;

  // Loop from 1 to n and multiply the result by each integer
  for (let i = 1; i <= n; i++) {
    result *= i;
  }

  // Return the calculated factorial
  return result;
}

// Example usage
console.log(factorialize(5));
console.log(factorialize(0));
console.log(factorialize(6));
