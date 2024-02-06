import { Request, Response } from 'express';

export class PharmacyController {
  
  async getPharmacies(req: Request, res: Response): Promise<void> {
    try {
        const pharmacies = [
            { name: 'HealthMart', description: 'HealthMart Pharmacy' },
            { name: 'CarePlus', description: 'CarePlus Pharmacy' },
            { name: 'QuickCare', description: 'QuickCare Pharmacy' }
        ];
        res.json(pharmacies);
    } catch (error) {
        res.status(500).send('Failed to fetch pharmacies');
    }
}
}

export default new PharmacyController();
