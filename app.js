const http = require ('http');

const server = http.createServer(
    (req, res) => {
        if (req.url === '/') {
            res.end('Welcome to our home page')
        }
        else
        if (req.url === '/about') {
            res.end('This is the about page')
        }
        else {
            res.end(`
            <h1>Ooops!</h1>
            <p>No es posible mostrar esta p&#225gina</p>
            <a href="/">regresar al inicio</a>
            `)
        }
    }
);

server.listen(5000);
