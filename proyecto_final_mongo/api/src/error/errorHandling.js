const errorHandling = (err, req, res, next) => {
    res.status(500).json({error: true, codigo: 500, message:err.message})
}

module.exports = errorHandling