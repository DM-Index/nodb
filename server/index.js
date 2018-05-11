const express = require("express");
const { json } = require("body-parser");
const axios = require("axios");

const app = express();
const port = 3001;

app.use(json());


//app.get data

//app.post data

//app.put update data

//app.delete data

app.listen(port, () =>
console.log(`Now Listening To Port:${port}FM`))