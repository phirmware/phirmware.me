const express = require('express');
const app = express();
app.use(express.static(__dirname + '/views'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

exports.start = () => {
    app.listen(3000, () => {
        console.log('Listening at port 3000');
    });
}
