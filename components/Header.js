import Head from 'next/head' 

const Header = () => {
    return (
      <Head>
        <title>Chatbot App</title>
        <link rel="icon" href="/favicons/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="manifest" href="/favicons/site.webmanifest" />

        {/* <!-- Primary Meta Tags --> */}
        <meta name="title" content="Chatbot App" />
        <meta name="description" content="Chat with an AI! " />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://chat.melisa-surja.me/" />
        <meta property="og:title" content="Chatbot App" />
        <meta property="og:description" content="Chat with an AI!" />
        <meta property="og:image" content="https://chat.melisa-surja.me/ss.jpg" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://chat.melisa-surja.me/" />
        <meta property="twitter:title" content="Chatbot App" />
        <meta property="twitter:description" content="Chat with an AI!" />
        <meta property="twitter:image" content="https://chat.melisa-surja.me/ss.jpg" />
      </Head>
    )
}

export default Header
