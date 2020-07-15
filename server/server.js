const bodyParser = require('body-parser');
const express = require('express');
const morgan = require ('morgan');
const app = express();
const port = 8080;


app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => res.send('Hello stranger...'));

app.listen(port, () => {
  console.log(`listening to port ${port}`);
})