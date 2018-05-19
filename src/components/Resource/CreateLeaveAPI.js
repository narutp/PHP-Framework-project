import HttpRequest from './HttpRequest'

class CreateLeaveAPI extends HttpRequest {
    createLeaveForm(type, start_date, end_date) {
        return this.post('/leave', {
            type,
            start_date,
            end_date
        })
    }
}

export default CreateLeaveAPI