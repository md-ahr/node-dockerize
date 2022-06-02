import Education from '../models/Education.js';
import asyncHandler from '../middlewares/asyncHandler.js';
import verifyObjectId from '../utils/verifyObjectId.js';
import * as Response from '../utils/response.js'

export const getAllLists = asyncHandler(async(req, res, next) => {
    const items = await Education.find().sort({ 'createdAt': -1 });
    if (!items.length) {
        return Response.responseError(res, 'Item list not found');
    }
    return Response.responseSuccess(res, items);
});

export const getSingleItem = asyncHandler(async(req, res, next) => {
    if (!verifyObjectId(req.params.id)) {
        return Response.responseError(res, `Invalid id - ${req.params.id}`);
    } else {
        const item = await Education.findById(req.params.id);
        if (!item) {
            return Response.responseError(res, `No item found with this id - ${req.params.id}`);
        }
        return Response.responseSuccess(res, item);
    }
});

export const createItem = asyncHandler(async(req, res, next) => {
    const item = new Education(req.body);
    const createdItem = await item.save();
    if (!createdItem) {
        return Response.responseError(res, 'Education save failed', 500);
    }
    return Response.responseSuccess(res, item, 201, 'Education save successfully');
});

export const updateItem = asyncHandler(async(req, res, next) => {
    if (!verifyObjectId(req.params.id)) {
        return Response.responseError(res, `Invalid id - ${req.params.id}`);
    } else {
        const item = await Education.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!item) {
            return Response.responseError(res, `No item found with this id - ${req.params.id}`);
        }
        return Response.responseSuccess(res, item, 200, 'Education updated successfully');
    }
});

export const deleteItem = asyncHandler(async(req, res, next) => {
    if (!verifyObjectId(req.params.id)) {
        return Response.responseError(res, `Invalid id - ${req.params.id}`);
    } else {
        const item = await Education.findByIdAndDelete(req.params.id);
        if (!item) {
            return Response.responseError(res, `No item found with this id - ${req.params.id}`);
        }
        return Response.responseSuccess(res, item, 200, 'Education deleted successfully');
    }
});
