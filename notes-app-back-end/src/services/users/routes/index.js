import { Router } from 'express';
import { createUser, getUserById, getUsersByUsername } from '../controller/user-controller.js';
import { validate } from '../../../middlewares/validate.js';
import { userPayloadSchema } from '../../../services/users/validator/schema.js';

const router = Router();

router.post('/users', validate(userPayloadSchema), createUser);
router.get('/users/:id', getUserById);
router.get('/users', getUsersByUsername);

export default router;