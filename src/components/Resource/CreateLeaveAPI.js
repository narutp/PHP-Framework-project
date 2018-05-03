import HttpRequest from './HttpRequest'

class CreateLeaveAPI extends HttpRequest {
    createLeaveForm(type, start_date, end_date, substitute_id) {
        this.post('/leave', {
            type,
            start_date,
            end_date,
            substitute_id
        })
    }
}

export default CreateLeaveAPI