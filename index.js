const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express()
 
app.use(cors())
app.use(express.json());

// Parse URL-encoded data in the request body
app.use(express.urlencoded({ extended: false }));
const port = 3000;

const router = require('././routes/routes');
const userRoute = require("./routes/user")
app.use('/api',router);
app.use('/api',userRoute);


app.listen(port,()=>{
    console.log(`App is working on ${port}`);
});
