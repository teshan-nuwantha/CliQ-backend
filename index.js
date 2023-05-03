const express= require('express') ;
const dbConnect = require('./config/dbConect');
const app = express()
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 4000;
const authRouter = require("./routes/authRoute");
<<<<<<< HEAD
const bodyParser = require('body-parser');
const { notFound } = require('./middlewares/errorHandler');

dbConnect();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));



app.use("/api/user",authRouter);

app.use(notFound);
app.request(errorHandler);
=======
const productRouter = require("./routes/productRoute");
const morgan = require("morgan");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { notFound, errorHandler } = require('./middlewares/errorHandler');


dbConnect()
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());

app.use('/',(req,res)=>{
    res.send("Hello from server side");
});

app.use("/api/user",authRouter);
app.use("/api/product",productRouter);

app.use(notFound);
app.use(errorHandler);
>>>>>>> fb48dcacb4f37ac10f673410b4893212c06a5560

app.listen(PORT, ()=>{
    console.log(`Server is running at PORT ${PORT}`);
});

// time - 3:22:44