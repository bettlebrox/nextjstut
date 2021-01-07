import Head from 'next/head'
import Router from 'next/router'

const Home = () => {
  return null
}

export default Home;

export const getServerSideProps = (context) => {
  const country = context.query.country || 'ie';

  process.browser ?
    Router.replace('/[country]',`${country}`):
    context.res.writeHead(302,{ Location: `/${country}`});
  context.res.end();
}