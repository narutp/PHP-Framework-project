import HttpRequest from './HttpRequest'

class GetReportFileAPI extends HttpRequest {
  getReportFile() {
    return this.get('/export-data', { responseType: 'blob' })
  }
}

export default GetReportFileAPI