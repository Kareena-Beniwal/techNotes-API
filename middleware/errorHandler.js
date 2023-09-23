const {logEvents} = require('./logger')

const errorHandler = (err, req, res, next)=>{
    logEvents(`${err.name}: ${err.message}\t${req.method}\t${req.url}\t${req.headers.origin}`, 'errLog.log')
    console.log(err.stack)

    const status = res.statusCode ? res.statusCode : 500 // server error 
    res.status(status)

    res.json({ message: err.message })
}

module.exports = errorHandler 
//to export the errorHandler function from the current file so that it can be used in other parts of the application.
