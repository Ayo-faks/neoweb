import { Inconsolata } from '@next/font/google'

const sans = Inconsolata({
  variable: '--font-sans',
  display: 'swap',
  subsets: ['latin'],
})

const variables = [sans.variable]

export default variables
