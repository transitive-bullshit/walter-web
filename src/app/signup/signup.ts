'use server'

import { emails } from '@/lib/db'

export async function signup(data: any) {
  console.log('server signup', data)
  if (!data?.email) {
    throw new Error('email is required')
  }

  // TODO: validate data

  return emails.set(data.email, true)
}
