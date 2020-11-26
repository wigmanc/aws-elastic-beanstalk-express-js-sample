const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Thank you for taking a look at my page. Always exited to learn new technologies.'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
