//store in to 'express' local var, access to the express pkg
let express=require('express');
//creat a new web-api-handler with the built in 'express()' function
let app=express();
//rout the default returned value to the 'view' directory
//(will return 'view/index.html')
app.use(express.static("view"));
//config the web api to listen to http request in port 3500
//port must be higher then 80
app.listen(3500);