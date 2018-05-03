import HttpRequest from './HttpRequest'

class GetLeavesRequest extends HttpRequest {
    getLeavesRequest() {
        return this.get('/leaves')
    }

    getSubordinateLeaves() {
        return this.get('/supervisor/leaves')
    }
}

export default GetLeavesRequest 