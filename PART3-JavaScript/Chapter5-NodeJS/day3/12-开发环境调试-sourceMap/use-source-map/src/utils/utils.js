export function checkUsername(username) {
    return username.length >= 8
}

export function checkPassword(password) {
    return password.length >= 6
}

export default {
    checkUsername,
    checkPassword
}