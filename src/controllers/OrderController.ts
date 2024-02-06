import { Request, Response } from "express";
import { getPharmacyIntegration } from "../factories/PharmacyIntegrationFactory";
import { IPharmacyOrderPayload } from "../integrations/IPharmacyIntegration";

export class OrderController {
  async createOrder(req: Request, res: Response): Promise<void> {
    const pharmacyName = req.params.pharmacyName;
    const payload: IPharmacyOrderPayload = req.body;

    try {
      const pharmacyIntegration = getPharmacyIntegration(pharmacyName);
      const result = await pharmacyIntegration.createOrder(payload);
      res.status(201).json(result);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      } else {
        res.status(500).json({ message: "An unknown error occurred." });
      }
    }
  }

  async getOrders(req: Request, res: Response): Promise<void> {
    const pharmacyName = req.params.pharmacyName;

    try {
      const pharmacyIntegration = getPharmacyIntegration(pharmacyName);
      const result = await pharmacyIntegration.getOrders();
      res.status(200).json(result);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      } else {
        res.status(500).json({ message: "An unknown error occurred." });
      }
    }
  }

  async getOrderById(req: Request, res: Response): Promise<void> {
    const pharmacyName = req.params.pharmacyName;
    const orderId = req.params.orderId;

    try {
      const pharmacyIntegration = getPharmacyIntegration(pharmacyName);
      const result = await pharmacyIntegration.getOrderById(orderId);
      if (result) {
        res.status(200).json(result);
      } else {
        res.status(404).json({ message: "Order not found." });
      }
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      } else {
        res.status(500).json({ message: "An unknown error occurred." });
      }
    }
  }
}

export default new OrderController();
