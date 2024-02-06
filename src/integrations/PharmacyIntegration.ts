import axios from 'axios';
import { IPharmacyIntegration, IPharmacyOrderPayload } from "./IPharmacyIntegration";

export class PharmacyIntegration implements IPharmacyIntegration {
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  async createOrder(payload: IPharmacyOrderPayload): Promise<any> {
    return axios.post(`${this.baseURL}/orders`, payload).then(res => res.data);
  }

  async getOrders(): Promise<any> {
    return axios.get(`${this.baseURL}/orders`).then(res => res.data);
  }

  async getOrderById(orderId: string): Promise<any> {
    return axios.get(`${this.baseURL}/orders/${orderId}`).then(res => res.data);
  }
}
