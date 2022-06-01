import { body, validationResult } from 'express-validator';

export const validationRules = () => {
    return [
        body('name').not().isEmpty(),
        body('subject').not().isEmpty(),
        body('passingYear').not().isEmpty().isNumeric(),
        body('grade').not().isEmpty().isNumeric(),
        body('location').not().isEmpty()
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
