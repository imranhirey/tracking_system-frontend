import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import AppWrapper from '../componeents/reusable/Wrapper';

function MyApp({ Component, pageProps }) {
  return(<>
  <AppWrapper>
  <Component {...pageProps} />
  </AppWrapper>
  </>)
}

export default MyApp
