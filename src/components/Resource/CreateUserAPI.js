import HttpRequest from './HttpRequest'

class CreateUserAPI extends HttpRequest {
    
    createUser(name, email, password, lineid, address, is_admin, type, phone_number, facebook) {
      console.log('ININ')
        return this.post('/user', {
            name,
            email,
            password,
            lineid,
            address,
            is_admin,
            type,
            phone_number,
            facebook

        })
    }
}

export default CreateUserAPI