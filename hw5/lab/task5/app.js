let express = require('express');
let bodyParser = require('body-parser');
let mustacheExpress = require('mustache-express');
let app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

app.set('views', __dirname + '/views');
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');

app.post('/reg', (req, res, next) => {
    console.log('Параметры POST запроса: ' + JSON.stringify(req.body));
    res.render('index', { message: 'Вы успешно зарегистрировались' });
});

app.listen(3000, () => {
    console.log('Server run on 3000 port!')
});
