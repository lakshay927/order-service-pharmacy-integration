import { PharmacyIntegration } from '../integrations/PharmacyIntegration';

const baseAPIUrl = 'http://pharmacy-mock-service-env.eba-xzj3bbnm.us-east-1.elasticbeanstalk.com';

export function getPharmacyIntegration(pharmacyName: string) {
  switch (pharmacyName) {
    case 'HealthMart':
      return new PharmacyIntegration(`${baseAPIUrl}/healthmart`);
    case 'CarePlus':
      return new PharmacyIntegration(`${baseAPIUrl}/careplus`);
    case 'QuickCare':
      return new PharmacyIntegration(`${baseAPIUrl}/quickcare`);
    default:
      throw new Error('Unsupported pharmacy');
  }
}