import HttpRequest from './HttpRequest'

class SetHierarchyAPI extends HttpRequest {

    setHierarchy(supervisor_id, user_id) {
        return this.put('/user/set_hierarchy', {
            supervisor_id,
            user_id
        })
    }
}

export default SetHierarchyAPI