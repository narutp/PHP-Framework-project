import HttpRequest from './HttpRequest'

class GetTaskAPI extends HttpRequest {
    getTask() {
        return this.get('/supervisor/tasks')
    }
}

export default GetTaskAPI