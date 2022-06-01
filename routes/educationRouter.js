import express from 'express';
import {
    educationValidationRules as validationRules,
    validate
} from '../middlewares/validators/schemaValidators.js';
import {
    getAllLists,
    getSingleItem,
    createItem,
    updateItem,
    deleteItem
} from '../controllers/educationController.js';

const router = express.Router();

router.get('/', getAllLists);
router.get('/:id', getSingleItem);
router.post('/', validationRules(), validate, createItem);
router.patch('/:id', validationRules(), validate, updateItem);
router.delete('/:id', deleteItem);

export default router;
