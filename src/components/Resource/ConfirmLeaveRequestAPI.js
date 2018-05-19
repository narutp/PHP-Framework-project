import HttpRequest from './HttpRequest'

class ConfirmLeaveRequestAPI extends HttpRequest {

    confirmLeave(leaveid) {
        this.post(`/leave/${leaveid}/approve`)
    }

    rejectLeave(leaveid) {
        this.post(`/leave/${leaveid}/reject`)
    }
}

export default ConfirmLeaveRequestAPI