import axios from 'axios'

class ApiClient {
  apiName = ''

  async getCountries() {
    return axios.get(this.apiName)
  }
}

export const DataProvider = new ApiClient()
