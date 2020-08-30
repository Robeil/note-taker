// creating the server here
const express = require('express');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



require('./apiRoutes')(app);
require('./htmlroutes')(app);

app.listen(PORT, function () {
    console.log(`App listening at http/:${PORT}`);
  });
  
