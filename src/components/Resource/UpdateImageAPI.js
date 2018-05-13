import HttpRequest from './HttpRequest'

class UpdateImageAPI extends HttpRequest {

    updateImage(url_image) {
        return this.put('/user', {
            url_image
        })
    }
}

export default UpdateImageAPI