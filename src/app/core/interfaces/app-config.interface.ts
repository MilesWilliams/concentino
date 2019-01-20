

/**
 * @export
 * @interface AppConfig
 * @description the applications main config interface
 */
export interface AppConfig {
	/*
    * the base restfull endpoint url.
    */
	api_domain: string;
	/*
    * the apps authentication token for use within the auth-interceptor.
    */
	auth_token?: string;
	/*
    * the base cdn domain url if there is one.
    */
	cdn_domain?: string;
	/*
    * is the site in production or developement.
    */
	production: boolean;
	/*
    * set to true to turn maintenance mode on.
    */
	maintenance_mode: boolean;
	/*
    * the apps name.
    */
	site_name: string;
	/*
    * specify which user types can log into the app.
    * Used within the auth effect.
    */
	allowed_user_types: number[];
}
