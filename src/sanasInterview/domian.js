const express = require('express')
const app = express()
const port = 3000;

app.use(express.json());


function isValidDomain(email) {
    let splits = email.split("@");

    if (splits.length > 2 || splits.length <= 1) {
        throw new Error("this is not a valid domain");
    }

    let secondSplit = splits[1].split(".");

    if (secondSplit.length > 2 || secondSplit.length <= 1) {
        throw new Error("this is not a valid domain");
    }

    if (secondSplit[1] == "com") {
        return splits[1];
    }

    throw new Error("this is not valid domain");
}


app.post('/', (req, res) => {
    try {
        let domain = isValidDomain(req.body.email);
        res.send(`The valid domain is ${domain}`);
    } catch (error) {
        res.send("This is not a valid domain");
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});