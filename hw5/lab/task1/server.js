let express = require('express');
let app = express();
let route = require('./routes/products.js');

app.use('/products', route);

app.listen(3000, () => {
    console.log('Server runs on 3000 port!')
})
