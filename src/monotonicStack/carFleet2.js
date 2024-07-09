/**
 * @param {number[][]} cars
 * @return {number[]}
 */
var getCollisionTimes = function (cars) {
    const n = cars.length;
    const stack = [];
    const collisionTimes = new Array(n).fill(-1);

    for (let i = n - 1; i >= 0; i--) {
        const currCarPosition = cars[i][0];
        const currCarSpeed = cars[i][1];

        while (stack.length > 0) {
            const j = stack[stack.length - 1];
            const prevCarPosition = cars[j][0];
            const prevCarSpeed = cars[j][1];

            if (currCarSpeed <= prevCarSpeed ||
                ((prevCarPosition - currCarPosition) / (currCarSpeed - prevCarSpeed) >= collisionTimes[j] && collisionTimes[j] > 0)) {
                stack.pop();
            } else {
                break;
            }
        }

        if (stack.length > 0) {
            const j = stack[stack.length - 1];
            const prevCarPosition = cars[j][0];
            const prevCarSpeed = cars[j][1];
            collisionTimes[i] = (prevCarPosition - currCarPosition) / (currCarSpeed - prevCarSpeed);
        }

        stack.push(i);
    }

    return collisionTimes;
};