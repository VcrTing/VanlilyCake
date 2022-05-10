
const TEST = false

// const baseURL = 'https://strapi07.svr.up5d.com'
const baseURL = 'http://127.0.0.1:1337'
const API = baseURL // + '/api'

const ENDPOINT = {
  user: '/users',
}

const STRAPI = {
  named: 'strapi-admin@gmail.com',
  pass: '1Qazxc2Wsxcv'
}

export default {
  baseURL,
  API,

  TEST,
  STRAPI,
  ENDPOINT
}
