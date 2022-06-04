import express from 'express';
import {
    occupationValidationRules as validationRules,
    validate
} from '../middlewares/validators/schemaValidators.js';
import {
    getAllItems,
    getSingleItem,
    createItem,
    updateItem,
    deleteItem
} from '../controllers/occupationController.js';

const router = express.Router();

router.get('/', getAllItems);
router.get('/:id', getSingleItem);
router.post('/', validationRules(), validate, createItem);
router.patch('/:id', validationRules(), validate, updateItem);
router.delete('/:id', deleteItem);

export default router;
