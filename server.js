const path = require('path');
const express = require('express');
const routes = require('./controllers/');
const sequelize = require('./config/connection');
//set up handlebars
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

const app = express();
const PORT = process.env.PORT || 3001;

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// middleware to connect server to folder
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

// connectio to database and server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('now listening'));
});