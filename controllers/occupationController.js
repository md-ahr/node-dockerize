import Occupation from '../models/Occupation.js';
import asyncHandler from '../middlewares/asyncHandler.js';
import verifyObjectId from '../utils/verifyObjectId.js';
import * as Response from '../utils/response.js'

export const getAllItems = asyncHandler(async(req, res, next) => {
    const items = await Occupation.find().sort({ 'createdAt': -1 });
    if (!items.length) {
        return Response.responseError(res, 'Item list not found');
    }
    return Response.responseSuccess(res, items);
});

export const getSingleItem = asyncHandler(async(req, res, next) => {
    if (!verifyObjectId(req.params.id)) {
        return Response.responseError(res, `Invalid id - ${req.params.id}`);
    } else {
        const item = await Occupation.findById(req.params.id);
        if (!item) {
            return Response.responseError(res, `No item found with this id - ${req.params.id}`);
        }
        return Response.responseSuccess(res, item);
    }
});

export const createItem = asyncHandler(async(req, res, next) => {
    const data = await Occupation.findOne({ name: req.body.name });
    if (data?.name === req.body.name) {
        return Response.responseError(res, 'Given name is already exists, please try another name', 409);
    }
    const item = new Occupation(req.body);
    const createdItem = await item.save();
    if (!createdItem) {
        return Response.responseError(res, 'Item save failed', 500);
    }
    return Response.responseSuccess(res, item, 201, 'Item save successfully');
});

export const updateItem = asyncHandler(async(req, res, next) => {
    if (!verifyObjectId(req.params.id)) {
        return Response.responseError(res, `Invalid id - ${req.params.id}`);
    } else {
        const data = await Occupation.findOne({ name: req.body.name });
        if (data?.name === req.body.name) {
            return Response.responseError(res, 'Given name is already exists, please try another name', 409);
        }
        const item = await Occupation.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!item) {
            return Response.responseError(res, `No item found with this id - ${req.params.id}`);
        }
        return Response.responseSuccess(res, item, 200, 'Item updated successfully');
    }
});

export const deleteItem = asyncHandler(async(req, res, next) => {
    if (!verifyObjectId(req.params.id)) {
        return Response.responseError(res, `Invalid id - ${req.params.id}`);
    } else {
        const item = await Occupation.findByIdAndDelete(req.params.id);
        if (!item) {
            return Response.responseError(res, `No item found with this id - ${req.params.id}`);
        }
        return Response.responseSuccess(res, item, 200, 'Item deleted successfully');
    }
});
