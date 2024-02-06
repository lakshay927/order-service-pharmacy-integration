
import express from 'express';
import PharmacyController from '../controllers/PharmacyController';

const router = express.Router();

// Route to get a list of available pharmacies
router.get('/',  PharmacyController.getPharmacies);

export default router;
