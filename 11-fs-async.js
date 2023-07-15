const {readFile, writeFile} = require('fs');

readFile('./content/first.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
        return
    }
    const first = data;
    readFile('./content/second.txt', 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            return
        }
        const second = data;
        writeFile('./content/result-fileSync.txt',
            `He aquí el resultado: ${first}, ${second}`,
            {flag:'a'}, (err, data) => {
            if (err) {
                console.log(err);
                return
            }
        }
        );
    })
        
})
