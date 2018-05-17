import HttpRequest from './HttpRequest'

class ManageUserAPI extends HttpRequest {
    
    manageUser(id, type) {
        return this.put('/user/set_role', {
            id,
            type
        })
    }
}

export default ManageUserAPI