
export interface IPharmacyOrderPayload {
  product: string;
  quantity: number;
  customerInfo: {
    name: string;
    address: string;
    city: string;
    state: string;
    zipcode: string;
    country: string;
  };
}

export interface IPharmacyIntegration {
  createOrder(payload: IPharmacyOrderPayload): Promise<any>;
  getOrders(): Promise<any>;
  getOrderById(orderId: string): Promise<any>;
}