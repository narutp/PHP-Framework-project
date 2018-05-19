import HttpRequest from './HttpRequest'

class TransferTaskAPI extends HttpRequest {

    transferTask(taskId, id) {
        return this.post(`/task/${taskId}/reassign/${id}`)
    }
}

export default TransferTaskAPI