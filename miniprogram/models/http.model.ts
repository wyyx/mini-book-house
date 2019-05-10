import { Headers } from './classic.model'

export type Method = 'OPTIONS' | 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'TRACE' | 'CONNECT'

export interface RequestOption {
  path: string
  method?: Method
  data?: { [key: string]: string | number }
  headers?: Headers
}
