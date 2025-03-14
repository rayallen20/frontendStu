const url = 'https://hmajax.itheima.net/api/register'

export function makeOption(username, password) {
    const data = {
        username,
        password
    }

    const option = {
        url,
        method: 'post',
        data,
        headers: {
            'content-type': 'application/json'
        }
    }

    return option
}

export default {
    makeOption
}