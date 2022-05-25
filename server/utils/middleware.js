const requestLogger = (request, response, next) => {
    console.log("Method:", request.method)
    console.log("Path:  ", request.path)
    console.log("Body:  ", request.body)
    console.log("---")
    next()
}

const unknownRequest = (request, response) => {
    response.status(404).send({ error: "unknown request" })
}

const errorHandler = (error, req, res, next) => {
    switch (error.name) {
    case "CastError": return res.status(400).send({ error: error.message })
    case "ValidationError": return res.status(400).json({ error: error.message })
    }

    next(error)
}

module.exports = {
    requestLogger,
    unknownRequest,
    errorHandler
}