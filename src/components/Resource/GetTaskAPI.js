import HttpRequest from './HttpRequest'

class GetTaskAPI extends HttpRequest {
    getTask() {
        return this.get('/supervisor/tasks')
    }

    getSubordinateTask() {
        return this.get('/task/incomplete')
    }
}

export default GetTaskAPI