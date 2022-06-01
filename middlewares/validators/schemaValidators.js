import { body, validationResult } from 'express-validator';

export const educationValidationRules = () => {
    return [
        body('name')
            .not()
            .isEmpty()
            .withMessage('Institute name is required'),
        body('subject')
            .not()
            .isEmpty()
            .withMessage('Department name is required'),
        body('passingYear')
            .isNumeric()
            .withMessage('Passing year must be a number'),
        body('grade')
            .isNumeric()
            .withMessage('Grade point must be a number'),
        body('location')
            .not()
            .isEmpty()
            .withMessage('Institute location is required')
    ];
}

export const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        return next();
    }
    const extractedErrors = [];
    errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }));
    return res.status(422).json({ errors: extractedErrors });
}
