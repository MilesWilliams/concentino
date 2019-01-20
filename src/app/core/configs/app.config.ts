import { AppConfig } from '../interfaces/app-config.interface';

import { environment } from '../../../environments/environment';

/**
 * Set the applications production and develelopment tokens
 * Note: If the app has only one token, remove the developement token as this is optional.
 */
const production_token: string = '4f1b4648b095382ccf64e2f0e89c2d6f';
const development_token: string = 'f144b7e57cdf3101f92eae1aed871f04';

export const App: AppConfig = {
	cdn_domain: 'https://s3-eu-west-1.amazonaws.com/klaritycdn/thrifty/fleet',
	api_domain: 'https://phoenix.klaritysystems.co.za/rest/v2',
	site_name: 'Phoenix Admin',
	maintenance_mode: false,
	production: environment.production,
	allowed_user_types: [1],
};
