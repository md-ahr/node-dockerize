import express from 'express';
import * as Occupation from '../controllers/occupationController.js';
import {
    occupationValidationRules as validationRules,
    validate
} from '../middlewares/validators/schemaValidators.js';

const router = express.Router();

router.get('/', Occupation.getAllItems);
router.get('/:id', Occupation.getSingleItem);
router.post('/', validationRules(), validate, Occupation.createItem);
router.patch('/:id', validationRules(), validate, Occupation.updateItem);
router.delete('/:id', Occupation.deleteItem);

export default router;
