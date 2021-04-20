var fs = require('fs');

function base64_encode(file) {
    var bitmap = fs.readFileSync(file);
    return bitmap.toString('base64');
}

fs.writeFileSync('base64', base64_encode('base64.png'));