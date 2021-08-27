function hasMatchingBrackets(input) {
    let stack = [];
    let openBrackets = ["(", "{", "[", "<"];
    let closedbrackets = [")", "}", "]", ">"];

    for (let v of input) {
        if (openBrackets.includes(v)) {
            stack.push(v);
        } else if (closedbrackets.includes(v)) {
            let poppedBracket = stack.pop()
            if (openBrackets.indexOf(poppedBracket) !== closedbrackets.indexOf(v))
                return false
        } else {
            return false;
        }
    }
    return (stack.length === 0) ? true : false;
}

let input = "[(){}({})]";

console.log(hasMatchingBrackets(input));