export * from './account'
export * from './promo'
export * from './server'
export * from './serverBackups'
export * from './session'

import { SuperAgentRequest } from 'superagent'

export interface Key {
  _key: string
}

/**
 * Callback function allowing a SuperAgent HTTP request to be modified before it is sent.
 * https://visionmedia.github.io/superagent/
 */
export interface RequestCallback {
  (r: SuperAgentRequest): SuperAgentRequest
}

export interface SearchResponse<T> {
  results: T[]
  metadata: {
    count: number
    limit: number
    page: number
    totalCount: number
  }
}

export interface Timestamps {
  created?: number
  updated?: number
}
