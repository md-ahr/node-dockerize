import asyncHandler from '../middlewares/asyncHandler.js';
import User from '../models/User.js';
import * as Response from '../utils/response.js';
import verifyObjectId from '../utils/verifyObjectId.js';

export const getAllItems = asyncHandler(async(req, res, next) => {
    const items = await User.find().sort({ 'createdAt': -1 });
    if (!items.length) {
        return Response.responseError(res, 'User list not found');
    }
    return Response.responseSuccess(res, items);
});

export const getSingleItem = asyncHandler(async(req, res, next) => {
    if (!verifyObjectId(req.params.id)) {
        return Response.responseError(res, `Invalid id - ${req.params.id}`);
    } else {
        const item = await User.findById(req.params.id);
        if (!item) {
            return Response.responseError(res, `No user found with this id - ${req.params.id}`);
        }
        return Response.responseSuccess(res, item);
    }
});

export const updateItem = asyncHandler(async(req, res, next) => {
    if (!verifyObjectId(req.params.id)) {
        return Response.responseError(res, `Invalid id - ${req.params.id}`);
    } else {
        const item = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!item) {
            return Response.responseError(res, `No user found with this id - ${req.params.id}`);
        }
        return Response.responseSuccess(res, item, 200, 'User updated successfully');
    }
});

export const changePassword = asyncHandler(async(req, res, next) => {
    if (!verifyObjectId(req.params.id)) {
        return Response.responseError(res, `Invalid id - ${req.params.id}`);
    } else {
        // const item = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        // if (!item) {
        //     return Response.responseError(res, `No user found with this id - ${req.params.id}`);
        // }
        // return Response.responseSuccess(res, item, 200, 'Password updated successfully');
        return res.status(200).json({ status: 'pending', message: 'Password updated successfully' });
    }
});

export const deleteItem = asyncHandler(async(req, res, next) => {
    if (!verifyObjectId(req.params.id)) {
        return Response.responseError(res, `Invalid id - ${req.params.id}`);
    } else {
        const item = await User.findByIdAndDelete(req.params.id);
        if (!item) {
            return Response.responseError(res, `No item found with this id - ${req.params.id}`);
        }
        return Response.responseSuccess(res, item, 200, 'User deleted successfully');
    }
});
