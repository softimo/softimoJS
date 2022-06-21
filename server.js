const express = require("express");
const cors = require('cors')
let app = express();
const port = 3000;
const path = require('path')

//CORS CONFIGURE


const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
    allowedHeaders:'*'
  }
app.use(cors(corsOptions))
app.use(express.static(__dirname + "/public"));

  app.listen(port, () => {
    console.log(`App is running on port:  ${port}`);
  });
