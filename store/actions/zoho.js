export const REFRESH_TOKEN = "REFRESH_TOKEN";

/**
 * Returns back-end access token
 * Access token expires in 60 minutes
 */

export const getToken = () => {
    return {
        type: REFRESH_TOKEN
    }
}