import { body, validationResult } from 'express-validator';

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

export const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        return next();
    }
    const extractedErrors = [];
    errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }));
    return res.status(422).json({ success: false, errors: extractedErrors });
}
