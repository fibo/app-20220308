import { API_BASEURL } from './environment'

export const endpoint = {
  layout: () => `${API_BASEURL}/layout`,
  pages: () => `${API_BASEURL}/pages`
}
