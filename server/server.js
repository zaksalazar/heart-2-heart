const express = require('express');
const db= require('./config/connection');
const routes = require('./routes');
// changes
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV == 'production') {
    app.use(path.join(__dirname, '../client/dist'));
}
app.use(routes);

db.once('open', () => {
    app.listen(PORT, () => console.log (`❤ Now listening on ${PORT}`));
})