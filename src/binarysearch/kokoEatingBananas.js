var minEatingSpeed = function (piles, h) {
    let minSpeed = 1;
    let maxSpeed = 0;

    for (let pile of piles) {
        maxSpeed = Math.max(maxSpeed, pile);
    }

    function caEat(speed) {
        let hours = 0;
        for (let pile of piles) {
            hours += Math.ceil(pile / speed);
            if (hours > h) return false;
        }
        return true;
    }

    let minEatingSpeed = Number.MAX_SAFE_INTEGER;
    while (minSpeed < maxSpeed) {
        let mid = Math.floor((maxSpeed + minSpeed) / 2);

        if (caEat(mid)) {
            minEatingSpeed = Math.min(mid, minEatingSpeed);
            maxSpeed = mid - 1;
        } else {
            minSpeed = mid + 1;
        }
    }
    return minEatingSpeed;
};

console.log(minEatingSpeed([30, 11, 23, 4, 20], 5));