import { envConfig } from 'src/config'
import { ApiResponse } from 'src/types'

const apiBaseUrl = envConfig('API_BASEURL')


export async function ApiFetch<T>(
  path: string,
  opts?: RequestInit
): Promise<ApiResponse<T>> {
  if (apiBaseUrl === null) {
    throw new Error('API URL not set')
  }

  const token = localStorage.getItem('__wdt')

  const defaultHeaders = {
    'content-type': 'application/json',
    ...(token && { authorization: `Bearer ${token}` })
  }

  opts = opts || {}
  opts.headers = opts.headers
    ? { ...defaultHeaders, ...opts.headers }
    : defaultHeaders
  
  const res = await fetch(`${apiBaseUrl}${path}`, opts) 
  return await res.json()
}

export type ApiFetchType = typeof ApiFetch
