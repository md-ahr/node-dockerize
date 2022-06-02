export const responseError = (res, message, code = 404, errors = [], status = false) => {
    return res.status(code).json({ status, message, errors });
}

export const responseSuccess = (res, data, code = 200, message = '', status = true) => {
    return res.status(code).json({ status, message, count: data.length, data });
}
