import axios from 'axios'
import type { AxiosRequestConfig, AxiosInstance, AxiosResponse } from 'axios'

interface InterceptorHooks {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any

  responseInterceptor?: (response: AxiosResponse) => AxiosResponse
  responseInterceptorCatch?: (error: any) => any
}

interface RequestConfig extends AxiosRequestConfig {
  interceptorHooks: InterceptorHooks
}

class Request {
  instance: AxiosInstance
  interceptorHooks?: InterceptorHooks

  constructor(config: RequestConfig) {
    this.instance = axios.create(config)
    this.interceptorHooks = config.interceptorHooks

    this.setupInterceptor()
  }

  setupInterceptor() {
    // 对应实例独有的拦截器
    this.instance.interceptors.request.use(
      this.interceptorHooks?.requestInterceptor,
      this.interceptorHooks?.requestInterceptorCatch
    )

    this.instance.interceptors.response.use(
      this.interceptorHooks?.responseInterceptor,
      this.interceptorHooks?.responseInterceptorCatch
    )

    // 所有实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        return config
      },
      (error) => {
        return error
      }
    )

    this.instance.interceptors.response.use(
      (response) => {
        return response
      },
      (error) => {
        return error
      }
    )
  }

  request(config: RequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      this.instance
        .request(config)
        .then((response) => {
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }
}

export default Request
