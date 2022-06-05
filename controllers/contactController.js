import asyncHandler from '../middlewares/asyncHandler.js';
import Contact from '../models/Contact.js';
import * as Response from '../utils/response.js';
import verifyObjectId from '../utils/verifyObjectId.js';

export const getAllItems = asyncHandler(async(req, res, next) => {
    const items = await Contact.find().sort({ 'createdAt': -1 });
    if (!items.length) {
        return Response.responseError(res, 'Item list not found');
    }
    return Response.responseSuccess(res, items);
});

export const getSingleItem = asyncHandler(async(req, res, next) => {
    if (!verifyObjectId(req.params.id)) {
        return Response.responseError(res, `Invalid id - ${req.params.id}`);
    } else {
        const item = await Contact.findById(req.params.id);
        if (!item) {
            return Response.responseError(res, `No item found with this id - ${req.params.id}`);
        }
        return Response.responseSuccess(res, item);
    }
});

export const createItem = asyncHandler(async(req, res, next) => {
    const isName = await Contact.findOne({ name: req.body.name });
    const isEmail = await Contact.findOne({ email: req.body.email });
    const isPhoneNumber = await Contact.findOne({ phoneNumber: req.body.phoneNumber });
    if (isName?.name === req.body.name) {
        return Response.responseError(res, 'Name is already exists, please try another name', 409);
    }
    if (isEmail?.email === req.body.email) {
        return Response.responseError(res, 'Email is already exists, please try another name', 409);
    }
    if (Number(isPhoneNumber?.phoneNumber) === req.body.phoneNumber) {
        return Response.responseError(res, 'Phone number is already exists, please try another name', 409);
    }
    const item = new Contact(req.body);
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
        const isName = await Contact.findOne({ name: req.body.name });
        const isEmail = await Contact.findOne({ email: req.body.email });
        const isPhoneNumber = await Contact.findOne({ phoneNumber: req.body.phoneNumber });
        if (isName?.name === req.body.name) {
            return Response.responseError(res, 'Name is already exists, please try another name', 409);
        }
        if (isEmail?.email === req.body.email) {
            return Response.responseError(res, 'Email is already exists, please try another name', 409);
        }
        if (isPhoneNumber?.phoneNumber === req.body.phoneNumber) {
            return Response.responseError(res, 'Phone number is already exists, please try another name', 409);
        }
        const item = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
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
        const item = await Contact.findByIdAndDelete(req.params.id);
        if (!item) {
            return Response.responseError(res, `No item found with this id - ${req.params.id}`);
        }
        return Response.responseSuccess(res, item, 200, 'Item deleted successfully');
    }
});
