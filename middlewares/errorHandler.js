<<<<<<< HEAD
//not found

const notFound = (req,res,next)=>{
    const error = new Error('Not Found : ${req.originalUrl}');
=======
// not found

const notFound = (req, res, next) => {
    const error = new Error(`Not Found: ${req.original}`);
>>>>>>> b4517706f7acd80ab1d3b2762a91ff9e10d45b8c
    res.status(404);
    next(error);
};

<<<<<<< HEAD
const errorHandler = (err, req, res, next) => {
    const statuscode = res.statusCode == 200? 500 : res.statusCode;
    res.status(statuscode);
    res.json({
        message: err?.message,
        stack: err?.stack,
    });
};

module.exports = {notFound, errorHandler};
=======
// Error Handler

const errorHandler = (err, req, res, next)=>{
    const statuscode =res.statuscode==200 ? 500 : res.statuscode;
    res.status(statuscode);
    res.json({
        massage: err?.massage,
        stack: err?.stack ,
    })
}; 


module.exports = {errorHandler, notFound};
>>>>>>> b4517706f7acd80ab1d3b2762a91ff9e10d45b8c
