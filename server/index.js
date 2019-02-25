const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json())

require("./routers/rides.router").defineRoutes(app);
require("./routers/users.router").defineRoutes(app);

app.listen(8080,(error)=>{
    if(error){
        console.error('Failed to run server: ' + error);
        throw error;
    } else {
        console.log('Server is running on port 8080');
    }
})

