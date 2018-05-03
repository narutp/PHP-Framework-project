import HttpRequest from './HttpRequest'

class GetColleagueAPI extends HttpRequest {
    getColleague() {
        return this.get('/user/colleague')
    }
}

export default GetColleagueAPI