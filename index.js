/**
 * @param {number[][]} cars
 * @return {number[]}
 */
var getCollisionTimes = function (cars) {
    const n = cars.length;
    const stack = []; // Stack to keep track of indices of cars
    const collisionTimes = new Array(n).fill(-1); // Array to store collision times

    // Iterate from the last car to the first
    for (let i = n - 1; i >= 0; i--) {
        collisionTimes[i] = -1.0; // Initialize collision time for current car

        const currCarPosition = cars[i][0]; // Position of current car
        const currCarSpeed = cars[i][1]; // Speed of current car

        // Process cars in stack
        while (stack.length > 0) {
            const j = stack[stack.length - 1]; // Index of car at the top of the stack
            const prevCarPosition = cars[j][0]; // Position of car at the top of the stack
            const prevCarSpeed = cars[j][1]; // Speed of car at the top of the stack

            // Check conditions for collision calculation
            if (currCarSpeed <= prevCarSpeed ||
                (1.0 * (prevCarPosition - currCarPosition) / (currCarSpeed - prevCarSpeed) >= collisionTimes[j] && collisionTimes[j] > 0)) {
                stack.pop(); // Remove the car from stack if conditions are met
            } else {
                break; // Exit loop if conditions are not met
            }
        }

        // If stack is not empty, calculate collision time for current car
        if (stack.length > 0) {
            const j = stack[stack.length - 1]; // Index of car at the top of the stack
            const prevCarPosition = cars[j][0]; // Position of car at the top of the stack
            const prevCarSpeed = cars[j][1]; // Speed of car at the top of the stack

            collisionTimes[i] = 1.0 * (prevCarPosition - currCarPosition) / (currCarSpeed - prevCarSpeed); // Calculate collision time
        }

        stack.push(i); // Add current car index to stack
    }

    return collisionTimes;
};