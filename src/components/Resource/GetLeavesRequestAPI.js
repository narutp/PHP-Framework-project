import HttpRequest from './HttpRequest'

class GetLeavesRequest extends HttpRequest {
    getLeavesRequest() {
        return this.get('/leaves')
    }
}

export default GetLeavesRequest 