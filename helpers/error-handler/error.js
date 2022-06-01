const handleError = (err, req, res, next) => {
    const { statusCode, message } = err;
    res.status(statusCode).json({ status: 0, statusCode, message });
}

export default handleError;
