import type { AppProps } from 'next/app'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import GlobalStyle from '../components/globalstyles'
import Nav from '../components/Nav'

const theme: DefaultTheme = {
  colors: {
    background: '#111',
    font: {
      primary: '#fff',
      secondary: '#ddd',
    }
  },
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Nav/>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
