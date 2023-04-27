// not found

const notFound = (req, res, next) => {
    const error = new Error(`Not Found: ${req.original}`);
    res.status(404);
    next(error);
};

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
