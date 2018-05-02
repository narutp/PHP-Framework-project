import HttpRequest from './HttpRequest'

class GetSubordinate extends HttpRequest {
    getSubordinateList() {
        return this.get('/user/subordinates')
    }
}

export default GetSubordinate