import { Router } from 'express';
import { uploadImages } from '../controller/upload-controller.js';
import authenticateToken from '../../../middlewares/auth.js';
import { upload } from '../storage/storage-config.js';

const router = Router();

router.post('/upload/images', authenticateToken, upload.single('image'), uploadImages);

export default router; 