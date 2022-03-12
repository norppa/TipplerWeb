const apiUrl = 'http://localhost:3333'

const access = (username, password, isLogin) => {
    const url = apiUrl + (isLogin ? '/user/login' : '/user/register')
    const request = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            'Accept': 'application/json'
        },
        body: JSON.stringify({ username: username, password: password })
    }

    return fetch(url, request).then(processResponse)

}

const getCocktails = (token) => {
    const url = apiUrl + '/cocktail'
    const request = {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json;charset=UTF-8',
            'Accept': 'application/json'
        }
    }

    return fetch(url, request).then(processResponse)
}

const processResponse = async (response) => {
    if (response.status === 200) return await response.json()
    const errorCode = await result.text() ?? unknown
    return { error: errorMessages[errorCode] ?? errorCode }
}

const errorMessages = {
    INVALID_USERNAME_OR_PASSWORD: 'Invalid username or password.',
    SHORT_PASSWORD: 'The password is too short. Please use a longer password.',
    TAKEN_USERNAME: 'The username is taken. Please choose another username.',
    DATABASE_ERROR: 'Server Error. Please try again later.',
    unknown: 'A mysterious error has happened. This should not be possible.'
}

export default { access, getCocktails }