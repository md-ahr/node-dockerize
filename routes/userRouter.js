import express from 'express';
import * as User from '../controllers/userController.js';
import protect from '../middlewares/authorization.js';

const router = express.Router();

router.get('/', protect, User.getAllItems);
router.get('/:id', protect, User.getSingleItem);
router.patch('/:id', protect, User.updateItem);
router.patch('/:id/change-password', protect, User.changePassword);
router.delete('/:id', protect, User.deleteItem);

export default router;