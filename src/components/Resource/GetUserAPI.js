import HttpRequest from './HttpRequest'

class GetUserAPI extends HttpRequest {

    getUser() {
        return this.get('/user')
    }
}

export default GetUserAPI