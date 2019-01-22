const express =  require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'dist/concentino')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/concentino/index.html'));
});

app.listen(4600, (req, res) => {
    console.log('running');
});