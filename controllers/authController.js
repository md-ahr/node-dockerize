import asyncHandler from '../middlewares/asyncHandler.js';
import User from '../models/User.js';
import * as Response from '../utils/response.js';

export const register = asyncHandler(async(req, res, next) => {
    // const data = await User.findOne({ name: req.body.name });
    // if (data?.name === req.body.name) {
    //     return Response.responseError(res, 'Given name is already exists, please try another name', 409);
    // }
    const item = new User(req.body);
    const createdItem = await item.save();
    if (!createdItem) {
        return Response.responseError(res, 'User registration failed', 500);
    }
    return Response.responseSuccess(res, item, 201, 'User created successfully');
});

export const login = asyncHandler(async(req, res, next) => {
    
});
