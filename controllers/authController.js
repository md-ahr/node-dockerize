import asyncHandler from '../middlewares/asyncHandler.js';
import User from '../models/User.js';
import generateToken from '../utils/generateToken.js';
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
    const { email, password } = req.body;
    const userInfo = await User.findOne({ email: email });
    if (userInfo && (await userInfo.matchPassword(password))) {
        const { _id, name, email, profilePic } = userInfo;
        const body = {
            user: { _id, name, email, profilePic },
            token: generateToken(userInfo._id),
        };
        return Response.responseSuccess(res, body, 200, 'User logged in successfully');
    } else {
        return Response.responseError(res, 'Invalid email or password', 401);
    }
});
