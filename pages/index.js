import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Avatar from '../components/Avatar'

export default function Home() {
  return (
    <>
      <Head>
        <title>Chatbot App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto">
        <Avatar />
      </main>
    </>
  )
}
