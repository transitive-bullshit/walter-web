'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2 } from 'lucide-react'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

import { signup } from './signup'

export const signupSchema = z.object({
  email: z.string()
})
export type SignupSchema = z.infer<typeof signupSchema>

export function LoginForm() {
  const [isPending, setIsPending] = React.useState(false)
  const [result, setResult] = React.useState<any>(null)
  const form = useForm<SignupSchema>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      email: ''
    }
  })

  console.log('LoginForm', { isPending, result })

  async function onSubmit(data: SignupSchema) {
    console.log('submit', data)

    try {
      setIsPending(true)
      const res = await signup(data)
      setResult(res)
    } catch (err: any) {
      console.error('signup error', err)
    } finally {
      setIsPending(false)
    }
  }

  return (
    <Card className='w-full max-w-sm'>
      {result ? (
        <>
          <CardHeader className='w-full'>
            <CardDescription>You&apos;re on the list! 🎉</CardDescription>
          </CardHeader>
        </>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardHeader>
              <CardTitle className='text-2xl'>Sign up</CardTitle>

              <CardDescription>
                Walter will be launching soon, and you can be one of the first
                to try it out. Enter your email below to be notified when we
                launch.
              </CardDescription>
            </CardHeader>

            <CardContent className='grid gap-4'>
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem className='grid gap-2'>
                    <FormLabel>Email</FormLabel>

                    <FormControl>
                      <Input
                        type='email'
                        placeholder='ilya@openai.com'
                        required
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>

            <CardFooter>
              <Button className='w-full' type='submit' disabled={isPending}>
                {isPending ? (
                  <>
                    <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                    Submitting
                  </>
                ) : (
                  <>Sign up</>
                )}
              </Button>
            </CardFooter>
          </form>
        </Form>
      )}
    </Card>
  )
}
