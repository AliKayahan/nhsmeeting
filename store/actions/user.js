export const USER_AUTH = 'USER_AUTH';
/**
 * We should handle user data related actions in this file
 * The login is a sample for further development
 * @param {*} id 
 */
export const logIn = (id) => {
    return {
        type: USER_AUTH,
        userId: id
    }
}