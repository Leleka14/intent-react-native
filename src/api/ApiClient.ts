import axios from 'axios'
import { IUniversity } from '../types/universities'

class ApiClient {
  apiName = 'http://localhost:9000'
  search = '/search'

  async getUniversitiesByCountryOrSearch(
    params: ISearchUniversityQueryParams,
  ): Promise<IUniversitiesResponse> {
    return axios.get(this.apiName + '' + this.search, {
      params,
    })
  }
}

export const DataProvider = new ApiClient()

export interface IUniversitiesResponse {
  data: Array<IUniversity>
}

export interface ISearchUniversityQueryParams {
  country?: string
  name?: string
}
