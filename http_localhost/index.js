const express = require('express');
const app = express();
const port = 23117;

app.use(express.static(__dirname));

app.listen(port, () => console.log('listening on http://localhost:' + port + '/'));
