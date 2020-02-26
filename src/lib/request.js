import Vue from 'vue'
import axios from 'axios'
import { baseURL } from './api'

const http = axios.create({
  baseURL,
  timeout: 60000
})

Vue.prototype.$http = async options => {
  const response = await http(options)
  const { data, error } = handleResponse(response)
  if (error) {
    // Message.error(`请求失败：${error}`)
    throw error
  } else {
    return { response, data }
  }
}

/**
 * Custom response data handler logic
 *
 * @param {object} response - response data returned by request
 * @return {object} data or error according to status code
 */
function handleResponse(response) {
  const { data, status } = response
  // Please modify the status key according to your business logic
  // normally the key is `status` or `code`
  if (status === 200 || status === 204) {
    return { data }
  } else {
    const error = new Error(data.message || '后端接口异常')
    return { error }
  }
}
