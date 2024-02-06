// src/routes/pharmacyRoutes.ts

import express from 'express';
import OrderController from '../controllers/OrderController';

const router = express.Router();

// Route to create a new order for a specific pharmacy
router.post('/:pharmacyName/orders',  OrderController.createOrder);

// Route to get all orders from a specific pharmacy
router.get('/:pharmacyName/orders',  OrderController.getOrders);

// Route to get a specific order by ID from a specific pharmacy
router.get('/:pharmacyName/orders/:orderId',  OrderController.getOrderById);

export default router;
