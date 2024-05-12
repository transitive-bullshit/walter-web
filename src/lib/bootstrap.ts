import { isSafari, isServer, twitterUrl } from './config'

const detail = `Coming Summer 2024. Follow ${twitterUrl} for updates.`
const banner = `
██╗    ██╗ █████╗ ██╗  ████████╗███████╗██████╗ 
██║    ██║██╔══██╗██║  ╚══██╔══╝██╔════╝██╔══██╗
██║ █╗ ██║███████║██║     ██║   █████╗  ██████╔╝
██║███╗██║██╔══██║██║     ██║   ██╔══╝  ██╔══██╗
╚███╔███╔╝██║  ██║███████╗██║   ███████╗██║  ██║
 ╚══╝╚══╝ ╚═╝  ╚═╝╚══════╝╚═╝   ╚══════╝╚═╝  ╚═╝

${detail}
`

export async function bootstrap() {
  if (isServer) return

  if (isSafari) {
    console.log(detail)
  } else {
    console.log(banner)
  }
}
