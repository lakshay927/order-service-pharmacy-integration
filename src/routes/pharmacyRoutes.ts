// src/routes/pharmacyRoutes.ts

import express from 'express';
import PharmacyController from '../controllers/PharmacyController';

const router = express.Router();

// Route to create a new order for a specific pharmacy
router.post('/:pharmacyName/orders', (req, res) => PharmacyController.createOrder(req, res));

// Route to get all orders from a specific pharmacy
router.get('/:pharmacyName/orders', (req, res) => PharmacyController.getOrders(req, res));

// Route to get a specific order by ID from a specific pharmacy
router.get('/:pharmacyName/orders/:orderId', (req, res) => PharmacyController.getOrderById(req, res));

export default router;
