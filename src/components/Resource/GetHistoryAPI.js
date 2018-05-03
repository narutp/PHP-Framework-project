import HttpRequest from './HttpRequest'

class GetHistoryAPI extends HttpRequest {
    getHistory() {
        return this.get('/supervisor/leaves')
    }
}

export default GetHistoryAPI