import { body, validationResult } from 'express-validator';

export const userValidationRules = () => {
    return [
        body('name')
            .not()
            .isEmpty()
            .withMessage('User name is required'),
        body('email')
            .not()
            .isEmpty()
            .withMessage('Email address is required')
            .normalizeEmail()
            .isEmail()
            .withMessage('Please provide valid email address'),
        body('password')
            .not()
            .isEmpty()
            .withMessage('Password is required')
            .isLength({ min: 6 })
            .withMessage('Password should be at least 6 characters')
    ];
}

export const relationshipValidationRules = () => {
    return [
        body('name')
            .not()
            .isEmpty()
            .withMessage('Relation name is required')
            .matches(/^[A-Za-z\s]+$/)
            .withMessage('Relation name must be alphabetic')
    ];
}

export const occupationValidationRules = () => {
    return [
        body('name')
            .not()
            .isEmpty()
            .withMessage('Occupation name is required')
            .matches(/^[A-Za-z\s]+$/)
            .withMessage('Occupation name must be alphabetic')
    ];
}

export const contactValidationRules = () => {
    return [
        body('name')
            .not()
            .isEmpty()
            .withMessage('Name is required'),
        body('email')
            .not()
            .isEmpty()
            .withMessage('Email address is required')
            .normalizeEmail()
            .isEmail()
            .withMessage('Please provide valid email address'),
        body('phoneNumber')
            .not()
            .isEmpty()
            .withMessage('Phone number is required')
            .matches(/^[0-9]+$/)
            .withMessage('Phone number must be numeric'),
        body('occupation')
            .not()
            .isEmpty()
            .withMessage('Occupation name is required'),
        body('relation')
            .not()
            .isEmpty()
            .withMessage('Relation name is required')
    ];
}

export const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        return next();
    }
    const extractedErrors = [];
    errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }));
    return res.status(422).json({ success: false, errors: extractedErrors });
}
