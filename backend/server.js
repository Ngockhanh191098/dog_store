const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const { SERVER_PORT } = require('./config/common.config');
const upload = require('./middlewares/upload');
const dogRouter = require('./routers/dog.router');

app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use("/public/images", express.static(__dirname + "/public/images"));

app.use(upload.single("image"));

// handle auth routes with authentication
require('./routers/auth.router')(app);
app.use('/dogs',dogRouter);


app.listen(SERVER_PORT, () => {
    console.log(`Server is running on port ${SERVER_PORT}...`);
})