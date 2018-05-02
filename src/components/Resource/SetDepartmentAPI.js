import HttpRequest from './HttpRequest'

class SetDepartmentAPI extends HttpRequest {

    setDepartment(id, department) {
        return this.put('/user/set_department', {
            id,
            department
        })
    }
}

export default SetDepartmentAPI