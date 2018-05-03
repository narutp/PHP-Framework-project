import HttpRequest from './HttpRequest'

class GetUsersAPI extends HttpRequest {

    getUsers() {
        return this.get('/users')
    }
}

export default GetUsersAPI