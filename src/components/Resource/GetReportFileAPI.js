import HttpRequest from './HttpRequest'

class GetReportFileAPI extends HttpRequest {
  getReportFile() {
    return this.get('/export-data')
  }
}

export default GetReportFileAPI