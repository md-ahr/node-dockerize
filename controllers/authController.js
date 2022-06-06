import asyncHandler from '../middlewares/asyncHandler.js';
import User from '../models/User.js';
import * as Response from '../utils/response.js';

export const register = asyncHandler(async(req, res, next) => {
    const isName = await User.findOne({ name: req.body.name });
    const isEmail = await User.findOne({ email: req.body.email });
    if (isName?.name === req.body.name) {
        return Response.responseError(res, 'Name is already exists, please try another name', 409);
    }
    if (isEmail?.email === req.body.email) {
        return Response.responseError(res, 'Email is already exists, please try another name', 409);
    }
    const user = new User(req.body);
    const createdUser = await user.save();
    if (!createdUser) {
        return Response.responseError(res, 'User registration failed', 500);
    }
    return Response.responseSuccess(res, user, 201, 'User created successfully');
});

export const login = asyncHandler(async(req, res, next) => {
    
});
