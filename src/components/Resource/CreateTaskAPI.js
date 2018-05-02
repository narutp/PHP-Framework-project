import HttpRequest from './HttpRequest'

class CreateTaskAPI extends HttpRequest {
    
    createTask(task_name, description, start_date, end_date, assignee_id) {
        return this.post('/create_task', {
            task_name,
            description,
            start_date,
            end_date,
            assignee_id,
        })
        // return this.get('/test')
    }
}

export default CreateTaskAPI