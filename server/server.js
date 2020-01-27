const express = require('express');
const cors = require('cors');
const app = express();

require('./config/mongoose.config');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}))

const routes = require('./routes/pet.routes');
routes(app);

app.listen(9000, ()=>(console.log("You are now listening at port 9000")));