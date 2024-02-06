
interface HealthMartCustomerInfo {
    healthMartCustName: string;
    healthMartCustAddress: string;
    healthMartCustCity: string;
    healthMartCustState: string;
    healthMartCustZipcode: string;
    healthMartCustCountry: string;
  }
  
  export interface HealthMartOrderPayload {
    healthMartProduct: string;
    healthMartQuantity: number;
    healthMartCustomerInfo: HealthMartCustomerInfo;
  }
  
  interface CarePlusClientInfo {
    carePlusClientName: string;
    carePlusClientAddress: string;
    carePlusClientCity: string;
    carePlusClientState: string;
    carePlusClientZipcode: string;
    carePlusClientCountry: string;
  }
  
  export interface CarePlusOrderPayload {
    carePlusProduct: string;
    carePlusQuantity: number;
    carePlusClientInfo: CarePlusClientInfo;
  }
  
  interface QuickCareUserData {
    quickCareUserName: string;
    quickCareUserAddress: string;
    quickCareUserCity: string;
    quickCareUserState: string;
    quickCareUserZipcode: string;
    quickCareUserCountry: string;
  }
  
  export interface QuickCareOrderPayload {
    quickCareProduct: string;
    quickCareQuantity: number;
    quickCareUserData: QuickCareUserData;
  }
  