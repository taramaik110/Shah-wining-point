
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Backend is working!');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
