const express = require('express');
const port = process.env.PORT || 8000;

const app = express();

app.get('/jobs', (req, res) => {
    res.json(data);
});

app.listen(port, console.log(`server started at port ${port}`));