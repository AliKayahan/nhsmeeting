export const USER_AUTH = 'USER_AUTH';

export const logIn = (id) => {
    return {
        type: USER_AUTH,
        userId: id
    }
}