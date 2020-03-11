const express = require('express');

const app = express();
app.use(express.json());
//  user router
app.get('/', (req, res) => res.send('hello'));
app.use('api/user', require('./routes/user'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => { console.log(`The app is running on port ${PORT}`); });
