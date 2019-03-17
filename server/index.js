const express = require('express');
const path = require('path');

const app = express();
const router = express.Router();

app.use(express.static(path.join(__dirname, '../public')));

router.get('/', (req, res) => {
    res.render('index.html');
});

app.listen(3000, () => {
    console.log('App listening on port 3000...');
});
