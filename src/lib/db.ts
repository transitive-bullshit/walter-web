import KeyvRedis from '@keyv/redis'
import { type Redis } from 'ioredis'
import Keyv from 'keyv'

const store = new KeyvRedis(process.env.REDIS_URL!, {
  options: {
    tls: {
      rejectUnauthorized: false
    }
  }
})

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const redis = store.redis as Redis

const emails = new Keyv<boolean>({ store, namespace: 'emails' })

export { emails }
