'use server'

import { emails } from '@/lib/db'

export async function signup(data: any) {
  console.log('server signup', data)

  return emails.set(data.email, true)
}
