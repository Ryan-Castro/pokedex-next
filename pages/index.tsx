import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <div>
        <Header></Header>
        <h1>Hello World!!</h1>
      </div>
    </>
  )
}
