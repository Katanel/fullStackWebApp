import Api from './Api'

export default {
    register(credentials) {
        return Api().post('register', credentials)
    }
}

// AuthenticationService.register({
// email : 'testemail@gNel.com',
// password: '123456'
// })