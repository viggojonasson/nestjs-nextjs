import type { AppProps } from 'next/app';
import { NextPage } from 'next';

const App: NextPage = ({
  Component,
  pageProps,
  data,
}: AppProps & { data: boolean }) => {
  return (
    <>
      <h1>data from nestjs: {data}</h1>
      <Component {...pageProps} />;
    </>
  );
};

App.getInitialProps = (props) => {
  return {
    // @ts-ignore ?
    data: props.ctx.query.data,
  };
};

export default App;
