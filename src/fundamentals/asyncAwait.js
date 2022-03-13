async function testAsync() {
    return 10;
}

(async function () {
    let value = await testAsync();
    console.log(value);
})();