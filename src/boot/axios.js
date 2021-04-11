import Vue from 'vue'
import axios from 'axios'

const axiosConfig = axios.create({
    baseURL: 'https://api.nasa.gov/mars-photos/api/v1/',
    params: {
      api_key: 'xdabsUDBC2SwNyqfVyNPQDCt3QfJEjs6e3HDRDZH'
    }
  }
)

Vue.prototype.$axios = axiosConfig
