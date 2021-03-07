
async function testAsync() {
    return 10;
}

testAsync()
    .then(value => {
        console.log(value);
    })