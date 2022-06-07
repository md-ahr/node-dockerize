import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import * as Response from '../utils/response.js';
import asyncHandler from './asyncHandler.js';

const protect = asyncHandler(async(req, res, next) => {
    let token = '';
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
        try {
            const decode = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decode.id).select('-password');
            next();
        } catch (error) {
            return Response.responseError(res, 'User not authorized', 401);
        }
    } else {
        return Response.responseError(res, 'Unauthorized user, no token found', 401);
    }
});

export default protect;
