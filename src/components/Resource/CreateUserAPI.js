import HttpRequest from './HttpRequest'

class CreateUserAPI extends HttpRequest {
    
    createUser(name, email, password, lineid, address, is_admin, type, phone_number, facebook) {
        return this.post('/user', {
            name,
            email,
            password,
            lineid,
            is_admin,
            type,
            address,
            facebook,
            phone_number

        })
    }
}

export default CreateUserAPI