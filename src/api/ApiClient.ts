import axios from 'axios'

class ApiClient {
  apiName = 'http://localhost:9000'
  search = '/search'

  async getAllUniversities() {
    return axios.get(this.apiName + '' + this.search)
  }
  async getUniversitiesBySearch() {
    return axios.get(this.apiName + '' + this.search)
  }
}

export const DataProvider = new ApiClient()
