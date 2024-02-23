"use strict";

const { createServer, } = require ("http");

createServer ((request, response) => {

    response.writeHead (200,
    {
        "Content-Type": "text/plain",
    });

    response.end (JSON.stringify (process.env));

}).listen (9000);
