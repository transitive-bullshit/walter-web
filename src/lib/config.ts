export const environment = process.env.NODE_ENV || 'development'
export const isDev = environment === 'development'
export const isServer = typeof window === 'undefined'
export const isSafari =
  !isServer && /^((?!chrome|android).)*safari/i.test(navigator.userAgent)

export const title = 'Walter'
export const description = 'The discovery platform for AI tools'
export const domain = 'trywalter.ai'

export const author = 'Agentic'
export const twitter = 'trywalterai'
export const twitterUrl = `https://twitter.com/${twitter}`
export const copyright = `Copyright 2024 ${author}`
export const madeWithLove = 'Made with ❤️ in Brooklyn, NY'
export const githubUrl = 'https://github.com/transitive-bullshit/walter-web'

export const port = process.env.PORT || '3000'
export const prodUrl = `https://${domain}`
export const url = isDev ? `http://localhost:${port}` : prodUrl

export const apiBaseUrl =
  isDev || !process.env.VERCEL_URL ? url : `https://${process.env.VERCEL_URL}`
