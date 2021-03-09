function outerCounter() {
    let count = 1;
    return function innerCounter() {
        count++;
        console.log('count=>', count);
    }
}

outerCounter()();

function publicFunction() {
    let privateFunction = () => console.log('I was called in privated function');
    return () => {
        privateFunction();
    }
}

let privateFunction = publicFunction();
privateFunction();