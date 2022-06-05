import express from 'express';
import * as Relationship from '../controllers/relationshipController.js';
import {
    relationshipValidationRules as validationRules,
    validate
} from '../middlewares/validators/schemaValidators.js';

const router = express.Router();

router.get('/', Relationship.getAllItems);
router.get('/:id', Relationship.getSingleItem);
router.post('/', validationRules(), validate, Relationship.createItem);
router.patch('/:id', validationRules(), validate, Relationship.updateItem);
router.delete('/:id', Relationship.deleteItem);

export default router;
