import HttpRequest from './HttpRequest'

class UpdateImageAPI extends HttpRequest {

    updateImage(url_image) {
        return this.put('/user', {
          profile_picture : url_image
        })
    }
}

export default UpdateImageAPI