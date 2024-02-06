import { Request, Response } from 'express';
import { getPharmacyIntegration } from '../../src/factories/PharmacyIntegrationFactory';
import OrderController from '../../src/controllers/OrderController';

jest.mock('../../src/factories/PharmacyIntegrationFactory');

describe('OrderController', () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let mockSend: jest.Mock;

  beforeEach(() => {
    mockSend = jest.fn();
    mockRequest = {};
    mockResponse = {
      status: jest.fn().mockReturnThis(),
      send: mockSend,
      json: jest.fn().mockReturnThis()
    };
  });

  it('should create an order and return success', async () => {
    const payload = { product: "Test", quantity: 1, customerInfo: { name: "Test User" } };
    mockRequest.body = payload;
    mockRequest.params = { pharmacyName: 'HealthMart' };

    (getPharmacyIntegration as jest.Mock).mockImplementation(() => ({
      createOrder: jest.fn().mockResolvedValue({ orderId: '123', status: 'success' }),
    }));

    await OrderController.createOrder(mockRequest as Request, mockResponse as Response);

    expect(mockResponse.status).toHaveBeenCalledWith(201);
    expect(mockResponse.json).toHaveBeenCalledWith({ orderId: '123', status: 'success' });
  });

  it('should handle errors when creating an order', async () => {
    mockRequest.body = { product: "Test", quantity: 1, customerInfo: { name: "Test User" } };
    mockRequest.params = { pharmacyName: 'HealthMart' };

    (getPharmacyIntegration as jest.Mock).mockImplementation(() => ({
      createOrder: jest.fn().mockRejectedValue(new Error('Failed to create order')),
    }));

    await OrderController.createOrder(mockRequest as Request, mockResponse as Response);

    expect(mockResponse.status).toHaveBeenCalledWith(500);
    expect(mockResponse.json).toHaveBeenCalledWith({ message: 'Failed to create order' });
  });
});
