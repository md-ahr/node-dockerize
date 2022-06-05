import express from 'express';
import * as Contact from '../controllers/contactController.js';
import {
    contactValidationRules as validationRules,
    validate
} from '../middlewares/validators/schemaValidators.js';

const router = express.Router();

router.get('/', Contact.getAllItems);
router.get('/:id', Contact.getSingleItem);
router.post('/', validationRules(), validate, Contact.createItem);
router.patch('/:id', validationRules(), validate, Contact.updateItem);
router.delete('/:id', Contact.deleteItem);

export default router;
