import HttpRequest from './HttpRequest'

class GetReportFileAPI extends HttpRequest {
  getReportFile() {
    return this.get('/export-data', {}, 'blob')
  }
}

export default GetReportFileAPI