import express from 'express';
import {
    relationshipValidationRules as validationRules,
    validate
} from '../middlewares/validators/schemaValidators.js';
import {
    getAllItems,
    getSingleItem,
    createItem,
    updateItem,
    deleteItem
} from '../controllers/relationshipController.js';

const router = express.Router();

router.get('/', getAllItems);
router.get('/:id', getSingleItem);
router.post('/', validationRules(), validate, createItem);
router.patch('/:id', validationRules(), validate, updateItem);
router.delete('/:id', deleteItem);

export default router;
