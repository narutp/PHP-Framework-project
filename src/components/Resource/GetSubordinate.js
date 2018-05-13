import HttpRequest from './HttpRequest'

class GetSubordinate extends HttpRequest {
    getSubordinateList() {
        return this.get('/users?type=subordinate')
    }
}

export default GetSubordinate