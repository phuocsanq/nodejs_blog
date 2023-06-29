const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars').engine;
const app = express();
const route = require('./routes/index'); //
const port = 3000;
// static file
app.use(express.static(path.join(__dirname, 'public')));
// midleware cho POST
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());
//
app.use(morgan('combined'));
//
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

//basic routing
  route(app);

// app.post('/search', (req, res) => {
//   res.send(req.body.que)
// })

         app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
