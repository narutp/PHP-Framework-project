import HttpRequest from './HttpRequest'

class EditUserAPI extends HttpRequest {

    editUser(name, address, facebook, phone_number) {
        return this.put('/user', {
            name,
            address,
            facebook,
            phone_number
        })
    }
}

export default EditUserAPI