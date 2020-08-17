let express = require('express');
let mustacheExpress = require('mustache-express');
let bodyParser = require('body-parser');
let app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

app.set('views', __dirname + '/views');
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');

app.get('/', (req, res, next)=> {
    res.render('index', { title: 'First experence with mustache!' });
});

app.listen(3000, () => {
    console.log("Server runs on 3000 port");
});
