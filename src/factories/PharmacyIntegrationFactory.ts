import { PharmacyIntegration } from '../integrations/PharmacyIntegration';

const baseAPIUrl = 'http://pharmacy-mock-service-env.eba-xzj3bbnm.us-east-1.elasticbeanstalk.com';

export function getPharmacyIntegration(pharmacyName: string) {
      return new PharmacyIntegration(`${baseAPIUrl}/${pharmacyName}`);
}