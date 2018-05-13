import HttpRequest from './HttpRequest'

class GetSupervisor extends HttpRequest {
    getSupervisorList() {
        return this.get('/users?type=supervisor')
    }
}

export default GetSupervisor